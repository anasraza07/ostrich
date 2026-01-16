import Button from "./common/Button";

interface Props {
  name: string,
  oldPrice: number | null,
  price: number,
  sizes: string[],
  thumbnail: string
}

export default function ProductCard({ name, oldPrice,
  price, sizes, thumbnail }: Props) {

  const savingPercentage = oldPrice && Math.round((oldPrice - price) / oldPrice * 100);

  return (
    <div className="product">
      <div className="img w-full max-w-97.5 max-h-90.5 mb-5 relative">
        <img src={thumbnail} alt="product" className="w-full h-full object-cover" />
        {oldPrice && <span className="saving absolute top-4 left-4 bg-[#279a4b] text-white font-semibold uppercase text-[10px] rounded-full px-2.5 py-1">save {savingPercentage}%</span>}
      </div>
      <div className="content text-center px-3.5">
        <h5 className="uppercase text-[16.5px] font-medium mb-1.25">{name}
        </h5>
        <div className="prices flex justify-center gap-2 text-sm font-medium mb-1">
          {oldPrice && <div className="old-price text-[#A1A1A1] line-through">Rs.{oldPrice}</div>}
          <div className="new-price">Rs.{price}</div>
        </div>
        <div className="sizes flex justify-center items-center gap-2 
        mb-2.5">
          {sizes.map((size, index) => (
            <span key={index} className="border border-gray-300 text-gray-600 py-0.5 px-1.25 text-[10px] rounded-md">{size}</span>
          ))}
        </div>
        <Button />
      </div>
    </div>
  )
}
