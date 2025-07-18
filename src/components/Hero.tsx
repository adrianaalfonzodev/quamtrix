'use client'
import '@/i18n'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import AnimatedText from './ui/AnimatedText/AnimatedText'

export default function Hero() {
  const { t } = useTranslation()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="h-[900px]">
      <div className="absolute left-0 top-0 bottom-0 flex gap-3 z-10">
        <Image
          src="/images/shape.png"
          alt="Ilustración Hero"
          width={1150}
          height={768}
          priority
          className="opacity-30"
        />
      </div>
      <div className="container relative mx-auto h-full z-20">
        <div className="absolute right-0 top-0 flex gap-3 bg-white">
          <Image
            src="/images/slide-2.png"
            alt="Ilustración Hero"
            width={230}
            height={745}
            priority
            className="mix-blend-luminosity opacity-70"
          />
          <Image
            src="/images/slider-1.png"
            alt="Ilustración Hero"
            width={582}
            height={745}
            priority
            className="mix-blend-luminosity opacity-70"
          />
        </div>
        <div className="w-full px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12 container mx-auto h-full">
          <div className="pl-16 w-[600px] min-h-[350px] z-20">
            <AnimatedText
              text={t('hero_title')}
              fontSize="120px"
            ></AnimatedText>
          </div>
        </div>
      </div>
    </section>
  )
}
