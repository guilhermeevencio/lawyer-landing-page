import Image from 'next/image'
import headerbackground from '../../public/assets/images/home-header-background.jpg'
import Link from 'next/link'
import { specalities } from '@/database/specialities'
import SpecialityCard from './components/SpecialityCard'
// import '../../public/home-header-background.jpg'

export default function Home() {
  return (
    <main className="home_container">
      <header className='home_header_container'>
        <div className='px-16 w-2/4 flex flex-col gap-10 h-screen justify-center'>
        <h2 className='h2_style_montserrat'>Rubijefson Dantas</h2>
        <h1 className='h1_style_playfair'>Advocacia e Assessoria Jurídica atuante em todo o <em>Brasil</em></h1>
        <p className='home_header_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Non sodales neque sodales ut etiam sit. Leo a diam sollicitudin tempor. Pretium viverra suspendisse potenti nullam ac.
          Facilisis volutpat est velit egestas dui id. Vitae semper quis lectus nulla at volutpat diam.</p>

          <Link href='https://wa.me/5586988568195' className='btn_white_text mt-12'>
          Entre em Contato
        </Link>
        </div>


      </header>
      <section className='home_about_section'>
        <h1 className='h1_style_playfair '>Mais que um Escritório de Advocacia</h1>
        <div className='w-2/3 flex flex-col gap-12'>
          <p className='home_about_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit adipisci quaerat quis, dignissimos excepturi <strong>vitae rem quod nihil</strong> at.</p>
          <p className='home_about_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit adipisci quaerat quis, dignissimos excepturi <strong>vitae rem quod nihil</strong> at.</p>
          <p className='home_about_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit adipisci quaerat quis, dignissimos excepturi <strong>vitae rem quod nihil</strong> at.</p>
        </div>
        <Link className='btn_white_text mt-12' href='/about'>Sobre Mim</Link>
      </section>
      <section className='home_specialities_section'>
        <div className='flex items-end justify-between'>
          <div className='mt-24 flex flex-col justify-between w-full'>
            <h3 className='mb-12 text-xl text-slate-500'>Áreas de Atuação</h3>
            <h1 className='h1_style_playfair text-black text-center'>Saiba como podemos te ajudar</h1>
          </div>
        </div>
        <div className='flex flex-row flex-wrap gap-8 justify-center my-24'>
          {specalities.map((speciality) => {
            return (
              <SpecialityCard {...speciality}  key={speciality.id} />
            )
          })}
        </div>
      </section>
    </main>
  )
}
