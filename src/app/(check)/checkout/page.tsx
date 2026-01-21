import Image from "next/image";
import Link from "next/link";

export default function Checkout() {
  return (
    <div className="flex">
      <div className="checkout-form py-9.5 px-15.5 flex-[0.5] border-r border-[#dedede]">
        <div className="form-section mb-8">
          <div className="header mb-3.5 flex justify-between">
            <h6 className="text-black text-[21px] font-medium">Contact</h6>
            <Link href={"#"} className="font-light underline">Sign in</Link>
          </div>
          <div className="input-section space-y-3.5">
            <input type="text" placeholder="Email or mobile phone number" className="py-[13.5px] px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            <div className="marketing flex items-center">
              <input type="checkbox" name="" id="" className="mr-2.75" />
              <span className="text-[14px]">Email me with news and offers</span>
            </div>
          </div>
        </div>

        <div className="form-section mb-8">
          <div className="header mb-3.5 flex justify-between">
            <h6 className="text-black text-[21px] font-medium">Delivery</h6>
          </div>
          <div className="input-section space-y-3.5">
            <select className="py-[13.5px] px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" defaultValue={"Pakistan"}>
              <option value="">Pakistan</option>
            </select>
            <div className="input-container flex gap-3.5">
              <input type="text" placeholder="First name (optional)" className="flex-1 py-[13.5px] px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
              <input type="text" placeholder="Last name" className="flex-1 py-[13.5px] px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            </div>
            <input type="text" placeholder="Address" className="flex-1 py-[13.5px] px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            <input type="text" placeholder="Appartment, suite, etc. (optional)" className="flex-1 py-[13.5px] px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            <div className="input-container flex gap-3.5">
              <input type="text" placeholder="City" className="flex-1 py-[13.5px] px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
              <input type="text" placeholder="Postal code (optional)" className="flex-1 py-[13.5px] px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            </div>
            <input type="text" placeholder="Phone" className="flex-1 py-[13.5px] px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            <div className="saving-info flex items-center">
              <input type="checkbox" name="" id="" className="mr-2.75" />
              <span className="text-[14px]">Save this information for next time</span>
            </div>
          </div>
        </div>

        <div className="form-section mb-8">
          <div className="header mb-3.5 flex justify-between">
            <h6 className="text-black text-base font-medium">Shipping method</h6>
          </div>
          <div className="read-only input-section space-y-3.5">
            <div className="p-3.5 border bg-[#F5F5F5] rounded-lg w-full flex justify-between">
              <span className="text-sm font-light">Free</span>
              <span className="uppercase text-sm font-medium">FREE</span>
            </div>
          </div>
        </div>

        <div className="form-section mb-8">
          <div className="header mb-3.5 flex flex-col gap-1">
            <h6 className="text-black text-[21px] font-medium capitalize">Payment</h6>
            <p className="text-sm text-[#707070]">All transactions are secure and encrypted.</p>
          </div>
          <div className="read-only input-section space-y-3.5">
            <input type="text" placeholder="Email or mobile phone number" className="p-3.5 border rounded-lg w-full text-sm bg-[#f5f5f5] outline-none" readOnly value={"Cash on Delivery (COD)"} />
          </div>
        </div>

        <div className="form-section mb-8">
          <div className="header mb-3.5 flex flex-col gap-1">
            <h6 className="text-black text-base font-medium">Billing address</h6>
          </div>
          <div className="radio-input-section">
            <label htmlFor="same">
              <div className="input-container bg-[#f5f5f5] border p-3.5 w-full text-sm rounded-t-lg cursor-pointer">
                <input type="radio" name="bill-address" id="same" className="mr-3 align-middle inline mb-px" readOnly
                  value={"Cash on Delivery (COD)"} />
                <span className="text-sm">Same as shipping address</span>
              </div>
            </label>
            <label htmlFor="different">
              <div className="input-container border border-[#DEDEDE] p-3.5 w-full text-sm rounded-b-lg cursor-pointer">
                <input type="radio" name="bill-address" id="different" className="mr-3 align-middle inline mb-px" readOnly
                  value={"Cash on Delivery (COD)"} />
                <span className="text-sm">Use a different billing address</span>
              </div>
            </label>
          </div>
        </div>

        <button className="p-3.5 border-none rounded-lg w-full bg-[#151515] outline-none text-white cursor-pointer hover:bg-black transition-colors font-medium">Complete order</button>

        <footer className="mt-11.5 border-t border-[#DEDEDE] pt-3.5 flex items-center gap-3.5 text-sm font-light text-black">
          <Link href={"#"} className="underline">Refund policy</Link>
          <Link href={"#"} className="underline">Shipping</Link>
          <Link href={"#"} className="underline">Privacy policy</Link>
          <Link href={"#"} className="underline">Terms of service</Link>
          <Link href={"#"} className="underline">Contact</Link>
        </footer>
      </div>

      <div className="checkout-bill flex-[0.5] bg-[#F5F5F5]">
        <div className="bill-container py-9.5 px-15.5 space-y-5.25 text-sm sticky top-0 left-0">
          <div className="header flex items-center gap-3.5">
            <div className="img w-16 h-16 border-2 border-white rounded-lg shadow-sm flex justify-center">
              <Image src={"https://cdn.shopify.com/s/files/1/0623/0625/4902/files/1_6e343d66-c5c5-49e2-88af-8053036bc835_64x64.jpg?v=1732270071"} alt="Checkout img" width={64} height={64} className="max-w-full w-auto h-auto" />
            </div>
            <div className="info flex-1">
              <p className="text-sm text-black">Pullover Zipper Jacket</p>
              <span className="text-[12px] text-[#666666]">M</span>
            </div>
            <div className="price">Rs 4,000.00</div>
          </div>
          <div className="discount flex gap-3.5">
            <input type="text" placeholder="Discount code" className="flex-1 py-[13.5px] px-2.75 bg-white border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            <button className="p-3.5 text-white bg-[#151515] hover:bg-black rounded-lg font-medium">
              Apply
            </button>
          </div>
          <div className="footer space-y-1.75">
            <div className="subtotal flex justify-between gap-1.75">
              <span>Subtotal</span>
              <span>Rs 4,000.00</span>
            </div>
            <div className="shipping flex justify-between gap-1.75">
              <span>Shipping</span>
              <span className="uppercase">Free</span>
            </div>
            <div className="total flex justify-between gap-1.75 mt-2.5 font-semibold text-lg">
              <span>Total</span>
              <div className="price space-x-1.75">
                <span className="uppercase text-[12px] text-[#666]">pkr</span>
                <span>Rs 4,000.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
