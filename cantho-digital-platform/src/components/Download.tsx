'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Download() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tải ứng dụng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tải ứng dụng di động để truy cập tất cả nền tảng số của Báo & PT-TH Cần Thơ
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-mobile-alt text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Ứng dụng di động
                  </h3>
                  <p className="text-gray-600">
                    Truy cập tất cả nền tảng từ một ứng dụng duy nhất
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-gray-700">Tin tức cập nhật 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-gray-700">Truyền hình trực tuyến</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-gray-700">Phát thanh online</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-gray-700">Thông báo tức thì</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-gray-700">Tùy chỉnh nội dung</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
              >
                <i className="fab fa-apple text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs">Tải trên</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
              >
                <i className="fab fa-google-play text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs">Tải trên</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </motion.a>
            </div>

            <div className="text-sm text-gray-500">
              <p>Hỗ trợ iOS 12.0+ và Android 6.0+</p>
              <p>Kích thước: ~50MB</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop&crop=center"
                alt="Mobile App"
                width={400}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
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
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 