import BottomBar from '@/components/BottomBar'
import './globals.css'
import type { Metadata } from 'next'
import Cursor from '@/components/Cursor'
import TransitionWrapper from '@/components/TransitionWrapper'
import NavBar from '@/components/Navbar'
import localFont from 'next/font/local'

const bauziet = localFont({
  src: [
    { path: './fonts/BauzietNormlight.ttf', weight: '300' },
    { path: './fonts/BauzietNormRegular.ttf', weight: '400' },
    { path: './fonts/BauzietNormMedium.ttf', weight: '500' },
    { path: './fonts/BauzietNormSemiBold.ttf', weight: '600' },
    { path: './fonts/BauzietNormBold.ttf', weight: '700' },
    { path: './fonts/BauzietNormExtraBold.ttf', weight: '800' },
    {
      path: './fonts/BauzietNormlightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/BauzietNormRegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/BauzietNormMediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/BauzietNormSemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/BauzietNormBoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/BauzietNormExtraBoldItalic.ttf',
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
