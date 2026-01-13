import Image from 'next/image'
import { IoSearchOutline } from 'react-icons/io5'
import { LuShoppingBag, LuUserRound } from 'react-icons/lu'

const navs = ["home", "shop", "about us", "contact"]

export default function Header() {
  return (
    <header className='bg-white z-10 shadow-sm py-6 px-12 flex items-center sticky top-0'>
      <nav className='flex-1'>
        <ul className='flex gap-6'>
          {navs.map((nav, index) => (
            <li key={index} className='uppercase'>{nav}</li>
          ))}
        </ul>
      </nav>
      <Image width={90} height={85} src={"/images/ostrich-logo.png"} alt='Logo' className='brightness-0' />
      <div className="actions flex gap-4 flex-1 justify-end">
        <LuUserRound size={24} />
        <IoSearchOutline size={24} />
        <LuShoppingBag size={24} />
      </div>
    </header>
  )
}
