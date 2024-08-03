'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Navbar from '@/components/Website/Elements/NavBar';
import SideMenu from '@/components/Website/Elements/SideMenu';
import Partners from '../Elements/Partners';
import ShowServices from '../Elements/icosnService';

import { useSideBar } from '@/contexts/sideBar';
import { UI_CONFIGS } from '@/settings/uiConfigs';


function Principal() {
  const { isOpen } = useSideBar();
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 100));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
    setPosition({ top: randomTop, left: randomLeft });
  }, []);

  return (
    <div className='relative text-black bg-terracota-75'>
      <div className='section-format flex flex-col items-start justify-start'>
        <SideMenu />
        <Navbar />
        <article className={`w-full h-full mt-0 sm:mt-32 flex items-end sm:items-start justify-start ${isOpen ? "z-0" : "z-20"}`}>
          <div className='w-full sm:w-1/2 h-full mr-10 flex flex-col items-start justify-center sm:justify-start'>
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
          <div className='w-1/2 h-full p-6 hidden xl:grid grid-cols-3 grid-flow-row gap-x-4 gap-y-16
            justify-start items-start'
          >
            {
              UI_CONFIGS.SERVICES.map((item, index) => (
                <ShowServices
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  width={item.width}
                  height={item.height}
                  col={item.col}
                />
              ))
            }
          </div>
        </article>
        <article className='w-full py-6 flex flex-col justify-end'>
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