"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/assets/images/rd_logo_pt2.png'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`bg-offwhite fixed z-50 top-0 shadow-md w-full  py-4 px-4 md:px-16`}>
      <div className='flex flex-col lg:flex-row h-full justify-between'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              width={144}
              height={144}
              onClick={() => toggleNavbar()}
            />
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className=" focus:outline-none"
            >
              <svg
                className={`w-8 h-8 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className={`flex flex-col h-screen justify-start mt-16 lg:mt-0 gap-8 lg:gap-4 items-center lg:h-20 lg:w-2/5 lg:flex lg:flex-row lg:justify-between lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link href='/sobre' onClick={() => toggleNavbar()}>Sobre</Link>
          <Link href='/blog' onClick={() => toggleNavbar()}>Blog</Link>
          <Link href='https://wa.me/5586988568195' className='btn_black_text' onClick={() => toggleNavbar()}>
            Entre em Contato
          </Link>
        </div>
      </div>
      {/* <div className={`lg:flex flex-grow items-center ${isOpen ? 'block' : 'hidden'}`}>
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
        </div> */}
      {/* </div> */}
    </nav>
  )
}
