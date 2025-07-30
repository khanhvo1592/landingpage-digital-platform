'use client'

import { useState, useRef, useEffect } from 'react'
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
  channels?: string[]
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
    id: 'youtube-channels',
    name: 'YouTube Channels',
    description: 'Video content, livestream, tin tức visual',
    category: 'youtube',
    icon: 'fab fa-youtube',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop&crop=center',
    channels: ['Cần Thơ TV', 'Báo Cần Thơ', 'Cần Thơ News'],
    links: [
      { label: 'Cần Thơ TV', url: 'https://youtube.com/c/CanThoTV', type: 'social' },
      { label: 'Báo Cần Thơ', url: '#', type: 'social' },
      { label: 'Cần Thơ News', url: '#', type: 'social' }
    ]
  },
  {
    id: 'tiktok-channels',
    name: 'TikTok Channels',
    description: 'Content ngắn, trending, giới trẻ',
    category: 'tiktok',
    icon: 'fab fa-tiktok',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=250&fit=crop&crop=center',
    channels: ['Cần Thơ Official', 'Cần Thơ News'],
    links: [
      { label: 'Cần Thơ Official', url: '#', type: 'social' },
      { label: 'Cần Thơ News', url: '#', type: 'social' }
    ]
  },
  {
    id: 'facebook-pages',
    name: 'Facebook Pages',
    description: 'Tương tác cộng đồng, chia sẻ tin tức',
    category: 'facebook',
    icon: 'fab fa-facebook',
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=250&fit=crop&crop=center',
    channels: ['Báo Cần Thơ', 'PT-TH Cần Thơ', 'Cần Thơ Today'],
    links: [
      { label: 'Báo Cần Thơ', url: '#', type: 'social' },
      { label: 'PT-TH Cần Thơ', url: '#', type: 'social' },
      { label: 'Cần Thơ Today', url: '#', type: 'social' }
    ]
  },
  {
    id: 'zalo-channel',
    name: 'Zalo Channel',
    description: 'Kết nối trực tiếp, hỗ trợ người dân',
    category: 'zalo',
    icon: 'fas fa-comments',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop&crop=center',
    links: [
      { label: 'Zalo Official Account', url: '#', type: 'social' }
    ]
  },
  {
    id: 'mobile-app',
    name: 'Mobile App',
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
  news: { bg: 'from-blue-500 to-blue-600', icon: 'text-blue-600' },
  tv: { bg: 'from-purple-500 to-purple-600', icon: 'text-purple-600' },
  radio: { bg: 'from-green-500 to-green-600', icon: 'text-green-600' },
  youtube: { bg: 'from-red-500 to-red-600', icon: 'text-red-600' },
  tiktok: { bg: 'from-pink-500 to-pink-600', icon: 'text-pink-600' },
  facebook: { bg: 'from-blue-600 to-blue-700', icon: 'text-blue-700' },
  zalo: { bg: 'from-indigo-500 to-indigo-600', icon: 'text-indigo-600' },
  app: { bg: 'from-orange-500 to-orange-600', icon: 'text-orange-600' }
}

interface PlatformCardProps {
  platform: Platform
  onShowModal: (platform: Platform) => void
}

function PlatformCard({ platform, onShowModal }: PlatformCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 8
    const rotateY = (centerX - x) / 8

    setMousePosition({ x: rotateY, y: rotateX })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const colors = categoryColors[platform.category]

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
      }}
      className="relative group cursor-pointer"
      onClick={() => onShowModal(platform)}
    >
      {/* Card glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main card */}
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform-gpu">
        {/* Header with icon */}
        <div className={`relative h-20 bg-gradient-to-r ${colors.bg} p-6`}>
          <div className={`absolute -top-3 -left-3 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center`}>
            <i className={`${platform.icon} text-2xl ${colors.icon}`}></i>
          </div>
          
          <div className="ml-8 text-white">
            <h3 className="font-bold text-lg">{platform.name}</h3>
            <p className="text-sm opacity-90">{platform.description}</p>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={platform.image}
            alt={platform.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
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
        </div>

        {/* Content */}
        <div className="p-6">
          {platform.channels && (
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Kênh:</p>
              <div className="flex flex-wrap gap-2">
                {platform.channels.map((channel, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${colors.bg} text-white`}
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors"
          >
            Xem chi tiết
          </motion.button>
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
    <section id="nen-tang" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {platformsData.map((platform) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              onShowModal={onShowModal}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export type { Platform }