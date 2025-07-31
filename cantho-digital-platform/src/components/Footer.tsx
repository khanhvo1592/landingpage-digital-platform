'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">TRANG TTĐT BÁO VÀ PHÁT THANH, TRUYỀN HÌNH CẦN THƠ</h3>
            <p className="text-gray-400 leading-relaxed">
              <strong>Quyền Tổng Biên tập:</strong> HUỲNH HOÀNG MẾN
            </p>
            <p className="text-gray-400 leading-relaxed">
              <strong>Giấy phép số:</strong> 153/GP-TTĐT, cấp lại lần 2 ngày 18/12/2024
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <i className="fab fa-tiktok"></i>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Nền tảng số</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Báo Cần Thơ Online
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Truyền hình Cần Thơ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Phát thanh Cần Thơ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mobile App
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Hỗ trợ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hướng dẫn sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Liên hệ hỗ trợ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Báo lỗi
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
                <span>Số 409 đường 30/4, P. Tân An, Thành phố Cần Thơ</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-green-400"></i>
                <span>(84) 0292.3838750</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-fax text-yellow-400"></i>
                <span>(84) 0292.3820199</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-purple-400"></i>
                <span>daiptthtpct@cantho.gov.vn</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>
            © 2025 - TRANG TTĐT BÁO VÀ PHÁT THANH, TRUYỀN HÌNH CẦN THƠ
          </p>
          <p className="mt-2 text-sm">
            Phát triển bởi đội ngũ công nghệ Báo & PT-TH Cần Thơ
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 