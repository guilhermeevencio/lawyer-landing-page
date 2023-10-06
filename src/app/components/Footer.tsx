"use client"
import React from 'react'
import logo from '../../../public/assets/images/logo-nome.png'
import Image from 'next/image'
import { WhatsappLogo, Phone, Envelope, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='footer_container'>
      <div className='border-r border-zinc-400 w-1/2 h-2/3 flex flex-col justify-center gap-4 items-center'>
        <Image src={logo} alt='logo Rubjefson Dantas' width='540' />
        <div className='flex gap-2 mt-4'>
          <Link href='tel:5586988568195'>
            <Phone size={32} /></Link>
          <Link href='https://wa.me/5586988568195' target="_blank">
            <WhatsappLogo size={32} />
          </Link>
          <Link href='https://www.instagram.com/advrubijefsondantas/' target="_blank"><InstagramLogo size={32} /></Link>
          <Link href='mailto:dantasradv@gmail.com'><Envelope size={32} /></Link>
        </div>
      </div>
      <div className='flex flex-col w-1/2 items-center gap-4 text-xl'>
        <h2 className='font-playfair_display font-bold text-3xl mb-4'>Áreas de Atuação</h2>
        <Link href='/direito-previdenciario'>Direito Previdenciário</Link>
        <Link href='/direito-civil'>Direito Civil</Link>
        <Link href='/direito-trabalhista'>Direito Trabalhista</Link>
        <Link href='/direito-do-consumidor'>Direito do Consumidor</Link>
      </div>
    </div>
  )
}
