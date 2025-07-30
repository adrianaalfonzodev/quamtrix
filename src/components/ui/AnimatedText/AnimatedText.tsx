import styles from './AnimatedText.module.css'
import { useEffect, useState } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-jakarta',
  display: 'swap'
})

export default function AnimatedText({
  text,
  speed = 60,
  fontSize,
  color = '#000'
}: {
  text: string
  speed?: number
  fontSize?: string
  color?: string
}) {
  const [visibleText, setVisibleText] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setVisibleText(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <p
      className={`${jakarta.className} ${styles.animated}`}
      style={{ fontSize, color }}
    >
      {visibleText}
      <span
        className={styles.cursor}
        style={{ backgroundColor: color }}
      />
    </p>
  )
}
