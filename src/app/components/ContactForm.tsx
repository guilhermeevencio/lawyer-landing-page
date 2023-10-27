"use client"
import { Envelope, InstagramLogo, Phone, WhatsappLogo } from '@phosphor-icons/react'
import React from 'react'

export default function ContactForm() {
  return (
    <div className='form_container'>
      <h2 className='font-montserrat text-2xl text-offwhite font-medium text-center'>Conecte-se conosco</h2>
      <h1 className='h1_style_playfair text-center px-4'>Grandes relacionamentos se iniciam com uma simples conversa!</h1>
      <div className='flex flex-col lg:flex-row lg:w-4/6 justify-evenly items-center gap-8'>
        <div className='social_media_list'>
          <ul>
            <li><Envelope size={24} />{'Email: dantasradv@gmail.com'}</li>
            <li><Phone size={24} />{'Telefone: (86) 98856-8195'}</li>
            <li><WhatsappLogo size={24} />{'Whatsapp: (86) 98856-8195'}</li>
            <li><InstagramLogo size={24} /> Instagram: @advrubijefsondantas</li>
          </ul>
        </div>
        {/* <form className='form_style'>
          <div className='flex flex-col'>
            <label htmlFor='name_input'>Nome</label>
            <input type='text' id='name_input'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='phone_input'>Telefone</label>
            <input type='text' id='phone_input'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email_input'>Email</label>
            <input type='text' id='email_input'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='subject_input'>Assunto</label>
            <textarea id='subject_input'/>
          </div>
        </form> */}
      </div>
    </div>
  )
}
