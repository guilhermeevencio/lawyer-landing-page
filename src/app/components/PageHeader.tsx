import React from 'react'

type HeaderProps = {
  text: string;
}

export default function PageHeader({ text }: HeaderProps) {
  return (
    <header className='about_header_container'>
      <h1 className='h1_style_playfair text-offwhite'>{ text }</h1>
    </header>
  )
}
