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
            <p className="text-lg text-gray-600 leading-relaxed">
              Báo & Phát thanh - Truyền hình Cần Thơ là đơn vị truyền thông chính thống của thành phố Cần Thơ, 
              tiên phong trong việc chuyển đổi số và ứng dụng công nghệ hiện đại vào hoạt động truyền thông.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
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
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop&crop=center"
                alt="Video giới thiệu"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm border-2 border-white rounded-full p-6 text-white hover:bg-white/30 transition-colors"
                >
                  <i className="fas fa-play text-3xl ml-1"></i>
                </motion.button>
              </div>
              
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Video giới thiệu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}