import BottomBar from '@/components/BottomBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Cursor from '@/components/Cursor'
import TransitionWrapper from '@/components/TransitionWrapper'
import NavBar from '@/components/Navbar'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const bauziet = localFont({
  src: [
    { path: '../fonts/Bauziet Norm light.ttf', weight: '300' },
    { path: '../fonts/Bauziet Norm Regular.ttf', weight: '400' },
    { path: '../fonts/Bauziet Norm Medium.ttf', weight: '500' },
    { path: '../fonts/Bauziet Norm SemiBold.ttf', weight: '600' },
    { path: '../fonts/Bauziet Norm Bold.ttf', weight: '700' },
    { path: '../fonts/Bauziet Norm ExtraBold.ttf', weight: '800' },
    {
      path: '../fonts/Bauziet Norm light Italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/Bauziet Norm Regular Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Bauziet Norm Medium Italic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Bauziet Norm SemiBold Italic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/Bauziet Norm Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/Bauziet Norm ExtraBold Italic.ttf',
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
