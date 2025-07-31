'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Tutorial() {
  return (
    <section id="huong-dan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hướng dẫn sử dụng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hướng dẫn chi tiết cách sử dụng các nền tảng số của Báo & PT-TH Cần Thơ
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-download text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tải ứng dụng
                  </h3>
                  <p className="text-gray-600">
                    Tải ứng dụng di động từ App Store hoặc Google Play để truy cập tất cả nền tảng
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-user-plus text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Đăng ký tài khoản
                  </h3>
                  <p className="text-gray-600">
                    Tạo tài khoản để nhận thông báo và truy cập nội dung đặc biệt
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-cog text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tùy chỉnh cài đặt
                  </h3>
                  <p className="text-gray-600">
                    Cá nhân hóa trải nghiệm theo sở thích và nhu cầu của bạn
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Xem hướng dẫn chi tiết
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center"
                alt="Hướng dẫn sử dụng"
                width={500}
                height={300}
                className="w-full"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/90 backdrop-blur-sm rounded-full p-6 cursor-pointer shadow-lg"
                >
                  <i className="fas fa-play-circle text-4xl text-blue-600"></i>
                </motion.div>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600 font-medium">
              Video hướng dẫn chi tiết
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 