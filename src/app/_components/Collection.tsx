import Image from 'next/image';
import ProductsSwiper, { Product } from './ProductsSwiper';

interface Collection {
  id: number,
  collectionBg: string,
  collectionInfo: {
    heading: string,
    description: string,
    link: string
  },
  products: Product[]
}

export default function Collection({ collection }: {
  collection: Collection
}) {
  const { collectionBg, collectionInfo: { heading, description, link }, products } = collection;
  return (
    <div className="products-section">
      <div className="img w-full">
        <Image alt={`${heading} Img`} width={1350} height={760} style={{
          width: "100%", height: "auto"
        }} src={collectionBg} />
      </div>

      <div className="px-12 my-22.5">
        <h2 className="text-[34px] font-semibold mb-0.5 tracking-wide">{heading}</h2>
        <div className="desc flex justify-between mb-7.5">
          <p className="font-extralight tracking-wider text-[17px]">{description}</p>
          <a href="#" className="text-[15px] font-medium relative">{link}
            <span className="absolute top-full left-0 w-full h-px bg-[#15151566]"></span>
          </a>
        </div>
        <ProductsSwiper products={products} />
      </div>
    </div>
  )
}
