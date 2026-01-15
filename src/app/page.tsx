"use client";
import Image from "next/image";
import AnnouncementBar from "./_components/AnnouncementBar";
import Header from "./_components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <AnnouncementBar />
      <Header />

      <div className="products-section">
        <div className="img w-full">
          <Image alt="Winter Collection" width={1350} height={760} style={{
            width: "100%", height: "auto"
          }} src={"/images/winter/bg.jpg"} />
        </div>

        <div className="px-12 my-22.5">
          <h2 className="text-[34px] font-semibold mb-0.5 tracking-wide">Winter Sale</h2>
          <div className="desc flex justify-between mb-7.5">
            <p className="font-extralight tracking-wider text-[17px]">New Winter Arrivals</p>
            <a href="#" className="text-[15px] font-medium relative">Shop Winter Collection
              <span className="absolute top-full left-0 w-full h-px bg-[#15151566]"></span>
            </a>
          </div>
          <div className="products grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="product">
              <div className="img w-full max-w-97.5 max-h-90.5 mb-5">
                <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" className="w-full h-full object-cover" />
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">black leather jacket
                </h5>
                <div className="price text-sm font-medium mb-1">Rs.2500.00</div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XXL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img w-full max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/blck_375x350_crop_center.jpg?v=1766582585" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">Black Sleeveless Puffer Jacket
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img w-full max-w-97.5 max-h-90.5 mb-5">
                <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" className="w-full h-full object-cover" />
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">black leather jacket
                </h5>
                <div className="price text-sm font-medium mb-1">Rs.2500.00</div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XXL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img w-full max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/blck_375x350_crop_center.jpg?v=1766582585" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">Black Sleeveless Puffer Jacket
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee autoFill speed={80}>
        <div className="slider text-4xl uppercase font-bold py-7.5 flex gap-10 mr-10">
          <div>7 days right of return</div>
          <div className="text-outline">free shippings on all order above 4000 rupees</div>
          <div>7 days right of return</div>
          <div className="text-outline">Fast delivery 3-5 business days</div>
        </div>
      </Marquee>

      <div className="products-section">
        <div className="img w-full my-15">
          <Image alt="Winter Collection" width={1350} height={760} style={{
            width: "100%", height: "auto"
          }} src={"/images/polos/bg.jpg"} />
        </div>

        <div className="px-12 my-22.5">
          <h2 className="text-3xl font-bold mb-1 tracking-wide"></h2>
          <div className="desc flex justify-between mb-7.5">
            <p className="font-extralight tracking-wider"></p>
            <a href="#" className="text-[15px] font-medium relative">Shop Winter Collection
              <span className="absolute top-full left-0 w-full h-px bg-[#15151566]"></span>
            </a>
          </div>
          <div className="products grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2272_375x350_crop_center.jpg?v=1743838039" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2272_375x350_crop_center.jpg?v=1743838039" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="img w-full my-15">
          <img src="https://theostrich.pk/cdn/shop/files/Drifit_Banner_958adba5-2c83-4ff6-b061-c9cc8329260e.jpg?v=1748281121" alt="" />
        </div>

        <div className="px-12 my-22.5">
          <h2 className="text-3xl font-bold mb-1 tracking-wide"></h2>
          <div className="desc flex justify-between mb-7.5">
            <p className="font-extralight tracking-wider"></p>
            <a href="#" className="text-[15px] font-medium relative">
              <span className="absolute top-full left-0 w-full h-px bg-[#15151566]"></span>
            </a>
          </div>
          <div className="products grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/FarmanDri-FitDarkGrey-4_375x350_crop_center.png?v=1740553839" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/FarmanDri-FitMaroon-4_375x350_crop_center.png?v=1740553893" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/FarmanDri-FitLightGrey-4_375x350_crop_center.png?v=1740554290" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="img w-full my-15">
          <img alt="Winter Collection" width={1350} height={760} style={{
            width: "100%", height: "auto"
          }} src={"https://theostrich.pk/cdn/shop/files/T_shirt.jpg?v=1748281121"} />
        </div>

        <div className="px-12 my-22.5">
          <h2 className="text-3xl font-bold mb-1 tracking-wide"></h2>
          <div className="desc flex justify-between mb-7.5">
            <p className="font-extralight tracking-wider"></p>
            <a href="#" className="text-[15px] font-medium relative">
              <span className="absolute top-full left-0 w-full h-px bg-[#15151566]"></span>
            </a>
          </div>
          <div className="products grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2295_375x350_crop_center.jpg?v=1744102540" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2360_375x350_crop_center.jpg?v=1744103372" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2295_375x350_crop_center.jpg?v=1744102540" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2360_375x350_crop_center.jpg?v=1744103372" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="img w-full my-15">
          <img src="https://theostrich.pk/cdn/shop/files/Cuban.jpg?v=1748281121" alt="" />
        </div>

        <div className="px-12 my-22.5">
          <h2 className="text-3xl font-bold mb-1 tracking-wide"></h2>
          <div className="desc flex justify-between mb-7.5">
            <p className="font-extralight tracking-wider"></p>
            <a href="#" className="text-[15px] font-medium relative">Shop Cuban Shirts
              <span className="absolute top-full left-0 w-full h-px bg-[#15151566]"></span>
            </a>
          </div>
          <div className="products grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_1795_375x350_crop_center.jpg?v=1753100095" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_1782_375x350_crop_center.jpg?v=1753099982" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
           <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_1795_375x350_crop_center.jpg?v=1753100095" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_1782_375x350_crop_center.jpg?v=1753099982" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="img w-full my-15">
          <Image alt="Winter Collection" width={1350} height={760} style={{
            width: "100%", height: "auto"
          }} src={"/images/polos/bg.jpg"} />
        </div>

        <div className="px-12 my-22.5">
          <h2 className="text-3xl font-bold mb-1 tracking-wide"></h2>
          <div className="desc flex justify-between mb-7.5">
            <p className="font-extralight tracking-wider"></p>
            <a href="#" className="text-[15px] font-medium relative">Shop Winter Collection
              <span className="absolute top-full left-0 w-full h-px bg-[#15151566]"></span>
            </a>
          </div>
          <div className="products grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2272_375x350_crop_center.jpg?v=1743838039" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/ZAW_2272_375x350_crop_center.jpg?v=1743838039" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="img w-full my-15">
          <img src="https://theostrich.pk/cdn/shop/files/Drifit_Banner_958adba5-2c83-4ff6-b061-c9cc8329260e.jpg?v=1748281121" alt="" />
        </div>

        <div className="px-12 my-22.5">
          <h2 className="text-3xl font-bold mb-1 tracking-wide"></h2>
          <div className="desc flex justify-between mb-7.5">
            <p className="font-extralight tracking-wider"></p>
            <a href="#" className="text-[15px] font-medium relative">
              <span className="absolute top-full left-0 w-full h-px bg-[#15151566]"></span>
            </a>
          </div>
          <div className="products grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/FarmanDri-FitDarkGrey-4_375x350_crop_center.png?v=1740553839" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/FarmanDri-FitMaroon-4_375x350_crop_center.png?v=1740553893" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich lavender d
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.3,000.00</div>
                  <div className="new-price">Rs.1,250.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">M</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
            <div className="product">
              <div className="img max-w-97.5 max-h-90.5 mb-5 relative">
                <img src="https://theostrich.pk/cdn/shop/files/FarmanDri-FitLightGrey-4_375x350_crop_center.png?v=1740554290" alt="product" className="w-full h-full object-cover" />
                <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save 33%</span>
              </div>
              <div className="content text-center px-3.5">
                <h5 className="uppercase text-[16.5px] font-medium mb-1.25">premium ostrich grey
                </h5>
                <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
                  <div className="old-price text-[#A1A1A1] line-through">Rs.2999.00</div>
                  <div className="new-price">Rs.2000.00</div>
                </div>
                <div className="sizes flex justify-center items-center gap-2 mb-2.5">
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">S</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">L</span>
                  <span className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">XL</span>
                </div>
                <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
                  <span className="relative z-10 uppercase text-sm">Choose options</span>
                  <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}