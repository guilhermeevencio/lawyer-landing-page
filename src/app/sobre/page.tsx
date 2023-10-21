import React from 'react'
import PageHeader from '../components/PageHeader'
import NeedHelpSection from '../components/NeedHelpSection'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className='about_container'>
      <PageHeader text="Alcance Mais Conosco" />
      <section className='flex flex-col lg:flex-row lg:justify-evenly items-center gap-8 px-8 py-16 bg-offwhite'>
        <div className='bg-blue-300 w-64 h-64'>

        </div>
        <p className='lg:w-3/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odit quo iste voluptate alias impedit, cupiditate consequuntur ullam corporis dolorum! Cupiditate sint iure iusto facere dolore ducimus vel obcaecati nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quisquam aspernatur voluptas, dicta aliquid, voluptatibus eum inventore, quam perspiciatis esse veniam. Itaque amet laboriosam accusamus ipsum repellat, quo architecto impedit.</p>

      </section>
      <section className=' m-4 md:m-8'>
        <div className=' p-8 md:m-16 md:p-16 bg-black text-offwhite flex flex-col gap-8 justify-center items-center'>
          <h2 className='w-full text-center text-2xl'>Nossos Valores</h2>
          <h1 className='h1_style_playfair'>O que esperar do nosso atendimento:</h1>
          <div className='flex gap-8 md:gap-16 flex-col lg:flex-row mt-8'>
            <div className='flex flex-col p-2 gap-4 border-t'>
              <h1 className='font-playfair_display font-bold text-2xl'>Valor 1</h1>
              <p className='text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nam obcaecati iusto maxime natus ratione atque quas ab nulla. Voluptate!</p>
            </div>
            <div className='flex flex-col p-2 gap-4 border-t'>
              <h1 className='font-playfair_display font-bold text-2xl'>Valor 2</h1>
              <p className='text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nam obcaecati iusto maxime natus ratione atque quas ab nulla. Voluptate!</p>
            </div>
            <div className='flex flex-col p-2 gap-4 border-t'>
              <h1 className='font-playfair_display font-bold text-2xl'>Valor 3</h1>
              <p className='text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nam obcaecati iusto maxime natus ratione atque quas ab nulla. Voluptate!</p>
            </div>

          </div>
        </div>
      </section>
      <NeedHelpSection />
    </div>
  )
}
