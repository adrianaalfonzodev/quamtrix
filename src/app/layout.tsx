import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-jakarta',
  display: 'swap'
})

export const metadata = {
  title: 'Quamtrix | Desarrollo web y mobile',
  description: 'Servicios de desarrollo en Next.js, WordPress e Ionic.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${jakarta.className}`}>
        <main className="main-wrapper">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
