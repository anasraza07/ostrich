"use client";
import Image from "next/image";
import AnnouncementBar from "../_components/AnnouncementSlider";
import Header from "../_components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import Marquee from "react-fast-marquee";
import Collection from "../_components/Collection";

export const collections = [
  {
    id: 1,
    collectionBg: "/images/winter/bg.jpg",
    collectionInfo: {
      heading: "Winter Sale",
      description: "New Winter Arrivals",
      link: "Shop Winter Collection"
    },
    products: [{
      id: "p1",
      thumbnail: "https://theostrich.pk/cdn/shop/files/2_e6213d3f-c2d6-4669-941e-99938ba78cc1_375x350_crop_center.jpg?v=1732289751",
      name: "black leather jacket",
      oldPrice: null,
      price: 2500,
      sizes: ["M", "XL", "XXL"]
    }, {
      id: "p2",
      thumbnail: "https://theostrich.pk/cdn/shop/files/blck_375x350_crop_center.jpg?v=1766582585",
      name: "Black Sleeveless Puffer Jacket",
      oldPrice: 2999,
      price: 2000,
      sizes: ["M", "L", "XL"]
    }, {
      id: "p3",
      thumbnail: "https://theostrich.pk/cdn/shop/files/DSC_1044_375x350_crop_center.jpg?v=1768381246",
      name: "Bomber jacket LA",
      oldPrice: 3500,
      price: 2500,
      sizes: ["S", "M", "L", "XL", "XXL"]
    }, {
      id: "p4",
      thumbnail: "https://theostrich.pk/cdn/shop/files/DSC_1115_375x350_crop_center.jpg?v=1768381183",
      name: "Bomber jacket bull",
      oldPrice: null,
      price: 2500,
      sizes: ["S", "M", "L", "XL", "XXL"]
    }, {
      id: "p5",
      thumbnail: "https://theostrich.pk/cdn/shop/files/Final_Image_brown_puffer_375x350_crop_center.jpg?v=1768393714",
      name: "dark brown sleeveless puffer jacket",
      oldPrice: 2999,
      price: 999,
      sizes: ["S", "M", "L"]
    }]
  }, {
    id: 2,
    collectionBg: "/images/polos/bg.jpg",
    collectionInfo: {
      heading: "",
      description: "",
      link: "Shop Premium Polo"
    },
    products: [{
      id: "p6",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_2387_375x350_crop_center.jpg?v=1743838237",
      name: "premium ostrich grey",
      oldPrice: 3000,
      price: 1250,
      sizes: ["S", "L", "XL"]
    }, {
      id: "p7",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_2272_375x350_crop_center.jpg?v=1743838039",
      name: "premium ostrich lavender d",
      oldPrice: 3000,
      price: 1250,
      sizes: ["S", "M", "L", "XL"]
    }, {
      id: "p8",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_2065_375x350_crop_center.jpg?v=1743838496",
      name: "premium ostrich blue",
      oldPrice: 3000,
      price: 1250,
      sizes: ["S", "M", "L", "XL"]
    }, {
      id: "p9",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_2108_375x350_crop_center.jpg?v=1743838528",
      name: "premium ostrich powder blue",
      oldPrice: 3000,
      price: 1250,
      sizes: ["S", "M", "L", "XL"]
    }, {
      id: "p10",
      thumbnail: "https://theostrich.pk/cdn/shop/files/DSC_0402_375x350_crop_center.jpg?v=1747139162",
      name: "premium ostrich black",
      oldPrice: 3000,
      price: 1250,
      sizes: ["S", "M", "L", "XL"]
    }]
  }, {
    id: 3,
    collectionBg: "https://theostrich.pk/cdn/shop/files/Drifit_Banner_958adba5-2c83-4ff6-b061-c9cc8329260e.jpg?v=1748281121",
    collectionInfo: {
      heading: "",
      description: "",
      link: ""
    },
    products: [{
      id: "p11",
      thumbnail: "https://theostrich.pk/cdn/shop/files/FarmanDri-FitDarkGrey-4_375x350_crop_center.png?v=1740553839",
      name: "ostrich drifit dark grey",
      oldPrice: 2000,
      price: 799,
      sizes: ["S", "M", "L"]
    }, {
      id: "p12",
      thumbnail: "https://theostrich.pk/cdn/shop/files/FarmanDri-FitMaroon-4_375x350_crop_center.png?v=1740553893",
      name: "ostrich drifit dark maroon",
      oldPrice: 2000,
      price: 799,
      sizes: ["S", "M", "L", "XL"]
    }, {
      id: "p13",
      thumbnail: "https://theostrich.pk/cdn/shop/files/FarmanDri-FitLightGrey-4_375x350_crop_center.png?v=1740554290",
      name: "ostrich drifit light grey",
      oldPrice: 2000,
      price: 799,
      sizes: ["S", "M", "L", "XL"]
    },]
  }, {
    id: 4,
    collectionBg: "https://theostrich.pk/cdn/shop/files/T_shirt.jpg?v=1748281121",
    collectionInfo: {
      heading: "",
      description: "",
      link: ""
    },
    products: [{
      id: "p14",
      thumbnail: "http://theostrich.pk/cdn/shop/files/ZAW_2295_375x350_crop_center.jpg?v=1744102540",
      name: "textured light blue dri-fit tee",
      oldPrice: 1700,
      price: 999,
      sizes: ["M", "L", "XL", "XXL"]
    }, {
      id: "p15",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_2360_375x350_crop_center.jpg?v=1744103372",
      name: "green dri-fit tee",
      oldPrice: 1700,
      price: 900,
      sizes: ["M", "L", "XL", "XXL"]
    }, {
      id: "p16",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_2424_375x350_crop_center.jpg?v=1744099331",
      name: "textured sky blue dri-fit tee",
      oldPrice: 1700,
      price: 999,
      sizes: ["M"]
    }, {
      id: "p17",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_2153_375x350_crop_center.jpg?v=1744103166",
      name: "mint green dri-fit tee",
      oldPrice: 1700,
      price: 999,
      sizes: ["M", "L", "XL", "XXL"]
    }, {
      id: "p18",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_2478_56541788-adac-4c8b-99ca-07f878eec307_375x350_crop_center.jpg?v=1744106304",
      name: "sky blue dri-fit tee",
      oldPrice: 1700,
      price: 999,
      sizes: ["M", "L", "XL", "XXL"]
    },
    ]
  }, {
    id: 5,
    collectionBg: "https://theostrich.pk/cdn/shop/files/Cuban.jpg?v=1748281121",
    collectionInfo: {
      heading: "",
      description: "",
      link: "Shop Cuban Shirts"
    },
    products: [{
      id: "p19",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_1795_375x350_crop_center.jpg?v=1753100095",
      name: "grey white stripped mandrain",
      oldPrice: 2750,
      price: 1500,
      sizes: ["S", "M", "L", "XL"]
    }, {
      id: "p20",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_1782_375x350_crop_center.jpg?v=1753099982",
      name: "peach white stripped mandrain",
      oldPrice: 2750,
      price: 1500,
      sizes: ["S", "M", "L", "XL"]
    }, {
      id: "p21",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_1745_375x350_crop_center.jpg?v=1753099847",
      name: "blue white stripped mandrain",
      oldPrice: 2750,
      price: 1500,
      sizes: ["S", "M", "L", "XL"]
    }, {
      id: "p22",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_1697_375x350_crop_center.jpg?v=1753097483",
      name: "black cotton shirt",
      oldPrice: 2750,
      price: 1500,
      sizes: ["S", "M", "XL"]
    }, {
      id: "p23",
      thumbnail: "https://theostrich.pk/cdn/shop/files/ZAW_1586_375x350_crop_center.jpg?v=1753094299",
      name: "black stripped shirt",
      oldPrice: 2750,
      price: 1500,
      sizes: ["S", "M", "L", "XXL"]
    },
    ]
  }, {
    id: 6,
    collectionBg: "https://theostrich.pk/cdn/shop/files/jeans_b7bd5e73-73af-41ba-a095-3deac90767a1.jpg?v=1748281203",
    collectionInfo: {
      heading: "",
      description: "",
      link: ""
    },
    products: [{
      id: "p24",
      thumbnail: "https://theostrich.pk/cdn/shop/files/Jeans-Pant-2_375x350_crop_center.png?v=1723223549",
      name: "tapered jeans",
      oldPrice: 3740,
      price: 2299,
      sizes: ["30", "32", "34", "36", "38"]
    }, {
      id: "p25",
      thumbnail: "https://theostrich.pk/cdn/shop/files/6_9dd510de-423a-4219-a552-be5d1f5d1d08_375x350_crop_center.jpg?v=1730109406",
      name: "carrot fit jeans",
      oldPrice: 3740,
      price: 2299,
      sizes: ["30", "32", "34", "36", "38"]
    }, {
      id: "p26",
      thumbnail: "https://theostrich.pk/cdn/shop/files/6_18ab7ff4-ae6f-476c-820b-c9ceb83ae7d1_375x350_crop_center.jpg?v=1730109564",
      name: "slim fit jeans",
      oldPrice: 3740,
      price: 2299,
      sizes: ["30", "32", "34", "36", "38"]
    }]
  }, {
    id: 7,
    collectionBg: "https://theostrich.pk/cdn/shop/files/Cotton_Paints_d407bd24-6797-4596-a059-1a894b606ad2.jpg?v=1748281121",
    collectionInfo: {
      heading: "",
      description: "",
      link: ""
    },
    products: []
  }, {
    id: 8,
    collectionBg: "https://theostrich.pk/cdn/shop/files/Shorts.jpg?v=1748281121",
    collectionInfo: {
      heading: "",
      description: "",
      link: ""
    },
    products: [{
      id: "p27",
      thumbnail: "https://theostrich.pk/cdn/shop/files/1_aa4f3d9b-94cb-4c90-9738-bb4267efe626_770x700_crop_center.jpg?v=1729535507",
      name: "terry jogger shorts (orange)",
      oldPrice: 1700,
      price: 999,
      sizes: ["30", "32", "34", "38"]
    }, {
      id: "p28",
      thumbnail: "https://theostrich.pk/cdn/shop/files/6_765ed6f9-3e95-4462-831b-85de7a1d0073_770x700_crop_center.jpg?v=1729534502",
      name: "terry jogger shorts (blue)",
      oldPrice: 1700,
      price: 999,
      sizes: ["30", "32", "34", "38"]
    },
    ]
  }
]

export default function Home() {
  return (
    <div>
      <Collection collection={collections[0]} />

      <Marquee autoFill speed={80}>
        <div className="slider text-4xl uppercase font-bold py-7.5 flex gap-10 mr-10">
          <div>7 days right of return</div>
          <div className="text-outline">free shippings on all order above 4000 rupees</div>
          <div>7 days right of return</div>
          <div className="text-outline">Fast delivery 3-5 business days</div>
        </div>
      </Marquee>

      {collections.map((c, index) => {
        if (index == 0) return null;
        return <Collection key={c.id} collection={collections[index]} />
      })}
    </div>
  );
}