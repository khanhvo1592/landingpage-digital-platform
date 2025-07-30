'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { Platform } from './Platforms'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'welcome' | 'platform'
  platform?: Platform
}

export default function Modal({ isOpen, onClose, type, platform }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const WelcomeContent = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden"
    >
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-600">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop&crop=center"
          alt="Chuyển đổi số"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <i className="fas fa-digital-tachograph text-6xl"></i>
            </motion.div>
            <h2 className="text-3xl font-bold mb-2">Chào mừng đến với</h2>
            <p className="text-xl">Hệ sinh thái số Báo & PT-TH Cần Thơ</p>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="p-8">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Khám phá các nền tảng số hiện đại
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi đã xây dựng một hệ sinh thái nền tảng số đa dạng, 
              từ báo điện tử, truyền hình trực tuyến đến các kênh mạng xã hội, 
              nhằm mang đến trải nghiệm thông tin toàn diện cho người dân Cần Thơ.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: 'fas fa-newspaper', label: 'Báo điện tử', color: 'text-blue-600' },
              { icon: 'fas fa-tv', label: 'Truyền hình', color: 'text-purple-600' },
              { icon: 'fab fa-youtube', label: 'YouTube', color: 'text-red-600' },
              { icon: 'fas fa-mobile-alt', label: 'Mobile App', color: 'text-orange-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center p-4 bg-gray-50 rounded-xl"
              >
                <i className={`${item.icon} text-2xl ${item.color} mb-2`}></i>
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Bắt đầu khám phá
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const PlatformContent = () => {
    if (!platform) return null

    const categoryColors = {
      news: 'from-blue-500 to-blue-600',
      tv: 'from-purple-500 to-purple-600',
      radio: 'from-green-500 to-green-600',
      youtube: 'from-red-500 to-red-600',
      tiktok: 'from-pink-500 to-pink-600',
      facebook: 'from-blue-600 to-blue-700',
      zalo: 'from-indigo-500 to-indigo-600',
      app: 'from-orange-500 to-orange-600'
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden"
      >
        <div className={`relative h-64 bg-gradient-to-r ${categoryColors[platform.category]}`}>
          <Image
            src={platform.image}
            alt={platform.name}
            fill
            className="object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-4"
              >
                <i className={`${platform.icon} text-6xl`}></i>
              </motion.div>
              <h2 className="text-3xl font-bold mb-2">{platform.name}</h2>
              <p className="text-xl opacity-90">{platform.description}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="p-8">
          <div className="space-y-6">
            {platform.channels && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Các kênh:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {platform.channels.map((channel, index) => (
                    <div
                      key={index}
                      className={`p-4 bg-gradient-to-r ${categoryColors[platform.category]} text-white rounded-lg`}
                    >
                      <div className="flex items-center gap-3">
                        <i className={platform.icon}></i>
                        <span className="font-medium">{channel}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Truy cập:</h3>
              <div className="space-y-3">
                {platform.links.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${categoryColors[platform.category]} rounded-lg flex items-center justify-center text-white`}>
                      <i className={
                        link.type === 'website' ? 'fas fa-globe' :
                        link.type === 'download' ? 'fas fa-download' :
                        'fas fa-share-alt'
                      }></i>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-gray-500">
                        {link.type === 'website' ? 'Trang web' :
                         link.type === 'download' ? 'Tải ứng dụng' :
                         'Mạng xã hội'}
                      </p>
                    </div>
                    <i className="fas fa-external-link-alt text-gray-400 group-hover:text-blue-600 transition-colors"></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={handleBackdropClick}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative z-10 max-h-screen overflow-y-auto">
            {type === 'welcome' ? <WelcomeContent /> : <PlatformContent />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}