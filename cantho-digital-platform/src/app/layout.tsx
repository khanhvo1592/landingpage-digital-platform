import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chuyển đổi số cùng Báo & PT-TH Cần Thơ",
  description: "Khám phá các nền tảng số của Báo & Phát thanh - Truyền hình Cần Thơ. Tin tức, truyền hình trực tuyến, ứng dụng di động.",
  keywords: "Báo Cần Thơ, Phát thanh Truyền hình, Chuyển đổi số, Tin tức Cần Thơ",
  authors: [{ name: "Báo & PT-TH Cần Thơ" }],
  robots: "index, follow",
  openGraph: {
    title: "Chuyển đổi số cùng Báo & PT-TH Cần Thơ",
    description: "Khám phá các nền tảng số của Báo & Phát thanh - Truyền hình Cần Thơ",
    type: "website",
    locale: "vi_VN",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
