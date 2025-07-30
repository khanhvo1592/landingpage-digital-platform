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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop&crop=center"
                alt="Video giới thiệu"
                width={400}
                height={250}
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
              Video giới thiệu
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 