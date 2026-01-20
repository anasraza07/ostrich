import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "../../_components/common/Button";

export default function Cart() {
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
            <div className="product-item flex justify-between">
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
                <div className="number-operator flex gap-1 border border-[#dedede] rounded-md">
                  <button className="decrement w-7.5 flex justify-center items-center h-11.5 opacity-40">-</button>
                  <input type="text" className="w-6.25 appearance-none text-center border-none outline-none font-medium" value={10} readOnly />
                  <button className="increment w-7.5 flex justify-center items-center h-11.5 opacity-40">+</button>
                </div>
                <RiDeleteBin5Line color="#EB4747" />
              </div>
              <div className="total flex-[.2] py-5 flex justify-end items-center">
                <span className="text-sm font-medium">Rs.2,000.00</span>
              </div>
            </div>
            <div className="product-item flex justify-between">
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
                <div className="number-operator flex gap-1 border border-[#dedede] rounded-md">
                  <button className="decrement w-7.5 flex justify-center items-center h-11.5 opacity-40">-</button>
                  <input type="text" className="w-6.25 appearance-none text-center border-none outline-none font-medium" value={10} readOnly />
                  <button className="increment w-7.5 flex justify-center items-center h-11.5 opacity-40">+</button>
                </div>
                <RiDeleteBin5Line color="#EB4747" />
              </div>
              <div className="total flex-[.2] py-5 flex justify-end items-center">
                <span className="text-sm font-medium">Rs.2,000.00</span>
              </div>
            </div>
            <div className="product-item flex justify-between">
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
                <div className="number-operator flex gap-1 border border-[#dedede] rounded-md">
                  <button className="decrement w-7.5 flex justify-center items-center h-11.5 opacity-40">-</button>
                  <input type="text" className="w-6.25 appearance-none text-center border-none outline-none font-medium" value={10} readOnly />
                  <button className="increment w-7.5 flex justify-center items-center h-11.5 opacity-40">+</button>
                </div>
                <RiDeleteBin5Line color="#EB4747" />
              </div>
              <div className="total flex-[.2] py-5 flex justify-end items-center">
                <span className="text-sm font-medium">Rs.2,000.00</span>
              </div>
            </div>
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
                  <span>icon</span>
                </div>
                <textarea name="" id="" className="min-h-30 w-full border border-[#DEDEDE] outline-none py-3 px-4.25"></textarea>
              </div>
              <Button text="Checkout • Rs.4,000.00" mode="dark" className="w-full mt-3.75" />
              <p className="policy text-[12px] text-center my-5 font-light">Taxes and shipping calculated at checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
