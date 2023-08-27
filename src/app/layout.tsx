import BottomBar from '@/components/BottomBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Cursor from '@/components/Cursor'
import TransitionWrapper from '@/components/TransitionWrapper'
import NavBar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const jetBrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
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
      <body className={`${inter.className} ${jetBrains_mono.variable}`}>
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
