import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Шалун 2 - Бесплатная рация для водителей",
  description: "Push-to-talk рация для дальнобойщиков и логистов. Работает везде, где есть интернет. Бесплатно без ограничений.",
  keywords: "рация, walkie-talkie, связь, дальнобойщик, логистика, бесплатная рация, Android",
  authors: [{ name: "Шалун 2" }],
  creator: "Шалун 2",
  publisher: "Шалун 2",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shalun2.app"),
  alternates: {
    canonical: "https://shalun2.app",
  },
  openGraph: {
    title: "Шалун 2 - Бесплатная рация для водителей",
    description: "Push-to-talk рация для дальнобойщиков и логистов. Работает везде, где есть интернет.",
    url: "https://shalun2.app",
    siteName: "Шалун 2",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Шалун 2 - Бесплатная рация",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Шалун 2 - Бесплатная рация для водителей",
    description: "Push-to-talk рация для дальнобойщиков и логистов. Работает везде, где есть интернет.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {children}
        </div>
      </body>
    </html>
  );
}