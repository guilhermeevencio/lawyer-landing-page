import Link from 'next/link'
import React from 'react'

export default function NeedHelpSection() {
  return (
    <section className='text-offwhite bg-black flex flex-col md:flex-row h-48 justify-between items-center py-8 lg:py-0 px-8 md:px-16'>
      <h2 className='h2_style_montserrat flex-1'>Precisa de ajuda? Vamos conversar!</h2>
      <Link href='https://wa.me/5586988568195' className='btn_white_text'>
            Entre em Contato
          </Link>
    </section>
  )
}
