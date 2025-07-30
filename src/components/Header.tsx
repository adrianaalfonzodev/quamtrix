'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Nosotros' },
  { href: '/services', label: 'Servicios' },
  { href: '/portfolio', label: 'Portafolio' }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full z-50 relative">
      <div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between min-h-28">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo_contrast.png"
                alt="Logo Quamtrix"
                width={226}
                height={Math.round((768 / 1150) * 226)}
                priority
              />
            </Link>

            {/* Botón hamburguesa (visible solo en mobile) */}
            <button
              className="md:hidden text-white z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex gap-10">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-semibold text-white uppercase hover:text-[#e89b4c]"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Botón contacto Desktop */}
            <Link href="/" className="hidden md:flex">
              <div className="bg-secondary text-white px-6 h-10 flex items-center justify-center uppercase font-semibold">
                <span>Contáctanos</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black p-6 transition-transform duration-300 ease-in-out z-40 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 pt-20">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-white uppercase font-semibold hover:text-[#e89b4c]"
            >
              {label}
            </Link>
          ))}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <div className="bg-secondary text-white px-4 py-2 uppercase font-semibold mt-4 w-fit">
              Contáctanos
            </div>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}
