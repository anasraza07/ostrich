"use client";
import Image from 'next/image'
import { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri'

export default function CartItem() {
  const [cartQuantity, setCartQuantity] = useState(0);

  const decreaseCartQuantity = () => {
    cartQuantity > 0 && setCartQuantity(cartQuantity - 1)
  }

  const increaseCartQuantity = () => {
    setCartQuantity(cartQuantity + 1)
  }

  return (
    <div className="cart-item flex justify-between">
      <div className="product-content py-5 flex flex-[.5]">
        <div className="img w-25 h-auto">
          <Image src={"https://theostrich.pk/cdn/shop/files/1_6e343d66-c5c5-49e2-88af-8053036bc835_168x_crop_center.jpg?v=1732270071"} alt="Product img" width={96} height={120} className="max-w-full h-auto" />
        </div>
        <div className="text-content">
          <div className="heading text-[16.5] uppercase mb-1/25">Pullover Zipper Jacket</div>
          <span className="opacity-80 uppercase text-[11px]">Size: M</span>
        </div>
      </div>
      <div className="quantity-content py-5 flex-[.3] flex items-center gap-3">
        <div className="number-operator flex gap-1 border border-[#dedede] rounded-md group">
          <button className={`decrement w-7.5 flex justify-center items-center h-11.5 opacity-50 hover:opacity-80 transition-all cursor-pointer`} onClick={decreaseCartQuantity}>-</button>
          <input type="text" className="w-6.25 appearance-none text-center border-none outline-none font-medium" value={cartQuantity} readOnly />
          <button className="increment w-7.5 flex justify-center items-center h-11.5 opacity-50 hover:opacity-80 transition-all cursor-pointer" onClick={increaseCartQuantity}>+</button>
        </div>
        <RiDeleteBin5Line color="#EB4747" />
      </div>
      <div className="total flex-[.2] py-5 flex justify-end items-center">
        <span className="text-sm font-medium">Rs.2,000.00</span>
      </div>
    </div>
  )
}
