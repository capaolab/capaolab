'use client'
import Link from 'next/link';

import Navbar from '@/components/Website/Elements/NavBar';
import SideMenu from '@/components/Website/Elements/SideMenu';

import { useSideBar } from '@/contexts/sideBar';


function Principal() {
  const { isOpen } = useSideBar();

  return (
    <div className={`
      section-format relative flex flex-col items-start justify-start 
      text-black bg-terracota-75 
    `}>
      <SideMenu />
      <Navbar />
      <article className={`
         sm:w-1/2 h-full flex flex-col items-start justify-center
         ${isOpen ? "z-0" : "z-20"}
      `}>
        <h1 className='text-white'>
          Nossa&nbsp;
          <span className='text-4xl sm:text-7xl underline underline-offset-8 decoration-green-500 '>Natureza</span>
          &nbsp;é Tecnologica
        </h1>
        <h3 className='mt-4 sm:mt-8'>Capao Lab é uma Tech Startup sediado no Vale do Capão, leia nosso manifesto.</h3>
        <Link href='/hub/manifest' className='btnDefault mt-4 sm:mt-6'>Manifesto</Link>
      </article>
    </div>
  )
}

export default Principal