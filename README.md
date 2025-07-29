# Landing Page - Báo & Đài PT-TH Cần Thơ

Landing page hiện đại và responsive cho các nền tảng số của Báo & Đài Phát thanh - Truyền hình Cần Thơ.

## 🚀 Tính năng

### Giao diện
- **Responsive Design**: Tương thích hoàn hảo trên desktop, tablet và mobile
- **Modern UI/UX**: Thiết kế hiện đại với animations mượt mà
- **Performance Optimized**: Tối ưu tốc độ tải trang
- **Accessibility**: Hỗ trợ đầy đủ cho người khuyết tật

### Chức năng
- **Navigation**: Menu điều hướng cố định với smooth scrolling
- **Platform Showcase**: Giới thiệu các nền tảng số với cards đẹp mắt
- **Contact Form**: Form liên hệ với validation
- **Download Section**: Khu vực tải ứng dụng nổi bật
- **Mobile Menu**: Menu hamburger cho mobile
- **Notifications**: Hệ thống thông báo tương tác

## 📁 Cấu trúc dự án

```
landingpage-digital-platform/
├── index.html          # File HTML chính
├── styles.css          # File CSS styles
├── script.js           # File JavaScript tương tác
├── README.md           # Hướng dẫn sử dụng
└── idea.MD            # Yêu cầu ban đầu
```

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: Flexbox, Grid, Animations, Responsive Design
- **JavaScript ES6+**: DOM manipulation, Event handling
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 🎨 Thiết kế

### Màu sắc chủ đạo
- **Primary Blue**: `#1e40af` - Màu chính
- **Secondary Blue**: `#3b82f6` - Màu phụ
- **Accent Orange**: `#f59e0b` - Màu nhấn
- **Neutral Gray**: `#6b7280` - Màu trung tính

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🚀 Cách sử dụng

### 1. Chạy trực tiếp
```bash
# Mở file index.html trong trình duyệt
open index.html
```

### 2. Sử dụng Live Server (VS Code)
```bash
# Cài đặt extension Live Server
# Click chuột phải vào index.html
# Chọn "Open with Live Server"
```

### 3. Sử dụng Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

## 📋 Các section chính

### 1. Header
- Logo và navigation menu
- Fixed position với backdrop blur
- Mobile hamburger menu

### 2. Hero Section
- Tiêu đề chính và subtitle
- Call-to-action buttons
- Hình ảnh minh họa

### 3. Giới thiệu
- Thông tin về đơn vị
- Video placeholder
- Layout 2 cột responsive

### 4. Nền tảng số
- Grid layout với cards
- Hover effects
- Platform badges
- External links

### 5. Hướng dẫn sử dụng
- Video tutorial placeholder
- Step-by-step instructions
- Numbered steps

### 6. Download Section
- Prominent CTA buttons
- App store links
- Gradient background

### 7. Liên hệ
- Contact information
- Contact form với validation
- Social media links

### 8. Footer
- Company information
- Quick links
- Social media icons

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `styles.css`:
```css
:root {
    --primary-color: #1e40af;
    --secondary-color: #3b82f6;
    --accent-color: #f59e0b;
}
```

### Thêm nền tảng mới
Thêm card mới trong section "Nền tảng số":
```html
<div class="platform-card">
    <div class="platform-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Tên nền tảng</h3>
    <p>Mô tả nền tảng</p>
    <div class="platform-links">
        <a href="#" class="platform-link">
            <i class="fas fa-external-link-alt"></i>
            Link
        </a>
    </div>
    <div class="platform-badge">Loại</div>
</div>
```

### Cập nhật thông tin liên hệ
Chỉnh sửa trong section "Liên hệ":
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>your-email@domain.com</p>
    </div>
</div>
```

## 🎯 Tối ưu hóa

### Performance
- Lazy loading cho images
- Minified CSS/JS (production)
- Optimized images
- Debounced scroll events

### SEO
- Semantic HTML structure
- Meta tags
- Alt text cho images
- Structured data (có thể thêm)

### Accessibility
- ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader friendly

## 🐛 Troubleshooting

### Menu mobile không hoạt động
- Kiểm tra JavaScript console
- Đảm bảo file `script.js` được load
- Kiểm tra CSS cho mobile menu

### Form không submit
- Kiểm tra validation
- Đảm bảo tất cả fields required được điền
- Kiểm tra email format

### Images không hiển thị
- Kiểm tra đường dẫn images
- Đảm bảo images tồn tại
- Kiểm tra CORS policy

## 📞 Hỗ trợ

Nếu có vấn đề hoặc cần hỗ trợ, vui lòng:
1. Kiểm tra console browser
2. Đảm bảo tất cả files được load
3. Kiểm tra network tab

## 📄 License

Dự án này được tạo cho Báo & Đài PT-TH Cần Thơ.

---

**Lưu ý**: Đây là phiên bản demo. Cần cập nhật các link thực tế và thông tin liên hệ trước khi deploy production. 