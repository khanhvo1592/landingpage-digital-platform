'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
  onShowWelcomeModal?: () => void
}

export default function Hero({ onShowWelcomeModal }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Chuyển đổi số cùng{' '}
              <span className="text-blue-600">
                Báo & Phát thanh - Truyền hình Cần Thơ
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Khám phá các nền tảng số hiện đại, cập nhật tin tức mọi lúc mọi nơi
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('nen-tang')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Khám phá ngay
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('download')}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-lg hover:shadow-xl"
              >
                Tải ứng dụng
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onShowWelcomeModal}
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <i className="fas fa-info-circle"></i>
                Xem giới thiệu
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop&crop=center"
                  alt="Digital Media Platform"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}