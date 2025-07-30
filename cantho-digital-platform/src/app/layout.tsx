import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
