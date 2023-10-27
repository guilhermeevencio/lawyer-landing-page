"use client"
import PageHeader from '@/app/components/PageHeader';
import { specalities } from '@/database/specialities';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Speciality() {
  const path = usePathname();
  const speciality = specalities.find((speciality) => speciality.link === path)
  if (speciality) {
    return (
      <div className='w-full text-offwhite mt-28'>
        <PageHeader text={speciality.name} />
        <section className='flex flex-col lg:flex-row lg:justify-evenly items-center gap-8 px-8 py-16 bg-offwhite text-black'>
          <div className='bg-blue-300 w-64 h-64'>

          </div>
          <p className='lg:w-4/6 leading-7 text-lg'>{speciality.abstract}</p>

        </section>
        <section className='py-8 md:py-16 md:mx-16 md:flex md:flex-col md:justify-center md:items-center'>
          <h1 className='h1_style_playfair'>Como podemos ajudar?</h1>
          <div className='p-8 flex items-center justify-center flex-col gap-8 md:flex-row md:pt-16 md:w-5/6'>
            {speciality.waysToHelp.map((w) => {
              return (
                <div className='border border-offwhite p-4 flex flex-col items-center justify-center' key={w.title}>
                <h3 className='pb-4 font-playfair_display text-xl font-bold'>{w.title}</h3>
                <p>{w.helpDescription}</p>
              </div>
              )
            })}
          </div>
        </section>
        <section className='text-black bg-white flex flex-col md:flex-row h-48 gap-6 justify-center md:justify-between items-center py-8 lg:py-0 px-8 md:px-16'>
          <h2 className='w-full font-montserrat text-lg md:text-2xl text-black font-medium text-center md:text-left'>Precisa de ajuda? Vamos conversar!</h2>
          <Link href='https://wa.me/5586988568195' className='btn_black_text'>
            Entre em Contato
          </Link>
        </section>
      </div>
    )
  }
}
