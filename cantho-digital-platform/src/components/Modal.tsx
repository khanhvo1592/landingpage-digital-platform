'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Platform } from './Platforms'

interface ModalProps {
  platform?: Platform
  isOpen: boolean
  onClose: () => void
  type: 'platform' | 'welcome'
}

export default function Modal({ platform, isOpen, onClose, type }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const renderPlatformModal = () => (
    <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
      {platform && (
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <i className={`${platform.icon} text-2xl text-white`}></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{platform.name}</h2>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <i className="fas fa-times text-gray-600"></i>
            </button>
          </div>

          {platform.channels && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Các kênh:</h3>
              <div className="flex flex-wrap gap-2">
                {platform.channels.map((channel, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Liên kết:</h3>
            <div className="grid gap-3">
              {platform.links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <i className={`fas ${
                      link.type === 'website' ? 'fa-globe' :
                      link.type === 'download' ? 'fa-download' :
                      'fa-external-link-alt'
                    } text-blue-600`}></i>
                    <span className="font-medium text-gray-900">{link.label}</span>
                  </div>
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderWelcomeModal = () => (
    <div className="bg-white rounded-2xl max-w-2xl w-full mx-4">
      <div className="p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-hand-wave text-3xl text-white"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Chào mừng bạn!
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Khám phá hệ sinh thái nền tảng số đa dạng của Báo & Phát thanh - Truyền hình Cần Thơ. 
            Chúng tôi cung cấp tin tức, truyền hình trực tuyến, phát thanh và nhiều nội dung thú vị khác.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <i className="fas fa-newspaper text-2xl text-blue-600 mb-2"></i>
            <h3 className="font-semibold text-gray-900 mb-2">Tin tức cập nhật</h3>
            <p className="text-sm text-gray-600">Thông tin mới nhất về Cần Thơ</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <i className="fas fa-tv text-2xl text-green-600 mb-2"></i>
            <h3 className="font-semibold text-gray-900 mb-2">Truyền hình trực tuyến</h3>
            <p className="text-sm text-gray-600">Xem chương trình mọi lúc</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <i className="fas fa-radio text-2xl text-purple-600 mb-2"></i>
            <h3 className="font-semibold text-gray-900 mb-2">Phát thanh online</h3>
            <p className="text-sm text-gray-600">Nghe radio mọi nơi</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <i className="fas fa-mobile-alt text-2xl text-orange-600 mb-2"></i>
            <h3 className="font-semibold text-gray-900 mb-2">Ứng dụng di động</h3>
            <p className="text-sm text-gray-600">Tải app để trải nghiệm tốt hơn</p>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Bắt đầu khám phá
          </motion.button>
        </div>
      </div>
    </div>
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            {type === 'platform' ? renderPlatformModal() : renderWelcomeModal()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 