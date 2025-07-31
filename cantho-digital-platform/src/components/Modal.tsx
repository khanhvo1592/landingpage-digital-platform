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
    <div className="bg-white rounded-2xl max-w-3xl w-full mx-4">
      <div className="p-6">
        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <i className="fas fa-broadcast-tower text-2xl text-white"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            🎉 THÔNG BÁO MỚI
          </h2>
          <h3 className="text-xl font-bold text-blue-600 mb-3">
            Kênh Truyền hình & Phát thanh Khoa giáo – Giải trí
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-4">
          {/* Image */}
          <div className="relative">
            <img
              src="/notice.png"
              alt="Thông báo kênh mới"
              className="w-full aspect-video object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p className="text-base">
              Từ ngày <strong>01/8/2025</strong>, Báo và Phát thanh, Truyền hình Cần Thơ chính thức đưa vào vận hành:
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="font-semibold text-sm">Kênh Truyền hình Khoa giáo – Giải trí (Cần Thơ 2)</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="font-semibold text-sm">Kênh Phát thanh Khoa giáo – Giải trí (FM 89,6MHz)</p>
              </div>
            </div>

            <p className="text-base mt-3">
              Phục vụ nội dung khoa giáo, đời sống, văn hóa – giải trí đa nền tảng. Với định hướng <strong>hiện đại – gần gũi – nhân văn</strong>, hướng tới việc lan tỏa thông tin hữu ích, truyền cảm hứng tích cực và đồng hành cùng sự phát triển của cộng đồng.
            </p>

            <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-base font-semibold text-blue-800">
                👉 Hãy đón xem – đón nghe – và đồng hành cùng chúng tôi!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            <i className="fas fa-search mr-2"></i>
            Khám phá thêm
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