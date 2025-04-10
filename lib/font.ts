import { Inter, Manrope, Silkscreen } from 'next/font/google'

const sansFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const interFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const silkscreenFont = Silkscreen({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-silkscreen',
  display: 'swap',
})

export { sansFont, interFont, silkscreenFont }
