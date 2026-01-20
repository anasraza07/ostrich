"use client";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import Slider from '@mui/material/Slider';
import ReactSwitch from "react-switch";
import { collections } from "../page";
import ProductCard from "../../_components/ProductCard";
import { Product } from "../../_components/ProductsSwiper";

const products: Product[] = [];

for (const collection of collections) {
  for (const product of collection.products) {
    products.push(product);
  }
}

export default function Collections() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState([0, 2500]);
  const [selectInputValue, setSelectInputValue] = useState("alphabetically, a-z");


  const handleChange = () => {
    setChecked(!checked);
  };

  const handleChangeSlider = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* banner */}
      <div className="banner min-h-67.5 flex justify-center items-center">
        <h1 className="uppercase text-[52px] font-semibold">Products</h1>
      </div>

      <main className="px-12 min-h-screen flex gap-15">
        <div className="filters sticky top-44 left-0 h-fit w-62.5">

          <div className="filter-section mb-5">
            <div className="header flex items-center">
              <FiMinus className="mr-4.25" />
              <h5 className="text-sm font-semibold uppercase">Availability</h5>
            </div>
            <div className="filter-content pt-4 flex items-center gap-3">
              <ReactSwitch checked={checked} onChange={handleChange}
                checkedIcon={false} uncheckedIcon={false} onColor="#151515" offColor="#E2E2E2" width={48} height={24} handleDiameter={18} />
              <span className="text-[13px] font-medium">In stock</span>
            </div>
          </div>

          <div className="filter-section mb-5">
            <div className="header flex items-center">
              <FiMinus className="mr-4.25" />
              <h5 className="text-sm font-semibold uppercase">price</h5>
            </div>
            <div className="filter-content pt-4 flex flex-col items-start">
              <span className="text-[13px] mb-1">The highest price is Rs.2,500.00</span>
              <div className="range-slider w-full">
                <Slider
                  getAriaLabel={() => 'Price range'}
                  value={value}
                  onChange={handleChangeSlider}
                  valueLabelDisplay="off"
                  max={2500}
                  min={0}
                />
              </div>

              <div className="slider-prices flex gap-4.5">
                <div className="from flex items-center gap-3">
                  <span className="font-light">Rs</span>
                  <input type="text" value={value[0].toFixed(2)} readOnly className="border border-gray-300 w-22 text-sm p-3" />
                </div>
                <div className="from flex items-center gap-3">
                  <span className="font-light">Rs</span>
                  <input type="text" value={value[1].toFixed(2)} readOnly className="border border-gray-300 w-22 text-sm p-3" />
                </div>
              </div>

            </div>
          </div>

          <div className="filter-section">
            <div className="header flex items-center">
              <FiMinus className="mr-4.25" />
              <h5 className="text-sm font-semibold uppercase">size</h5>
            </div>
            <div className="filter-content pt-4 flex flex-col items-start">
              <ul className="sizes space-y-1.5">
                {["s", "m", "l", "xl", "xxl", "xxxl", "30", "32", "34", "36", "38"].map((size, index) => (
                  <li key={index} className="flex items-center uppercase">
                    <input type="checkbox" id="" className="mt-.5 mr-3" />
                    <label htmlFor="" className="font-medium text-sm">{size}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* products */}
        <div className="products flex-1 min-h-[150vh]">
          <div className="sorting-and-info flex gap-4 justify-end text-[12px] tracking-wider font-medium mb-7">
            <select name="" id="" className="uppercase" value={selectInputValue} onChange={(e) => console.log(e.target)}>
              {["featured", "best selling", "alphabetically, a-z", "alphabetically, z-a", "price, low to high", "price, high to low", "date, old to new", "date, new to old"]
                .map((sortOption, index) => (
                  <option key={index} className="uppercase">{sortOption}
                  </option>
                ))}
            </select>
            <div className="products-quantity uppercase text-[13px] font-light tracking-wider">70 products</div>
          </div>
          <div className="products grid grid-cols-3 gap-7">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
