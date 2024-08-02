'use client'
import Link from 'next/link';

import Navbar from '@/components/Website/Elements/NavBar';
import SideMenu from '@/components/Website/Elements/SideMenu';
import Partners from '../Elements/Partners';

import { useSideBar } from '@/contexts/sideBar';
import { UI_CONFIGS } from '@/settings/uiConfigs';


function Principal() {
  const { isOpen } = useSideBar();

  return (
    <div className='relative text-black bg-terracota-75'>
      <div className='section-format flex flex-col items-start justify-start'>
        <SideMenu />
        <Navbar />
        <article className={`w-full h-full mt-32 flex items-start justify-start ${isOpen ? "z-0" : "z-20"}`}>
          <div className='w-1/2 h-full mr-10 flex flex-col items-start justify-start'>
            <h1 className='text-white'>
              Nossa&nbsp;
              <span className='text-4xl sm:text-7xl underline underline-offset-8 decoration-green-500 '>Natureza</span>
              &nbsp;é Tecnologica
            </h1>
            <h3 className='w-full ml-1 mt-4 sm:mt-8'>Capao Lab é uma Tech Startup sediado no Vale do Capão, leia nosso manifesto.</h3>
            <Link href='/hub/manifest' className='btnDefault mt-4 sm:mt-6'>Manifesto</Link>
            {/* <footer
              className='w-full h-[100px] mt-12 px-6 rounded-2xl text-white
              flex justify-start items-center bg-white/10 backdrop-blur-xl'
            >
              <span className='ml-12'>footer</span>
            </footer> */}
          </div>
          {/* <div className='w-1/2 h-full p-6 flex justify-start items-start
            bg-white/10 backdrop-blur-xl'
          >
            article 2
          </div> */}
        </article>
        <article className='w-full h-full py-6 flex flex-col justify-end'>
          <span className='mb-4 text-terracota-50 font-mono text-sm'>clientes:</span>
          <ul className='w-full flex space-x-6'>
            {
              UI_CONFIGS.PARTNERS.map((item, index) => (
                <Partners
                  key={index}
                  name={item.name}
                  image={item.image}
                  width={item.width}
                  height={item.height}
                />
              ))
            }
          </ul>
        </article>
      </div>
    </div>
  )
}

export default Principal