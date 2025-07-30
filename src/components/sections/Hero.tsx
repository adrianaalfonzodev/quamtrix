'use client'
// import '@/i18n'
import Image from 'next/image'
// import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import AnimatedText from '../ui/AnimatedText/AnimatedText'

export default function Hero() {
  // const { t } = useTranslation()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section
      className="h-screen mt-[-113px] relative bg-img"
      style={{
        backgroundImage: 'url(/images/bg-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex gap-3 z-10 absolute top-0 w-full">
        <Image
          src="/images/shape.png"
          alt="Ilustración Hero"
          width={1150}
          height={768}
          priority
          className="opacity-30"
        />
      </div>
      {/* main */}
      <div className="container mx-auto h-full flex items-center z-10 relative">
        <div className="w-full z-20 flex flex-col items-center justify-center pt-4 px-3 md:px-0">
          <h2 className='uppercase text-secondary tracking-widest font-bold'>&lt;Bienvenido a Quamtrix /&gt;</h2>
          <AnimatedText
            // text={t('hero_title')}
            text="Tu visión, nuestro código"
            fontSize="120px"
            color="#fff"
          ></AnimatedText>
          <p className='text-white text-center mt-4 md:text-lg'>Creamos soluciones digitales para ti, mientras tú te enfocas en lo que realmente importa: tu empresa.</p>
        </div>
      </div>
    </section>
  )
}
