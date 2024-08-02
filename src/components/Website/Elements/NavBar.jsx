'use client'

import React from 'react'
import ImageLink from '@/components/Website/Elements/ImageLink';
import ButtonMenu from '@/components/Website/Elements/ButtonMenu';
import NavLink from './NavLink';

import { useSideBar } from '@/contexts/sideBar';
import { UI_CONFIGS } from '@/settings/uiConfigs';

function Navbar() {
  const { isOpen } = useSideBar();

  return (
    <nav className={`w-full h-12 flex justify-center items-center ${isOpen ? "z-0" : "z-20"}`}>
      <div className='w-full lg:w-1/2 py-2 flex justify-start'>
        <ImageLink
          src={UI_CONFIGS.IMAGE.logo.src}
          url={"/"}
          alt={"capao lab Logo"}
          width={UI_CONFIGS.IMAGE.logo.width}
          height={UI_CONFIGS.IMAGE.logo.height}
        />
      </div>
      <ul className='w-full mr-60 hidden xl:flex space-x-12 justify-end'>
        {
          UI_CONFIGS.NAVLINKS.map((link, index) => (
            <NavLink
              key={index}
              name={link.name}
              url={link.url}
            />
          ))
        }
      </ul>
      <ButtonMenu />
    </nav>
  )
}

export default Navbar