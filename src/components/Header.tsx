// components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Nosotros' },
  { href: '/services', label: 'Servicios' },
  { href: '/portfolio', label: 'Portafolio' }
]

export default function Header() {
  return (
    <header className="w-full z-20 relative">
      <div className="border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between min-h-28">
            <Link href="/">
              <Image
                src="/images/logo_contrast.png"
                alt="Logo Quamtrix"
                width={226}
                height={Math.round((768 / 1150) * 226)}
                priority
              />
            </Link>
            <nav>
              <ul className="flex gap-10">
                {navLinks.map(({ href, label }) => (
                  <li
                    key={href}
                    className="font-semibold text-white uppercase cursor-pointer hover:text-[#e89b4c]"
                  >
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link href="/">
              <div className="bg-secondary text-white px-6 h-10 flex items-center justify-center uppercase font-semibold">
                <span>Contáctanos</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
