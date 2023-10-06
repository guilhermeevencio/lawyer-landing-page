import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/images/rd_logo_pt2.png'

export default function Nav() {
  return (
    <nav className='nav_container'>
      <Link href='/'>
        <Image
          src={logo}
          alt='logo'
          width={144}
          height={144}
        />
      </Link>
      <div className='flex justify-between gap-24 items-center text-lg '>
        <div className='flex gap-12 font-semibold'>
          <Link href='/sobre'>Sobre</Link>
          <Link href='/atuacao'>Atuação</Link>
          <Link href='/blog'>Blog</Link>
        </div>
        <Link href='https://wa.me/5586988568195' className='btn_black_text'>
          Entre em Contato
        </Link>
      </div>
    </nav>
  )
}
