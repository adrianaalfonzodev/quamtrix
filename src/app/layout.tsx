import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
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
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow w-full mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
