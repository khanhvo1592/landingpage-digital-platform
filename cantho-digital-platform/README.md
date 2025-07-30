# 🌐 Cần Thơ Digital Platform Landing Page

Landing page hiện đại cho các nền tảng số của **Báo & Phát thanh - Truyền hình Cần Thơ**, được xây dựng với Next.js, TypeScript, và Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-FF0080?style=for-the-badge&logo=framer)

## ✨ Tính năng chính

### 🎨 Giao diện hiện đại
- **Responsive Design**: Tối ưu hoàn hảo cho desktop, tablet và mobile
- **Modern UI/UX**: Thiết kế clean, chuyên nghiệp với gradient và glassmorphism
- **Dark/Light Theme**: Hỗ trợ chế độ sáng/tối (auto-detect)

### 🚀 Hiệu ứng & Animations
- **Framer Motion**: Smooth animations và micro-interactions
- **3D Card Effects**: Platform cards với hiệu ứng 3D mouse tracking
- **Scroll Animations**: Trigger animations khi scroll vào view
- **Loading Animations**: Skeleton loading và progressive enhancement

### 📱 Nền tảng số được giới thiệu
- **📰 Báo điện tử**: Tin tức địa phương chính thống
- **📺 Truyền hình**: Xem trực tuyến, lịch phát sóng
- **📻 Phát thanh**: Radio online, podcast
- **🎬 YouTube**: 3 kênh video content
- **📱 TikTok**: 2 kênh content ngắn
- **👥 Facebook**: 3 trang cộng đồng
- **💬 Zalo**: 1 kênh hỗ trợ
- **📲 Mobile App**: Ứng dụng tổng hợp

### 🎯 Tính năng tương tác
- **Modal System**: Welcome modal và platform details
- **Floating Action Buttons**: Share và Call (0979989978)
- **Smart Sharing**: Web Share API với fallback
- **Contact Form**: Form liên hệ với validation
- **Newsletter**: Đăng ký nhận tin tức

### ⚡ Performance & SEO
- **Next.js App Router**: Server-side rendering và static generation
- **Image Optimization**: Next.js Image component với lazy loading
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Core Web Vitals**: Optimized cho LCP, FID, CLS
- **Progressive Web App**: PWA capabilities

## 🛠️ Công nghệ sử dụng

### Frontend Framework
- **Next.js 15.1.6**: React framework với App Router
- **React 19**: Latest React với concurrent features
- **TypeScript**: Type safety và developer experience

### Styling & UI
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Modern icon library
- **Custom CSS**: Animation keyframes và utilities

### Development Tools
- **ESLint**: Code linting với Next.js config
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing
- **VS Code**: Recommended IDE settings

## 🚀 Cài đặt và Chạy

### Prerequisites
- Node.js ≥ 18.0.0
- npm ≥ 8.0.0 hoặc yarn ≥ 1.22.0

### 1. Clone repository
```bash
git clone https://github.com/cantho-media/digital-platform.git
cd cantho-digital-platform
```

### 2. Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### 3. Chạy development server
```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### 4. Build cho production
```bash
npm run build
npm start
# hoặc
yarn build
yarn start
```

## 📁 Cấu trúc project

```
cantho-digital-platform/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   └── components/            # React components
│       ├── Header.tsx         # Navigation header
│       ├── Hero.tsx          # Hero section
│       ├── Introduction.tsx   # About section
│       ├── Platforms.tsx      # Platform cards
│       ├── Tutorial.tsx       # Usage guide
│       ├── Download.tsx       # App download
│       ├── Contact.tsx        # Contact form
│       ├── Footer.tsx         # Footer
│       ├── FloatingButtons.tsx # Share/Call buttons
│       └── Modal.tsx          # Modal system
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies & scripts
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px - Optimized cho điện thoại
- **Tablet**: 768px - 1024px - Optimized cho máy tính bảng
- **Desktop**: > 1024px - Optimized cho máy tính

### Mobile-First Approach
- Progressive enhancement từ mobile lên desktop
- Touch-friendly interactions
- Optimized images và lazy loading
- Reduced motion cho users có preference

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#3b82f6 → #1d4ed8)
- **Secondary**: Purple gradient (#8b5cf6 → #7c3aed)
- **Success**: Green (#10b981)
- **Error**: Red (#ef4444)
- **Gray Scale**: Modern gray palette

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Scale**: Tailwind's default type scale

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Gradient backgrounds, hover animations
- **Forms**: Clean inputs với focus states
- **Icons**: Font Awesome 6 và Lucide React

## 🚀 Performance Optimizations

### Image Optimization
- Next.js Image component với automatic optimization
- WebP format với fallback
- Responsive images với srcSet
- Lazy loading với Intersection Observer

### Code Splitting
- Automatic code splitting theo routes
- Dynamic imports cho large components
- Tree shaking để remove unused code

### Caching Strategy
- Static assets với long-term caching
- API responses với appropriate cache headers
- Service Worker cho offline capabilities

## 📊 Analytics & Monitoring

### Performance Monitoring
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Error boundary với error tracking

### User Analytics
- Page view tracking
- User interaction events
- Conversion funnel analysis

## 🔒 Security

### Content Security Policy
- Strict CSP headers
- XSS protection
- CSRF protection

### Privacy
- GDPR compliant
- Cookie consent
- Data protection measures

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Connect to Vercel
npx vercel

# Deploy
vercel --prod
```

### Other Platforms
- **Netlify**: Static site deployment
- **GitHub Pages**: với static export
- **Docker**: Containerized deployment
- **Traditional hosting**: Build và upload dist folder

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Project này thuộc sở hữu của **Báo & Phát thanh - Truyền hình Cần Thơ**.

## 📞 Liên hệ

- **Email**: lienhe@baocantho.com.vn
- **Điện thoại**: 0979.989.978
- **Địa chỉ**: Số 84, Đường Trần Phú, Phường Cái Khế, Quận Ninh Kiều, TP. Cần Thơ

---

Được xây dựng với ❤️ bởi team phát triển Báo & PT-TH Cần Thơ
