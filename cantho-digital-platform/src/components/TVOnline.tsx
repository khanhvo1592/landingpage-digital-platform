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
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<Hls | null>(null)

  const channels = [
    {
      id: 'cantho-tv',
      name: 'Cần Thơ TV',
      description: 'Kênh truyền hình chính thức của TP. Cần Thơ',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop&crop=center',
      status: 'live',
      streamUrl: 'https://megasystems-6c680321cd.gw-dthcdn.com/haugiangtv/haugiangtv.m3u8' // Direct media playlist
    },
    {
      id: 'cantho-radio',
      name: 'Phát thanh Cần Thơ',
      description: 'Nghe radio trực tuyến, podcast địa phương',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop&crop=center',
      status: 'live',
      streamUrl: 'https://60acee235f4d5.streamlock.net:443/HGTVR/hgtvradio/chunklist_w1185739904.m3u8' // Media playlist
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

  const handlePlayStream = async () => {
    
    if (!currentChannelData?.streamUrl || !videoRef.current) {
      return
    }

    setIsLoading(true)
    setError(null)

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
        
        const hls = new Hls({
          enableWorker: true
        })
        
        hlsRef.current = hls

        // Attach media first
        hls.attachMedia(video)
        
        // Load source
        hls.loadSource(currentChannelData.streamUrl)

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().then(() => {
            setIsPlaying(true)
            setIsLoading(false)
          }).catch((err) => {
            setError('Không thể phát video. Vui lòng thử lại.')
            setIsLoading(false)
          })
        })

        hls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch(data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                setError('Lỗi kết nối mạng. Vui lòng kiểm tra internet.')
                break
              case Hls.ErrorTypes.MEDIA_ERROR:
                setError('Lỗi media stream. Vui lòng thử lại.')
                break
              case Hls.ErrorTypes.MUX_ERROR:
                setError('Lỗi xử lý stream. Vui lòng thử lại.')
                break
              case Hls.ErrorTypes.OTHER_ERROR:
                setError('Lỗi không xác định. Vui lòng thử lại.')
                break
              default:
                setError('Không thể tải stream. Vui lòng thử lại.')
            }
          }
          setIsLoading(false)
        })

      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = currentChannelData.streamUrl
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
      setError('Có lỗi xảy ra khi tải stream.')
      setIsLoading(false)
    }
  }

  const handleStopStream = () => {
    if (hlsRef.current) {
      hlsRef.current.destroy()
      hlsRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.src = ''
    }
    setIsPlaying(false)
    setError(null)
  }

  const handleChannelChange = (channelId: string) => {
    setCurrentChannel(channelId)
    setIsPlaying(false)
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
    setError(null)
    handlePlayStream()
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
                {/* Video element - always present */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  playsInline
                  crossOrigin="anonymous"
                  style={{ display: isPlaying ? 'block' : 'none' }}
                />
                
                {isPlaying ? (
                  <div className="absolute inset-0">
                    {/* Elegant stop button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/60 backdrop-blur-sm rounded-full p-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={handleStopStream}
                          className="bg-red-500/80 hover:bg-red-600/90 text-white w-16 h-16 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl opacity-90 hover:opacity-100"
                        >
                          <i className="fas fa-stop text-xl"></i>
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Audio visualization for radio */}
                    {currentChannel === 'cantho-radio' && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-black/40 backdrop-blur-sm rounded-full p-12">
                          {/* Large audio waveform */}
                          <div className="flex items-center justify-center space-x-2">
                            {[...Array(12)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-2 bg-red-400 rounded-full"
                                animate={{
                                  height: [12, 48, 12],
                                  opacity: [0.4, 1, 0.4]
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                          
                          <div className="text-white text-center mt-8">
                            <i className="fas fa-music text-3xl mb-3"></i>
                            <p className="text-lg font-medium">Đang phát radio</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Subtle stop indicator */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span>Đang phát</span>
                      </div>
                    </div>
                  </div>
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