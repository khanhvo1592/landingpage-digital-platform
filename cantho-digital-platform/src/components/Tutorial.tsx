'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Tutorial() {
  const tutorials = [
    {
      title: 'Tải ứng dụng mobile',
      description: 'Hướng dẫn tải và cài đặt ứng dụng trên điện thoại',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center',
      icon: 'fas fa-mobile-alt',
      steps: ['Mở App Store/Play Store', 'Tìm kiếm "Cần Thơ TV"', 'Tải và cài đặt', 'Mở ứng dụng và đăng ký']
    },
    {
      title: 'Xem truyền hình trực tuyến',
      description: 'Cách xem các chương trình truyền hình online',
      image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop&crop=center',
      icon: 'fas fa-tv',
      steps: ['Truy cập website', 'Chọn kênh xem', 'Click "Xem trực tuyến"', 'Thưởng thức chương trình']
    },
    {
      title: 'Theo dõi mạng xã hội',
      description: 'Kết nối với chúng tôi trên các nền tảng xã hội',
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=250&fit=crop&crop=center',
      icon: 'fas fa-share-alt',
      steps: ['Tìm trang chính thức', 'Nhấn "Follow/Theo dõi"', 'Bật thông báo', 'Tương tác với nội dung']
    }
  ]

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
            Tìm hiểu cách sử dụng các nền tảng số của chúng tôi một cách hiệu quả
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tutorial.image}
                  alt={tutorial.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white">
                    <i className={`${tutorial.icon} text-2xl`}></i>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tutorial.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Các bước thực hiện:</h4>
                  <ol className="space-y-2">
                    {tutorial.steps.map((step, stepIndex) => (
                      <motion.li
                        key={stepIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (stepIndex * 0.1) }}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium text-xs">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </motion.li>
                    ))}
                  </ol>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 bg-blue-50 hover:bg-blue-100 text-blue-600 py-3 rounded-lg font-medium transition-colors"
                >
                  Xem chi tiết
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video tutorial section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Video hướng dẫn chi tiết
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Xem video hướng dẫn toàn diện về cách sử dụng tất cả các nền tảng số
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow inline-flex items-center gap-2"
            >
              <i className="fas fa-play"></i>
              Xem video hướng dẫn
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}