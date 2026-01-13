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
        <Image alt="Winter Collection" width={500} height={500} sizes="100vw" style={{
          width: "100%", height: "auto"
        }} src={"/images/winter/bg.jpg"} />
        <div className="px-12 my-22.5">
          <h2 className="text-3xl font-bold mb-1 tracking-wide">Winter Sale</h2>
          <div className="desc flex justify-between mb-4">
            <p className="font-extralight tracking-wider">New Winter Arrivals</p>
            <a href="#" className="text-sm font-medium">Shop Winter Collection</a>
          </div>
          <div className="products">
            <Swiper navigation={true} modules={[Navigation]}
              slidesPerView={4}>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">black leather jacket
                    </h5>
                    <div className="price mb-1">Rs.2500.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">M</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span>
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">black leather jacket
                    </h5>
                    <div className="price mb-1">Rs.2500.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">M</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span>
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">black leather jacket
                    </h5>
                    <div className="price mb-1">Rs.2500.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">M</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span>
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">black leather jacket
                    </h5>
                    <div className="price mb-1">Rs.2500.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">M</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span>
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">black leather jacket
                    </h5>
                    <div className="price mb-1">Rs.2500.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">M</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span>
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">black leather jacket
                    </h5>
                    <div className="price mb-1">Rs.2500.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">M</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span>
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">black leather jacket
                    </h5>
                    <div className="price mb-1">Rs.2500.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">M</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span>
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">black leather jacket
                    </h5>
                    <div className="price mb-1">Rs.2500.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">M</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span>
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
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
        <Image alt="Winter Collection" width={500} height={500} sizes="100vw" style={{
          width: "100%", height: "auto"
        }} src={"/images/polos/bg.jpg"} className="my-15" />
        <div className="px-12 my-22.5">
          {/* <h2 className="text-3xl font-bold mb-1 tracking-wide">Winter Sale</h2> */}
          <div className="desc flex justify-between mb-4">
            <p className="font-extralight tracking-wider"></p>
            <a href="#" className="text-sm font-medium">Shop Premium Polo</a>
          </div>
          <div className="products">
            <Swiper navigation={true} modules={[Navigation]}
              slidesPerView={4} spaceBetween={28}>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">premium ostrich grey
                    </h5>
                    <div className="price mb-1">Rs.1250.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">S</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      {/* <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span> */}
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">premium ostrich grey
                    </h5>
                    <div className="price mb-1">Rs.1250.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">S</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      {/* <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span> */}
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">premium ostrich grey
                    </h5>
                    <div className="price mb-1">Rs.1250.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">S</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      {/* <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span> */}
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">premium ostrich grey
                    </h5>
                    <div className="price mb-1">Rs.1250.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">S</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      {/* <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span> */}
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">premium ostrich grey
                    </h5>
                    <div className="price mb-1">Rs.1250.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">S</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      {/* <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span> */}
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product">
                  <img src="https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237" alt="product" />
                  <div className="content text-center p-4">
                    <h5 className="uppercase text-lg mb-1">premium ostrich grey
                    </h5>
                    <div className="price mb-1">Rs.1250.00</div>
                    <div className="sizes flex justify-center items-center gap-2 mb-2">
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">S</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">L</span>
                      <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XL</span>
                      {/* <span className="border border-gray-300 text-gray-600 text-[12px] p-1 rounded-md">XXL</span> */}
                    </div>
                    <button className="border py-3 px-8 uppercase rounded-md text-[15px]">Choose options</button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
