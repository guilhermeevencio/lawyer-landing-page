"use client"
import React from 'react'
import logo from '../../../public/assets/images/logo-nome.png'
import Image from 'next/image'
import { WhatsappLogo, Phone, Envelope, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='px-4 py-12 flex flex-col items-center md:justify-between md:flex-row md:gap-0 bg-offwhite'>
      <div className='flex flex-col items-center gap-4 md:w-1/2 md:p-8 md:border-r md:border-zinc-400'>
        <Image src={logo} alt='logo Rubjefson Dantas' width='540' />
        <div className='flex justify-center items-center gap-4'>
          <Link href='tel:5586988568195'>
            <Phone size={32} /></Link>
          <Link href='https://wa.me/5586988568195' target="_blank">
            <WhatsappLogo size={32} />
          </Link>
          <Link href='https://www.instagram.com/advrubijefsondantas/' target="_blank"><InstagramLogo size={32} /></Link>
          <Link href='mailto:dantasradv@gmail.com' target="_blank"><Envelope size={32} /></Link>
        </div>
      </div>
      <div className='flex flex-col pb-12 md:pb-0 md:w-1/2 items-start md:items-center justify-center gap-4 text-xl min-h-[400px] md:min-h-0'>
        <h2 className='font-playfair_display font-bold text-3xl mb-4'>Áreas de Atuação</h2>
        <Link href='/direito-previdenciario'>Direito Previdenciário</Link>
        <Link href='/direito-civil'>Direito Civil</Link>
        <Link href='/direito-trabalhista'>Direito Trabalhista</Link>
        <Link href='/direito-do-consumidor'>Direito do Consumidor</Link>
      </div>
    </div>
  )
}


//border-r border-zinc-400 w-1/2 h-2/3 flex flex-col justify-center gap-4 items-center