// components/Header.tsx
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Nosotros' },
  { href: '/services', label: 'Servicios' },
  { href: '/portfolio', label: 'Portafolio' },
  { href: '/contact', label: 'Contacto' }
]

export default function Header() {
  return (
    <header className="absolute bg-white w-full">
      <div className="mx-auto px-16 py-8 flex gap-3 items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold text-black"
        >
          <Image
            src="/images/logo.png"
            alt="Ilustración Hero"
            width={140}
            height={90}
            priority
          />
        </Link>
        <nav className="pl-36">
          <ul className="flex gap-10 font-semibold">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
