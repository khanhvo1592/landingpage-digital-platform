'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Về chúng tôi': [
      { label: 'Giới thiệu', href: '#gioi-thieu' },
      { label: 'Tầm nhìn sứ mệnh', href: '#' },
      { label: 'Lịch sử phát triển', href: '#' },
      { label: 'Tuyển dụng', href: '#' }
    ],
    'Nền tảng số': [
      { label: 'Báo điện tử', href: '#nen-tang' },
      { label: 'Truyền hình', href: '#nen-tang' },
      { label: 'Phát thanh', href: '#nen-tang' },
      { label: 'Ứng dụng mobile', href: '#download' }
    ],
    'Hỗ trợ': [
      { label: 'Hướng dẫn sử dụng', href: '#huong-dan' },
      { label: 'Câu hỏi thường gặp', href: '#' },
      { label: 'Liên hệ hỗ trợ', href: '#lien-he' },
      { label: 'Báo lỗi', href: '#' }
    ]
  }

  const socialMedia = [
    { 
      icon: 'fab fa-facebook', 
      url: '#', 
      color: 'hover:bg-blue-600',
      name: 'Facebook'
    },
    { 
      icon: 'fab fa-youtube', 
      url: '#', 
      color: 'hover:bg-red-600',
      name: 'YouTube'
    },
    { 
      icon: 'fab fa-tiktok', 
      url: '#', 
      color: 'hover:bg-pink-600',
      name: 'TikTok'
    },
    { 
      icon: 'fas fa-comments', 
      url: '#', 
      color: 'hover:bg-indigo-600',
      name: 'Zalo'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <Image
                src="https://via.placeholder.com/200x60/ffffff/1e40af?text=Báo+&+Đài+PT-TH+Cần+Thơ"
                alt="Logo Báo & PT-TH Cần Thơ"
                width={200}
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed">
                Đơn vị truyền thông chính thống của thành phố Cần Thơ, 
                tiên phong trong việc chuyển đổi số và ứng dụng công nghệ hiện đại.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
                <span className="text-gray-300">
                  Số 84, Đường Trần Phú, Phường Cái Khế, Quận Ninh Kiều, TP. Cần Thơ
                </span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-blue-400"></i>
                <span className="text-gray-300">0979.989.978</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-blue-400"></i>
                <span className="text-gray-300">lienhe@baocantho.com.vn</span>
              </div>
            </div>
          </motion.div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-4">Đăng ký nhận tin</h3>
            <p className="text-gray-300 text-sm mb-4">
              Nhận thông tin tin tức mới nhất từ chúng tôi
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Đăng ký
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Báo & Phát thanh - Truyền hình Cần Thơ. Tất cả quyền được bảo lưu.
            </div>

            {/* Social media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Theo dõi chúng tôi:</span>
              <div className="flex gap-2">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-gray-800 ${social.color} rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300`}
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
              title="Về đầu trang"
            >
              <i className="fas fa-arrow-up"></i>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}