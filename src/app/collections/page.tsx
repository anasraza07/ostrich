"use client";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import Slider from '@mui/material/Slider';
import ReactSwitch from "react-switch";

export default function Collections() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState([20, 37]);

  const handleChange = () => {
    setChecked(!checked);
  };

  // const handleChangeSlider = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div>
      <div className="banner min-h-67.5 flex justify-center items-center">
        <h1 className="uppercase text-[52px] font-semibold">Products</h1>
      </div>
      <main className="border px-12 min-h-screen flex">
        <div className="filters sticky top-44 left-0
        h-fit">
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

          <div className="filter-section">
            <div className="header flex items-center">
              <FiMinus className="mr-4.25" />
              <h5 className="text-sm font-semibold uppercase">price</h5>
            </div>
            <div className="filter-content pt-4 flex flex-col items-center gap-3">
              <span className="text-[13px] mb-3.75">The highest price is Rs.2,500.00</span>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                // onChange={handleChangeSlider}
                valueLabelDisplay="off"
              />
            </div>
          </div>
        </div>
        <div className="products flex-1 min-h-[150vh]">products</div>
      </main>
    </div>
  )
}
