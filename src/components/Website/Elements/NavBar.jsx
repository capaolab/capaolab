import React from 'react'
import IconsLink from '@/components/Website/Elements/IconsLink';
import ImageLink from '@/components/Website/Elements/ImageLink';

import ButtonMenu from '@/components/Website/Elements/ButtonMenu';

import { UI_CONFIGS } from '@/settings/uiConfigs';

function Navbar() {
  return (
    <section className="w-full h-12 flex justify-center items-center">
      <div className='w-full py-2 flex justify-start'>
        <ImageLink
          src={UI_CONFIGS.IMAGE.logo.src}
          url={"/"}
          alt={"capao lab Logo"}
          width={UI_CONFIGS.IMAGE.logo.width}
          height={UI_CONFIGS.IMAGE.logo.height}
        />
      </div>
      <ButtonMenu />
    </section>
  )
}

export default Navbar