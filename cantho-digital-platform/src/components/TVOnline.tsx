'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Hls from 'hls.js'

export default function TVOnline() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentChannel, setCurrentChannel] = useState('cantho-tv')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isMuted, setIsMuted] = useState(false) // Bắt đầu với âm thanh bật
  const [retryCount, setRetryCount] = useState(0) // Thêm retry counter
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<Hls | null>(null)

  const channels = [
    {
      id: 'cantho-tv',
      name: 'Cần Thơ TV',
      description: 'Kênh truyền hình chính thức của TP. Cần Thơ',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop&crop=center',
      status: 'live',
      streamUrl: 'https://megasystems-6c680321cd.gw-dthcdn.com/haugiangtv/haugiangtv.m3u8'
    },
    {
      id: 'cantho-radio',
      name: 'Phát thanh Cần Thơ',
      description: 'Nghe radio trực tuyến, podcast địa phương',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop&crop=center',
      status: 'live',
      streamUrl: 'https://60acee235f4d5.streamlock.net:443/HGTVR/hgtvradio/chunklist_w1185739904.m3u8'
    }
  ]

  const currentChannelData = channels.find(ch => ch.id === currentChannel)

  // Cleanup HLS instance
  useEffect(() => {
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
    }
  }, [])

  // Hàm bật/tắt âm thanh
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const handlePlayStream = async () => {
    console.log('handlePlayStream called') // Debug log
    
    if (!currentChannelData?.streamUrl || !videoRef.current) {
      console.log('Missing data:', { streamUrl: currentChannelData?.streamUrl, videoRef: !!videoRef.current })
      return
    }

    setIsLoading(true)
    setError(null)
    setRetryCount(0) // Reset retry count

    try {
      const video = videoRef.current
      
      // Reset video element
      video.pause()
      video.src = ''
      video.load()

      // Destroy previous HLS instance
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }

      if (Hls.isSupported()) {
        console.log('HLS is supported, creating player...')
        
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90,
          maxBufferLength: 30,
          maxMaxBufferLength: 600,
          maxBufferSize: 60 * 1000 * 1000,
          liveDurationInfinity: true,
          liveBackBufferLength: 90,
          liveSyncDuration: 2,
          liveMaxLatencyDuration: 4,
          progressive: false,
          enableSoftwareAES: true,
          debug: false,
          // Thêm cấu hình để xử lý lỗi tốt hơn
          fragLoadingTimeOut: 20000,
          manifestLoadingTimeOut: 20000,
          levelLoadingTimeOut: 20000,
          xhrSetup: function(xhr, url) {
            xhr.withCredentials = false;
          }
        })
        
        hlsRef.current = hls

        // Attach media first
        hls.attachMedia(video)
        
        // Load source
        hls.loadSource(currentChannelData.streamUrl)

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log('Manifest parsed, starting playback...')
          // Bắt đầu với âm thanh bật
          video.muted = false
          setIsMuted(false)
          
          video.play().then(() => {
            console.log('Playback started successfully')
            setIsPlaying(true)
            setIsLoading(false)
          }).catch((err) => {
            console.error('Playback failed:', err)
            setError('Không thể phát video. Vui lòng thử lại.')
            setIsLoading(false)
          })
        })

        hls.on(Hls.Events.ERROR, (event, data) => {
          // console.error('HLS Error:', data)
          // Chỉ xử lý lỗi fatal
          if (data.fatal) {
            switch(data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.error('Network error:', data.details)
                setError('Lỗi kết nối mạng. Vui lòng kiểm tra internet.')
                break
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.error('Media error:', data.details)
                setError('Lỗi media stream. Vui lòng thử lại.')
                break
              case Hls.ErrorTypes.MUX_ERROR:
                console.error('Mux error:', data.details)
                setError('Lỗi xử lý stream. Vui lòng thử lại.')
                break
              case Hls.ErrorTypes.OTHER_ERROR:
                console.error('Other error:', data.details)
                setError('Lỗi không xác định. Vui lòng thử lại.')
                break
              default:
                console.error('Unknown error:', data.details)
                setError('Không thể tải stream. Vui lòng thử lại.')
            }
            setIsLoading(false)
          } else {
            // Lỗi không fatal - chỉ log, không hiển thị error
            // Lọc bỏ lỗi GapController vì đây là lỗi thường gặp với live streams
            if (data.details && !data.details.includes('GapController')) {
              console.warn('Non-fatal HLS error:', data)
            }
          }
        })

        // Thêm event listeners khác để debug
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          console.log('Media attached successfully')
        })

        hls.on(Hls.Events.MANIFEST_LOADING, () => {
          console.log('Loading manifest...')
        })

        hls.on(Hls.Events.MANIFEST_LOADED, () => {
          console.log('Manifest loaded successfully')
        })

        hls.on(Hls.Events.LEVEL_LOADING, () => {
          console.log('Level loading...')
        })

        hls.on(Hls.Events.LEVEL_LOADED, () => {
          console.log('Level loaded successfully')
        })

        // Thêm event listeners cho live streams
        hls.on(Hls.Events.FRAG_LOADING, () => {
          console.log('Fragment loading...')
        })

        hls.on(Hls.Events.FRAG_LOADED, () => {
          console.log('Fragment loaded successfully')
        })

        hls.on(Hls.Events.FRAG_PARSED, () => {
          console.log('Fragment parsed successfully')
        })

        // Theo dõi trạng thái live stream
        hls.on(Hls.Events.LIVE_BACK_BUFFER_REACHED, () => {
          console.log('Live back buffer reached')
        })

      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        console.log('Using native HLS support')
        video.src = currentChannelData.streamUrl
        video.muted = false
        setIsMuted(false)
        
        video.addEventListener('loadedmetadata', () => {
          video.play().then(() => {
            setIsPlaying(true)
            setIsLoading(false)
          }).catch((err) => {
            setError('Không thể phát video. Vui lòng thử lại.')
            setIsLoading(false)
          })
        })
        video.addEventListener('error', (e) => {
          setError('Không thể tải stream. Vui lòng thử lại.')
          setIsLoading(false)
        })
      } else {
        setError('Trình duyệt không hỗ trợ HLS streaming.')
        setIsLoading(false)
      }
    } catch (err) {
      console.error('Stream error:', err)
      setError('Có lỗi xảy ra khi tải stream.')
      setIsLoading(false)
    }
  }

  const handleStopStream = () => {
    console.log('handleStopStream called') // Debug log
    if (hlsRef.current) {
      hlsRef.current.destroy()
      hlsRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.src = ''
    }
    setIsPlaying(false)
    setIsMuted(false) // Reset về âm thanh bật
    setError(null)
  }

  const handleChannelChange = (channelId: string) => {
    console.log('handleChannelChange called:', channelId) // Debug log
    setCurrentChannel(channelId)
    setIsPlaying(false)
    setIsMuted(false) // Reset về âm thanh bật
    setError(null)
    if (hlsRef.current) {
      hlsRef.current.destroy()
      hlsRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.src = ''
    }
  }

  const handleRetry = () => {
    console.log('handleRetry called') // Debug log
    setError(null)
    setRetryCount(prev => prev + 1)
    
    // Giới hạn số lần retry
    if (retryCount >= 3) {
      setError('Đã thử lại quá nhiều lần. Vui lòng kiểm tra kết nối mạng.')
      setRetryCount(0)
      return
    }
    
    // Delay trước khi retry
    setTimeout(() => {
      handlePlayStream()
    }, 1000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Xem Truyền hình Trực tuyến
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Khám phá các kênh truyền hình và phát thanh chính thức của Báo & PT-TH Cần Thơ
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main TV Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* TV Frame */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black group">
                {/* Video element - luôn render nhưng ẩn khi không phát */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  crossOrigin="anonymous"
                  style={{ 
                    display: isPlaying ? 'block' : 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: isPlaying ? 10 : -1
                  }}
                />
                
                {/* Smooth fade in overlay khi đang phát */}
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 1.2, 
                      ease: "easeOut",
                      delay: 0.3 // Delay để video load trước
                    }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 pointer-events-none"
                    style={{ zIndex: 15 }}
                  />
                )}
                
                {isPlaying ? (
                  <motion.div 
                    className="absolute inset-0 pointer-events-none" 
                    style={{ zIndex: 20 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeOut",
                      delay: 0.5 // Delay để video và overlay load trước
                    }}
                  >
                    {/* Minimal controls overlay - hiển thị khi hover */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-auto">
                      <div className="flex space-x-2">
                        {/* Nút bật/tắt âm thanh - nhỏ gọn */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={toggleMute}
                          className="bg-black/40 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-black/60 border border-white/20"
                        >
                          <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-xs`}></i>
                        </motion.button>
                        
                        {/* Nút Stop - nhỏ gọn */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleStopStream}
                          className="bg-red-500/60 backdrop-blur-sm text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-red-500/80 border border-red-400/30"
                        >
                          <i className="fas fa-stop text-xs"></i>
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Audio visualization for radio - chỉ hiển thị khi không có video controls */}
                    {currentChannel === 'cantho-radio' && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 1.0, 
                          ease: "easeOut",
                          delay: 0.8
                        }}
                      >
                        <div className="bg-black/30 backdrop-blur-sm rounded-full p-8">
                          {/* Compact audio waveform */}
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1 bg-red-400 rounded-full"
                                animate={{
                                  height: [8, 32, 8],
                                  opacity: [0.3, 1, 0.3]
                                }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                          
                          <div className="text-white text-center mt-4">
                            <i className="fas fa-music text-xl mb-2"></i>
                            <p className="text-sm font-medium">Đang phát radio</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Minimal status indicator */}
                    <motion.div 
                      className="absolute top-3 left-3 pointer-events-none"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        ease: "easeOut",
                        delay: 0.4
                      }}
                    >
                      <div className="bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs flex items-center space-x-1 border border-white/20">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium">LIVE</span>
                        {isMuted && (
                          <i className="fas fa-volume-mute text-yellow-400 text-xs"></i>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {currentChannelData?.image && (
                      <Image
                        src={currentChannelData.image}
                        alt={currentChannelData.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={currentChannel === 'cantho-tv'}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      {isLoading ? (
                        <div className="text-center text-white">
                          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                          <p>Đang tải stream...</p>
                        </div>
                      ) : (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={handlePlayStream}
                          disabled={isLoading}
                          className="bg-red-500/80 hover:bg-red-600/90 text-white w-20 h-20 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                        >
                          <i className="fas fa-play text-2xl ml-1"></i>
                        </motion.button>
                      )}
                    </div>
                  </div>
                )}

                {/* Error message */}
                {error && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <i className="fas fa-exclamation-triangle text-4xl text-red-500 mb-4"></i>
                      <p className="text-lg font-semibold mb-2">Lỗi Stream</p>
                      <p className="text-sm text-gray-300 mb-4">{error}</p>
                      <div className="space-y-2">
                        <button
                          onClick={handleRetry}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mr-2"
                        >
                          Thử lại
                        </button>
                        <button
                          onClick={() => setError(null)}
                          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          Đóng
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Channel info */}
              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-bold text-white mb-2">{currentChannelData?.name}</h3>
                <p className="text-gray-300 mb-4">{currentChannelData?.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Channel List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">Các kênh khác</h3>
            {channels.map((channel) => (
              <motion.div
                key={channel.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleChannelChange(channel.id)}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                  currentChannel === channel.id ? 'bg-white/20 ring-2 ring-blue-400' : 'hover:bg-white/15'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    {channel.image && (
                      <Image
                        src={channel.image}
                        alt={channel.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{channel.name}</h4>
                    <p className="text-sm text-blue-200">{channel.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <i className="fas fa-tv mr-2"></i>
            Xem tất cả kênh
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 