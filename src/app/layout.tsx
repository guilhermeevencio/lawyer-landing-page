import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import logo from '../../public/assets/images/rd_logo_pt2.png'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rubijefson Dantas',
  description: 'Rubijefson Dantas Advocacia e Assessoria Jurídica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='main_layout'>
        <Nav />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
