'use client'

import React from 'react';
import { useSideBar } from '@/contexts/sideBar';

function ButtonMenu() {
    const { isOpen, setIsOpen } = useSideBar();
    return (
        <button
            className={`w-20 flex flex-col h-12 z-30 justify-center items-center group ${isOpen ? "z-10" : "z-20"}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`hamburger ${isOpen
                    ? "rotate-45 translate-y-3 group-hover:opacity-100 bg-black"
                    : "group-hover:opacity-100"
                    }`}
            />
            <div
                className={`hamburger ${isOpen
                    ? "opacity-0 bg-black"
                    : "group-hover:opacity-100"
                    }`}
            />
            <div
                className={`hamburger ${isOpen
                    ? "-rotate-45 -translate-y-3 group-hover:opacity-100 bg-black"
                    : "group-hover:opacity-100"
                    }`}
            />
        </button>
    );
}

export default ButtonMenu;