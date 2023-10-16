import React from 'react'
import PageHeader from '../components/PageHeader'
import NeedHelpSection from '../components/NeedHelpSection'

export default function About() {
  return (
    <div className='about_container'>
      <PageHeader text="Alcance Mais Conosco" />
      <section className='flex flex-col lg:flex-row lg:justify-evenly items-center gap-8 px-8 py-16 bg-offwhite'>
        <div className='bg-blue-300 w-64 h-64'>

        </div>
        <p className='lg:w-3/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat odit quo iste voluptate alias impedit, cupiditate consequuntur ullam corporis dolorum! Cupiditate sint iure iusto facere dolore ducimus vel obcaecati nihil. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quisquam aspernatur voluptas, dicta aliquid, voluptatibus eum inventore, quam perspiciatis esse veniam. Itaque amet laboriosam accusamus ipsum repellat, quo architecto impedit.</p>

      </section>
      <NeedHelpSection />
    </div>
  )
}
