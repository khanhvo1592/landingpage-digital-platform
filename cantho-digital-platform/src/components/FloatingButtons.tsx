'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FloatingButtons() {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState<'success' | 'info'>('success')

  const showNotificationMessage = (message: string, type: 'success' | 'info' = 'success') => {
    setNotificationMessage(message)
    setNotificationType(type)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Chuyển đổi số cùng Báo & PT-TH Cần Thơ',
          text: 'Khám phá các nền tảng số của Báo & Phát thanh - Truyền hình Cần Thơ',
          url: window.location.href
        })
        showNotificationMessage('Đã chia sẻ thành công!', 'success')
      } catch (error) {
        console.log('Error sharing:', error)
        fallbackShare()
      }
    } else {
      fallbackShare()
    }
  }

  const fallbackShare = async () => {
    const url = window.location.href
    const text = 'Chuyển đổi số cùng Báo & PT-TH Cần Thơ - Khám phá các nền tảng số!'
    
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${text}\n${url}`)
        showNotificationMessage('Đã sao chép link vào clipboard!', 'success')
      } else {
        alert(`${text}\n${url}`)
      }
    } catch (error) {
      alert(`${text}\n${url}`)
    }
  }

  const handleCall = () => {
    const phoneNumber = '0979989978'
    
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`
    } else {
      showNotificationMessage(`Số điện thoại: ${phoneNumber}`, 'info')
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(phoneNumber).then(() => {
          showNotificationMessage('Đã sao chép số điện thoại vào clipboard!', 'success')
        }).catch(() => {
          // Fallback
        })
      }
    }
  }

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* Share Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <i className="fas fa-share-alt text-xl relative z-10" />
        </motion.button>

        {/* Call Button */}
        <motion.button
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCall}
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group animate-pulse"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <i className="fas fa-phone text-xl relative z-10" />
        </motion.button>
      </div>

      {/* Notification */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          className={`fixed bottom-24 right-8 z-50 px-6 py-4 rounded-lg shadow-lg max-w-sm ${
            notificationType === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-blue-500 text-white'
          }`}
        >
          <div className="flex items-center space-x-3">
            <i className={`fas ${
              notificationType === 'success' ? 'fa-check-circle' : 'fa-info-circle'
            }`} />
            <span className="text-sm font-medium">{notificationMessage}</span>
          </div>
        </motion.div>
      )}
    </>
  )
} 