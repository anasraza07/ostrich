"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { LuShoppingBag, LuUserRound } from 'react-icons/lu'

const navs = [{
  item: "home",
  link: "/"
}, {
  item: "shop",
  link: "/collections"
}, {
  item: "about us",
  link: "#"
}, {
  item: "contact",
  link: "#"
}]

export default function Header() {
  const [isSubCategory, setIsSubCategory] = useState(false)
  return (
    <header className='bg-white z-20 shadow-sm py-6 sticky top-0'>
      <div className="px-12 flex items-center">
        <nav className='flex-1'>
          <ul className='flex gap-6 relative'>
            {navs.map(({ item, link }, index) => (
              <li key={index} className="uppercase cursor-pointer">
                {item == "shop" ?
                  <Link href={link} className={`relative group`} onMouseEnter={() => setIsSubCategory(true)}
                    onMouseLeave={() => setIsSubCategory(false)}>
                    {isSubCategory && <span className="absolute -top-14 left-0 w-full h-33"></span>}
                    {item}
                    <IoIosArrowDown size={12} className='inline-block ml-1.5 mb-0.5 align-middle' />
                    <span className='w-0 group-hover:w-full transition-all duration-300 bg-black h-px block'></span>
                  </Link>
                  : <Link className='group' href={link}>
                    {item}
                    <span className='w-0 group-hover:w-full transition-all duration-300 bg-black h-px block'></span>
                  </Link>}
              </li>
            ))}
          </ul>
        </nav>

        <div className={`sub-categories ${isSubCategory ? "visible opacity-100" : "invisible opacity-0"} transition-all absolute w-full top-[calc(100%)] left-0 bg-white shadow-lg`}
          onMouseEnter={() => setIsSubCategory(true)}
          onMouseLeave={() => setIsSubCategory(false)}>
          <div className="container px-12 py-12 flex gap-5">
            <div className="category flex-1">
              <Link href={"#"} className="ul-heading text-sm font-medium mb-2 text-[#313131] uppercase group w-fit block">Tops
                <span className='w-0 group-hover:w-full transition-all duration-300 bg-black h-px block'></span>
              </Link>
              <ul>
                {["Premium Ostrich", "Mandarin Ostrich", "Drifit Ostrich", "Drifit Tee Ostrich", "Daily Fit Ostrich", "Shirts", "Johnny Collar", "Garment Dye Ostrich", "Full Sleeves Shirts", "Graphic Tees"].map((li, index) => (
                  <li key={index} className='font-light uppercase py-px text-[#151515]'>
                    <Link href={"#"} className='group block w-fit'>{li}
                      <span className='w-0 group-hover:w-full transition-all duration-300 bg-black h-px block'>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="category flex-1">
              <Link href={"#"} className="ul-heading text-sm font-medium mb-2 text-[#313131] uppercase group w-fit block">Bottoms
                <span className='w-0 group-hover:w-full transition-all duration-300 bg-black h-px block'></span>
              </Link>
              <ul>
                {["Trousers", "Chinos", "Shorts", "Pants"]
                  .map((li, index) => (
                    <li key={index} className='font-light uppercase py-px text-[#151515]'>
                      <Link href={"#"} className='group block w-fit'>{li}
                        <span className='w-0 group-hover:w-full transition-all duration-300 bg-black h-px block'>
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="category flex-1">
              <Link href={"#"} className="ul-heading text-sm font-medium mb-2 text-[#313131] uppercase group w-fit block">Winter Collection
                <span className='w-0 group-hover:w-full transition-all duration-300 bg-black h-px block'></span>
              </Link>
              <ul>
                {[].map((li, index) => (
                  <li key={index} className='font-light uppercase py-px text-[#151515]'>
                    <Link href={"#"} className='group block w-fit'>{li}
                      <span className='w-0 group-hover:w-full transition-all duration-300 bg-black h-px block'>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Link href="/">
          <Image width={90} height={85} src={"/images/ostrich-logo.png"} alt='Logo' className='brightness-0 max-w-full w-auto h-auto' />
        </Link>
        <div className="actions flex gap-4 flex-1 justify-end">
          <Link href={"#"}><LuUserRound size={24} /></Link>
          <Link href={"#"}><IoSearchOutline size={24} /></Link>
          <Link href={"/cart"} className='relative'>
            <LuShoppingBag size={24} />
            <span className='absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-black text-white text-[10px] font-semibold grid place-content-center'>2</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
