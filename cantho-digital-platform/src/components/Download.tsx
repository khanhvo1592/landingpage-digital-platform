'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Download() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Tải ứng dụng ngay hôm nay
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trải nghiệm đầy đủ các nền tảng số của Báo & PT-TH Cần Thơ trên thiết bị di động của bạn
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { icon: 'fas fa-newspaper', text: 'Đọc tin tức mọi lúc mọi nơi' },
                { icon: 'fas fa-tv', text: 'Xem truyền hình trực tuyến' },
                { icon: 'fas fa-bell', text: 'Nhận thông báo tin tức nóng' },
                { icon: 'fas fa-share-alt', text: 'Chia sẻ nội dung dễ dàng' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <i className={feature.icon}></i>
                  </div>
                  <span className="text-lg text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Download buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors"
              >
                <i className="fab fa-apple text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Tải trên</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-4 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors"
              >
                <i className="fab fa-google-play text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Tải trên</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              {[
                { number: '50K+', label: 'Người dùng' },
                { number: '4.8', label: 'Đánh giá' },
                { number: '24/7', label: 'Cập nhật' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Phone frame */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl"
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop&crop=center"
                    alt="Mobile App Preview"
                    width={300}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                
                {/* Phone details */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360, y: [-20, 20, -20] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-lg"
              />
              <motion.div
                animate={{ rotate: -360, y: [20, -20, 20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -right-8 w-20 h-20 bg-purple-500/20 rounded-full blur-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* QR Code section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quét mã QR để tải ứng dụng
            </h3>
            <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <i className="fas fa-qrcode text-4xl text-gray-500"></i>
            </div>
            <p className="text-sm text-gray-600">
              Mở camera điện thoại và quét mã QR
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}