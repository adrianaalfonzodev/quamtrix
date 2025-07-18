// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Quamtrix. Todos los derechos reservados.</p>
          <p className="mt-2">
            Desarrollado con 💜 por <span className="font-semibold">Quamtrix</span>
          </p>
        </div>
      </footer>
    )
  }
  