import BottomBar from '@/components/BottomBar'
import './globals.css'
import type { Metadata } from 'next'
import Cursor from '@/components/Cursor'
import TransitionWrapper from '@/components/TransitionWrapper'
import NavBar from '@/components/Navbar'
import localFont from 'next/font/local'

const bauziet = localFont({
  src: [
    { path: '../../public/fonts/BauzietNormLight.ttf', weight: '300' },
    { path: '../../public/fonts/BauzietNormRegular.ttf', weight: '400' },
    { path: '../../public/fonts/BauzietNormMedium.ttf', weight: '500' },
    { path: '../../public/fonts/BauzietNormSemiBold.ttf', weight: '600' },
    { path: '../../public/fonts/BauzietNormBold.ttf', weight: '700' },
    { path: '../../public/fonts/BauzietNormExtraBold.ttf', weight: '800' },
    {
      path: '../../public/fonts/BauzietNormlightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BauzietNormRegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BauzietNormMediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BauzietNormSemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BauzietNormBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/BauzietNormExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
  ],
  variable: '--font-bauziet',
})

export const metadata: Metadata = {
  title: 'Thy Upsiide Down',
  description: 'Creative Design And Dev Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${bauziet.variable} font-bauziet`}>
        <TransitionWrapper>
          <NavBar />
          {children}
          <BottomBar />
          <Cursor />
        </TransitionWrapper>
      </body>
    </html>
  )
}
