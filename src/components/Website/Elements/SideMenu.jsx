'use client'
import React from 'react';

import ImageLink from '@/components/Website/Elements/ImageLink';
import IconsLink from '@/components/Website/Elements/IconsLink';

import { useSideBar } from '@/contexts/sideBar';
import { UI_CONFIGS } from '@/settings/uiConfigs';

function SideMenu() {
    const { isOpen } = useSideBar();

    return (
        <article className={`
            w-full h-screen absolute top-0 left-0 flex justify-end items-start
            bg-black/30 backdrop-blur-lg z-10 ease-in-out duration-500
            ${isOpen ? "opacity-100" : "opacity-0"}
        `}
        >
            <div className="
                w-full sm:w-auto h-full relative flex flex-col items-start justify-start
                px-4 sm:px-16 py-4 sm:py-8 bg-white
            ">
                <ImageLink
                    src={UI_CONFIGS.IMAGE.logoSide.src}
                    url={"/"}
                    alt={"capao lab Logo"}
                    width={UI_CONFIGS.IMAGE.logoSide.width}
                    height={UI_CONFIGS.IMAGE.logoSide.height}
                    css={'mt-1 sm:mt-2'}
                />
                <div className='h-full mr-16 mt-12'>
                    <h2>Sidemenu</h2>
                </div>
                <footer className='self-end mb-6 sm:mb-0'>
                    <nav className='py-2'>
                        <ul className='w-full flex space-x-2 lowercase text-sm'>
                            <li>
                                <IconsLink name="arcticons:instagram" url={"/"} />
                            </li>
                            <li>
                                <IconsLink name="arcticons:linkedin" url={"/"} />
                            </li>
                            <li>
                                <IconsLink name="arcticons:facebook" url={"/"} />
                            </li>
                            <li>
                                <IconsLink name="arcticons:huawei-email" url={"/"} />
                            </li>
                        </ul>
                    </nav>
                </footer>
            </div>
        </article>
    );
}

export default SideMenu;