'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Introduction() {
  return (
    <section id="gioi-thieu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Giới thiệu
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Báo & Phát thanh - Truyền hình Cần Thơ là đơn vị truyền thông chính thống của thành phố Cần Thơ, 
              tiên phong trong việc chuyển đổi số và ứng dụng công nghệ hiện đại vào hoạt động truyền thông.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Với tầm nhìn trở thành đơn vị truyền thông số hàng đầu khu vực Đồng bằng sông Cửu Long, 
              chúng tôi không ngừng đổi mới và phát triển các nền tảng số để phục vụ người dân tốt hơn.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=250&fit=crop&crop=center"
                alt="Video giới thiệu"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-play text-white text-2xl ml-1"></i>
                </div>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600 font-medium">
              Video giới thiệu
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 