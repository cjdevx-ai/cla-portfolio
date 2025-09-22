import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clarence Jay Fetalino - AI Engineer Portfolio',
  description: 'AI Engineer showcasing technical expertise, projects, research, and thought leadership in artificial intelligence.',
  keywords: ['AI Engineer', 'Machine Learning', 'Deep Learning', 'Portfolio', 'Data Science', 'Python', 'PyTorch', 'TensorFlow'],
  authors: [{ name: 'Clarence Jay Fetalino' }],
  creator: 'Clarence Jay Fetalino',
  openGraph: {
    title: 'Clarence Jay Fetalino - AI Engineer Portfolio',
    description: 'AI Engineer showcasing technical expertise, projects, research, and thought leadership in artificial intelligence.',
    url: 'https://your-portfolio-domain.com',
    siteName: 'AI Engineer Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clarence Jay Fetalino - AI Engineer Portfolio',
    description: 'AI Engineer showcasing technical expertise, projects, research, and thought leadership in artificial intelligence.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
