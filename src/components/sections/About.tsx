import Image from 'next/image'
import { Check } from 'lucide-react'
import Link from 'next/link'

const features = [
  'Atención personalizada en cada proyecto',
  'Desarrollo web y móvil con enfoque moderno',
  'Soluciones adaptadas a las necesidades de tu negocio'
]

export default function About() {
  return (
    <section className="my-12 md:my-32">
      <div className="container mx-auto px-4">
        <div className="columns-1 gap-4 md:columns-2">
          <div className="flex justify-center mb-8  relative">
            <Image
              src="/images/pattern-5.png"
              alt="Sobre Nosotros"
              width={600}
              height={400}
              className="absolute right-0 mr-10"
            />
            <Image
              src="/images/about-us.jpg"
              alt="Sobre Nosotros"
              width={600}
              height={400}
              className="rounded-lg shadow-lg md:mr-10 mt-4 relative z-10"
            />
            <div className='absolute z-20 left-0 bottom-0 w-52 h-auto'>
                
            </div>
          </div>
          <div className="">
            <p className="text-gray-500 mb-3 text-lg">
              <span className="text-secondary">{'// '}</span> Conócenos
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ofrecemos soluciones digitales a medida
            </h2>
            <p className="md:text-lg text-gray-500">
              Con más de 5 años de experiencia, creamos sitios web y
              aplicaciones modernas que impulsan negocios y mejoran su presencia
              online. Combinamos diseño, funcionalidad y tecnología para
              construir experiencias digitales efectivas.
            </p>
            <ul className="mt-8 md:text-lg">
              {features.map((text, index) => (
                <li
                  className="flex items-center gap-2 mb-2"
                  key={index}
                >
                  <div className="bg-secondary rounded-full p-1 text-white mr-2">
                    <Check size={15} />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="#contact"
                className="bg-secondary text-white px-6 py-3 font-semibold hover:bg-secondary-dark transition-colors"
              >
                Empieza aquí
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
