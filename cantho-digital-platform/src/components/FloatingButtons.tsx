'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingButtons() {
  const [showNotification, setShowNotification] = useState<{
    message: string
    type: 'success' | 'info'
  } | null>(null)

  const showNotificationMessage = (message: string, type: 'success' | 'info') => {
    setShowNotification({ message, type })
    setTimeout(() => setShowNotification(null), 3000)
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
    
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${text}\n${url}`)
        showNotificationMessage('Đã sao chép link vào clipboard!', 'success')
      } catch {
        alert(`${text}\n${url}`)
      }
    } else {
      alert(`${text}\n${url}`)
    }
  }

  const handleCall = async () => {
    const phoneNumber = '0979989978'
    
    // Check if it's a mobile device
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = `tel:${phoneNumber}`
    } else {
      showNotificationMessage(`Số điện thoại: ${phoneNumber}`, 'info')
      
      if (navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(phoneNumber)
          setTimeout(() => {
            showNotificationMessage('Đã sao chép số điện thoại vào clipboard!', 'success')
          }, 1000)
        } catch {
          // Fallback handled by the first notification
        }
      }
    }
  }

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Share Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center relative overflow-hidden group"
          title="Chia sẻ trang web"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <i className="fas fa-share-alt text-lg relative z-10"></i>
        </motion.button>

        {/* Call Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCall}
          className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center relative overflow-hidden group animate-pulse"
          title="Gọi điện thoại"
          style={{
            animation: 'pulse-call 2s infinite'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <i className="fas fa-phone text-lg relative z-10"></i>
        </motion.button>
      </div>

      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 50 }}
            className="fixed bottom-32 right-6 z-50 max-w-sm"
          >
            <div className={`px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm border ${
              showNotification.type === 'success' 
                ? 'bg-green-500/90 text-white border-green-400' 
                : 'bg-blue-500/90 text-white border-blue-400'
            }`}>
              <div className="flex items-center gap-2">
                <i className={`fas ${showNotification.type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}`}></i>
                <span className="text-sm font-medium">{showNotification.message}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes pulse-call {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
      `}</style>
    </>
  )
}