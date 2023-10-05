"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joeteck Prototype',
  description: 'This is my tech journey prototype, let come up with solutions to the problem of the world.',
  icons: {
    icon: [
      '/favicon.icon?v=4',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      document.documentElement.classList.add('dark');
    }
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
