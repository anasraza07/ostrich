import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import 'swiper/css';
import 'swiper/css/navigation'

export interface Product {
  id: number,
  thumbnail: string,
  name: string,
  oldPrice: number | null,
  price: number,
  sizes: string[],
}

export default function ProductsSwiper({ products }: {
  products: Product[]
}) {
  return (
    // <div className="products grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <Swiper slidesPerView={4} spaceBetween={28}
      navigation={true} modules={[Navigation]}>
      {products.map(({ thumbnail, name, oldPrice, price, sizes },
        index) => (
        <SwiperSlide>
          <ProductCard key={index} thumbnail={thumbnail} name={name} oldPrice={oldPrice} price={price} sizes={sizes} />
        </SwiperSlide>
      ))}
    </Swiper>
    /* </div> */
  )
}
