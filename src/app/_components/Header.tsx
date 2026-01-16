"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { LuShoppingBag, LuUserRound } from 'react-icons/lu'

const navs = ["home", "shop", "about us", "contact"]

export default function Header() {
  const [isSubCategory, setIsSubCategory] = useState(false)
  return (
    <header className='bg-white z-20 shadow-sm py-6 sticky top-0'>
      <div className="px-12 flex items-center">
        <nav className='flex-1'>
          <ul className='flex gap-6 relative'>
            {navs.map((nav, index) => (
              <li key={index} className="uppercase cursor-pointer">
                {nav == "shop" ?
                  <div className={`flex items-center gap-1 relative`} onMouseEnter={() => setIsSubCategory(true)}
                    onMouseLeave={() => setIsSubCategory(false)}>
                    {isSubCategory && <span className="absolute -top-14 left-0 w-full h-33"></span>}
                    {nav}
                    <IoIosArrowDown size={12} className='mt-0.5' />
                  </div>
                  : nav}
              </li>
            ))}
          </ul>
        </nav>
        <div className={`sub-categories ${isSubCategory ? "visible opacity-100" : "invisible opacity-0"} transition-all absolute w-full top-[calc(100%)] left-0 bg-white shadow-lg`}
          onMouseEnter={() => setIsSubCategory(true)}
          onMouseLeave={() => setIsSubCategory(false)}>
          <div className="container px-12 py-12 flex gap-5">
            <div className="category flex-1">
              <h6 className="ul-heading text-sm font-medium mb-2 text-[#313131] uppercase">Tops</h6>
              <ul>
                {["Premium Ostrich", "Mandarin Ostrich", "Drifit Ostrich", "Drifit Tee Ostrich", "Daily Fit Ostrich", "Shirts", "Johnny Collar", "Garment Dye Ostrich", "Full Sleeves Shirts", "Graphic Tees"].map((li, index) => (
                  <li key={index} className='font-light uppercase py-px text-[#151515]'>{li}</li>
                ))}
              </ul>
            </div>
            <div className="category flex-1">
              <h6 className="ul-heading text-sm font-medium mb-2 text-[#313131] uppercase">Bottoms</h6>
              <ul>
                {["Trousers", "Chinos", "Shorts", "Pants"]
                  .map((li, index) => (
                    <li key={index} className='font-light uppercase py-px text-[#151515]'>{li}</li>
                  ))}
              </ul>
            </div>
            <div className="category flex-1">
              <h6 className="ul-heading text-sm font-medium mb-2 text-[#313131] uppercase">Winter Collection</h6>
              <ul>
                {[].map((li, index) => (
                  <li key={index} className='font-light uppercase py-px text-[#151515]'>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Image width={90} height={85} src={"/images/ostrich-logo.png"} alt='Logo' className='brightness-0 max-w-full h-auto' />
        <div className="actions flex gap-4 flex-1 justify-end">
          <LuUserRound size={24} />
          <IoSearchOutline size={24} />
          <LuShoppingBag size={24} />
        </div>
      </div>
    </header >
  )
}
