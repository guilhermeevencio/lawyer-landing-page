import React from 'react'
import { Speciality } from '@/database/specialities'
import Link from 'next/link'

export default function SpecialityCard({ name, description, link }: Speciality) {
  return (
    <div className='border bg-offwhite w-1/3 flex flex-col gap-4 px-12 py-8'>
      <h2 className='font-bold font-playfair_display text-2xl '>{name}</h2>
      <p className='text-md'>{description}</p>
      <Link href={link} className='text-slate-600'>Saiba Mais</Link>
    </div>
  )
}
