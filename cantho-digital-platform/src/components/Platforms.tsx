'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Platform {
  id: string
  name: string
  description: string
  category: 'news' | 'tv' | 'radio' | 'youtube' | 'tiktok' | 'facebook' | 'zalo' | 'app'
  icon: string
  image: string
  links: Array<{
    label: string
    url: string
    type: 'website' | 'download' | 'social'
  }>
}

const platformsData: Platform[] = [
  {
    id: 'bao-cantho',
    name: 'Báo Cần Thơ Online',
    description: 'Tin tức địa phương, thời sự chính thống',
    category: 'news',
    icon: 'fas fa-newspaper',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Trang web chính', url: 'https://baocantho.com.vn', type: 'website' }
    ]
  },
  {
    id: 'cantho-tv',
    name: 'Truyền hình Cần Thơ',
    description: 'Xem truyền hình trực tuyến, chương trình địa phương',
    category: 'tv',
    icon: 'fas fa-tv',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Xem trực tuyến', url: '#', type: 'website' },
      { label: 'Lịch phát sóng', url: '#', type: 'website' }
    ]
  },
  {
    id: 'cantho-radio',
    name: 'Phát thanh Cần Thơ',
    description: 'Nghe radio trực tuyến, podcast địa phương',
    category: 'radio',
    icon: 'fas fa-radio',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Nghe trực tuyến', url: '#', type: 'website' },
      { label: 'Podcast', url: '#', type: 'website' }
    ]
  },
  {
    id: 'youtube-cantho-tv',
    name: 'Cần Thơ TV - YouTube',
    description: 'Kênh YouTube chính thức của Truyền hình Cần Thơ',
    category: 'youtube',
    icon: 'fab fa-youtube',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Xem kênh', url: 'https://youtube.com/c/CanThoTV', type: 'social' }
    ]
  },
  {
    id: 'youtube-bao-cantho',
    name: 'Báo Cần Thơ - YouTube',
    description: 'Kênh YouTube của Báo Cần Thơ',
    category: 'youtube',
    icon: 'fab fa-youtube',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Xem kênh', url: '#', type: 'social' }
    ]
  },
  {
    id: 'youtube-cantho-news',
    name: 'Cần Thơ News - YouTube',
    description: 'Kênh tin tức nhanh của Cần Thơ',
    category: 'youtube',
    icon: 'fab fa-youtube',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Xem kênh', url: '#', type: 'social' }
    ]
  },
  {
    id: 'tiktok-cantho-official',
    name: 'Cần Thơ Official - TikTok',
    description: 'Tài khoản TikTok chính thức của Cần Thơ',
    category: 'tiktok',
    icon: 'fab fa-tiktok',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Xem TikTok', url: '#', type: 'social' }
    ]
  },
  {
    id: 'tiktok-cantho-news',
    name: 'Cần Thơ News - TikTok',
    description: 'TikTok tin tức nhanh của Cần Thơ',
    category: 'tiktok',
    icon: 'fab fa-tiktok',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Xem TikTok', url: '#', type: 'social' }
    ]
  },
  {
    id: 'facebook-bao-cantho',
    name: 'Báo Cần Thơ - Facebook',
    description: 'Trang Facebook chính thức của Báo Cần Thơ',
    category: 'facebook',
    icon: 'fab fa-facebook',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Xem trang', url: '#', type: 'social' }
    ]
  },
  {
    id: 'facebook-ptth-cantho',
    name: 'PT-TH Cần Thơ - Facebook',
    description: 'Trang Facebook của Phát thanh Truyền hình Cần Thơ',
    category: 'facebook',
    icon: 'fab fa-facebook',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Xem trang', url: '#', type: 'social' }
    ]
  },
  {
    id: 'facebook-cantho-today',
    name: 'Cần Thơ Today - Facebook',
    description: 'Trang Facebook tin tức hàng ngày',
    category: 'facebook',
    icon: 'fab fa-facebook',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Xem trang', url: '#', type: 'social' }
    ]
  },
  {
    id: 'zalo-official',
    name: 'Zalo Official Account',
    description: 'Tài khoản Zalo chính thức của Cần Thơ',
    category: 'zalo',
    icon: 'fas fa-comments',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Kết nối Zalo', url: '#', type: 'social' }
    ]
  },
  {
    id: 'mobile-app',
    name: 'Mobile App Cần Thơ',
    description: 'Ứng dụng di động tổng hợp tất cả nền tảng',
    category: 'app',
    icon: 'fas fa-mobile-alt',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'App Store', url: '#', type: 'download' },
      { label: 'Google Play', url: '#', type: 'download' }
    ]
  }
]

const categoryColors = {
  news: { bg: 'from-blue-500 to-blue-600', icon: 'text-blue-600', glow: 'shadow-blue-500/50' },
  tv: { bg: 'from-purple-500 to-purple-600', icon: 'text-purple-600', glow: 'shadow-purple-500/50' },
  radio: { bg: 'from-green-500 to-green-600', icon: 'text-green-600', glow: 'shadow-green-500/50' },
  youtube: { bg: 'from-red-500 to-red-600', icon: 'text-red-600', glow: 'shadow-red-500/50' },
  tiktok: { bg: 'from-pink-500 to-pink-600', icon: 'text-pink-600', glow: 'shadow-pink-500/50' },
  facebook: { bg: 'from-blue-600 to-blue-700', icon: 'text-blue-700', glow: 'shadow-blue-600/50' },
  zalo: { bg: 'from-indigo-500 to-indigo-600', icon: 'text-indigo-600', glow: 'shadow-indigo-500/50' },
  app: { bg: 'from-orange-500 to-orange-600', icon: 'text-orange-600', glow: 'shadow-orange-500/50' }
}

interface PlatformCardProps {
  platform: Platform
  onShowModal: (platform: Platform) => void
  index: number
}

function PlatformCard({ platform, onShowModal, index }: PlatformCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 12
    const rotateY = (centerX - x) / 12

    setMousePosition({ x: rotateY, y: rotateX })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePosition({ x: 0, y: 0 })
  }, [])

  const handleClick = useCallback(() => {
    onShowModal(platform)
  }, [platform, onShowModal])

  const colors = categoryColors[platform.category]

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -15, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
      }}
      className="relative group cursor-pointer h-full"
      onClick={handleClick}
    >
      {/* Connection lines */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      {/* Card glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      {/* Main card */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform-gpu border border-white/20 h-full flex flex-col">
        {/* Header with gradient */}
        <div className={`relative h-20 bg-gradient-to-r ${colors.bg} p-4 flex items-center justify-between`}>
          <div className="text-white flex-1 min-w-0">
            <h3 className="font-bold text-lg truncate">{platform.name}</h3>
            <p className="text-sm opacity-90 line-clamp-2">{platform.description}</p>
          </div>

          {/* Category icon */}
          <div className={`w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 ml-3`}>
            <i className={`${platform.icon} text-lg text-white`}></i>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          {platform.image && (
            <Image
              src={platform.image}
              alt={platform.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg"
            >
              <i className="fas fa-eye text-2xl text-gray-700"></i>
            </motion.div>
          </div>

          {/* CTA Icon */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`w-12 h-12 bg-gradient-to-r ${colors.bg} rounded-full flex items-center justify-center shadow-lg`}
            >
              <i className="fas fa-external-link-alt text-white text-lg"></i>
            </motion.div>
          </div>

          {/* Pulse animation */}
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Content - flex-grow để đảm bảo cùng chiều cao */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Spacer để đẩy content xuống dưới */}
          <div className="flex-grow"></div>

          {/* CTA Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className={`w-6 h-6 bg-gradient-to-r ${colors.bg} rounded-full flex items-center justify-center`}
              >
                <i className="fas fa-arrow-right text-white text-xs"></i>
              </motion.div>
              <span className="text-sm font-medium text-gray-600">Khám phá ngay</span>
            </div>
            
            {/* Category indicator */}
            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${colors.bg} text-white text-xs font-medium`}>
              {platform.category === 'news' && 'Báo chí'}
              {platform.category === 'tv' && 'Truyền hình'}
              {platform.category === 'radio' && 'Phát thanh'}
              {platform.category === 'youtube' && 'YouTube'}
              {platform.category === 'tiktok' && 'TikTok'}
              {platform.category === 'facebook' && 'Facebook'}
              {platform.category === 'zalo' && 'Zalo'}
              {platform.category === 'app' && 'Mobile App'}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface PlatformsProps {
  onShowModal: (platform: Platform) => void
}

export default function Platforms({ onShowModal }: PlatformsProps) {
  return (
    <section id="nen-tang" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nền tảng số
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá hệ sinh thái nền tảng số đa dạng của Báo & PT-TH Cần Thơ
          </p>
          
          {/* Connection visualization */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {platformsData.map((platform, index) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              onShowModal={onShowModal}
              index={index}
            />
          ))}
        </div>

        {/* Ecosystem connection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hệ sinh thái kết nối
            </h3>
            <p className="text-gray-600 mb-6">
              Tất cả nền tảng được tích hợp và kết nối với nhau, tạo ra trải nghiệm thống nhất cho người dùng
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-sync-alt text-blue-600"></i>
                </div>
                <div className="text-sm font-medium text-gray-900">Đồng bộ</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-share-alt text-green-600"></i>
                </div>
                <div className="text-sm font-medium text-gray-900">Chia sẻ</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-users text-purple-600"></i>
                </div>
                <div className="text-sm font-medium text-gray-900">Cộng đồng</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fas fa-mobile-alt text-orange-600"></i>
                </div>
                <div className="text-sm font-medium text-gray-900">Di động</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export type { Platform } 