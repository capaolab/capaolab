import React from 'react'
import Link from "next/link";
import Image from "next/image"


function NavLink({ name, url }) {
  return (
    <li className=''>
      <Link href={url} className="flex justify-center items-center text-white">
        <Image
          src="/svg/_[_abre.svg"
          className=""
          alt=""
          width="6"
          height="6"
        />
        <span className='px-2 capitalize font-medium text-lg hover:text-folha-50 hover:underline'>
          {name}
        </span>
        <Image
          src="/svg/_[_fecha.svg"
          className=""
          alt=""
          width="6"
          height="6"
        />
      </Link>
    </li>
  )
}

export default NavLink