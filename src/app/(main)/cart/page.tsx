"use client"
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "../../_components/common/Button";
import CartItem from "@/app/_components/CartItem";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

export default function Cart() {
  const [isNotesOpen, setIsNotesOpen] = useState(false)
  return (
    <div>
      <div className="cart max-w-4xl w-full mx-auto my-17.5">
        <h3 className="text-[28px] mb-7.5 font-light">Your cart</h3>

        {/* table */}
        <div className="">
          <div className="thead flex border-b border-[#E2E2E2] py-4">
            <h6 className="uppercase text-[11px] font-medium flex-[.5]">product</h6>
            <h6 className="uppercase text-[11px] font-medium flex-[.3]">quantity</h6>
            <h6 className="uppercase text-[11px] font-medium flex-[.2] text-end">total</h6>
          </div>
          <div className="tbody divide-y divide-[#E2E2E2] border-b border-[#E2E2E2]">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="tfooot flex">
            <div className="continue flex-1 pt-7 pb-2.5">
              <Link href={"/collections"} className="flex flex-col w-fit">
                <span>Continue shopping</span>
                <span className="w-full h-px bg-[#A1A1A1]"></span></Link>
            </div>
            <div className="checkout-policy flex-1 py-2.5">
              <div className="notes">
                <div className="title py-4.5 flex justify-between text-sm font-light">
                  <span className="">Add notes</span>
                  <span className="cursor-pointer" onClick={() => {
                    setIsNotesOpen(!isNotesOpen)
                  }}>
                    {isNotesOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>
                <textarea name="" id="" className={`min-h-30 w-full border border-[#DEDEDE] outline-none py-3 px-4.25 ${!isNotesOpen && "hidden"}`}></textarea>
              </div>
              <Link href={"/checkout"}>
                <Button text="Checkout • Rs.4,000.00" mode="dark" className="w-full mt-3.75" />
              </Link>
              <p className="policy text-[12px] text-center my-5 font-light">Taxes and shipping calculated at checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
