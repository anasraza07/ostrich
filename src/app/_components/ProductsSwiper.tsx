import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import 'swiper/css';
import 'swiper/css/navigation'

export interface Product {
  id: number | string,
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
    <Swiper slidesPerView={4} spaceBetween={28}
      navigation={true} modules={[Navigation]}>
      {products.map((product, index) => (
        <SwiperSlide>
          <ProductCard key={index} product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
