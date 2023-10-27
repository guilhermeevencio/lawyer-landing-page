import Image from 'next/image'
import headerbackground from '../../public/assets/images/home-header-background.jpg'
import Link from 'next/link'
import { specalities } from '@/database/specialities'
import SpecialityCard from './components/SpecialityCard'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
// import '../../public/home-header-background.jpg'

export default function Home() {
  return (
    <main className='home_container'>
      <header className='home_header_container'>
        <div className='w-full lg:w-2/5 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-8'>
          <h2 className='h2_style_montserrat'>Rubijefson Dantas</h2>
          <h1 className='h1_style_playfair'>Advocacia e Assessoria Jurídica atuante em todo o <em>Brasil</em></h1>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Non sodales neque sodales ut etiam sit. Leo a diam sollicitudin tempor. Pretium viverra suspendisse potenti nullam ac.
            Facilisis volutpat est velit egestas dui id. Vitae semper quis lectus nulla at volutpat diam.</p>

          <Link href='https://wa.me/5586988568195' className='btn_white_text'>
            Entre em Contato
          </Link>
        </div>


      </header>
      <section className='home_about_section'>
        <h1 className='h1_style_playfair'>Mais que um Escritório de Advocacia</h1>
        <div className='md:w-2/3 flex flex-col gap-8 md:gap-12'>
          <p className='home_about_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit adipisci quaerat quis, dignissimos excepturi <strong>vitae rem quod nihil</strong> at.</p>
          <p className='home_about_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit adipisci quaerat quis, dignissimos excepturi <strong>vitae rem quod nihil</strong> at.</p>
          <p className='home_about_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit adipisci quaerat quis, dignissimos excepturi <strong>vitae rem quod nihil</strong> at.</p>
        </div>
        <Link className='btn_white_text mt-12' href='/sobre'>Sobre Mim</Link>
      </section>
      <section className='home_specialities_section'>
        <div className='flex items-end justify-between'>
          <div className='gap-8 flex flex-col md:justify-between w-full'>
            <h3 className='text-center md:text-left text-xl text-slate-500'>Áreas de Atuação</h3>
            <h1 className='h1_style_playfair text-black text-center'>Saiba como podemos te ajudar</h1>
          </div>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap gap-8 justify-center my-12 md:my-24'>
          {specalities.map((speciality) => {
            return (
              <SpecialityCard {...speciality}  key={speciality.id} />
            )
          })}
        </div>
      </section>
      <section className='home_contact_section'>
          <ContactForm />
      </section>
    </main>
  )
}
