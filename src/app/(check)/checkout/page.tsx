import Link from "next/link";

export default function Checkout() {
  return (
    <div className="px-6 flex">
      <div className="checkout-form p-9.5 flex-1">
        <div className="form-section mb-8">
          <div className="header mb-3.5 flex justify-between">
            <h6 className="text-black text-[21px] font-medium">Contact</h6>
            <Link href={"#"} className="font-light underline">Sign in</Link>
          </div>
          <div className="input-section space-y-3.5">
            <input type="text" placeholder="Email or mobile phone number" className="py-3.25 px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
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
            <select className="py-3.25 px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" defaultValue={"Pakistan"}>
              <option value="">Pakistan</option>
            </select>
            <div className="input-container flex gap-3.5">
              <input type="text" placeholder="First name (optional)" className="flex-1 py-3.25 px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
              <input type="text" placeholder="Last name" className="flex-1 py-3.25 px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            </div>
            <input type="text" placeholder="Address" className="flex-1 py-3.25 px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            <input type="text" placeholder="Appartment, suite, etc. (optional)" className="flex-1 py-3.25 px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            <div className="input-container flex gap-3.5">
              <input type="text" placeholder="City" className="flex-1 py-3.25 px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
              <input type="text" placeholder="Postal code (optional)" className="flex-1 py-3.25 px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
            </div>
            <input type="text" placeholder="Phone" className="flex-1 py-3.25 px-2.75 border border-[#DEDEDE] rounded-lg w-full placeholder:text-sm" />
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
          <div className="input-section space-y-3.5">
            <div className="py-3.25 px-2.75 border border-black bg-[#F6F6F6] rounded-lg w-full flex justify-between">
              <span className="text-sm font-light">Free</span>
              <span className="uppercase text-sm font-medium">FREE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-bill p-9.5 flex-1"></div>
    </div>
  )
}
