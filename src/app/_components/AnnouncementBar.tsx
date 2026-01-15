import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlPlane } from "react-icons/sl";
import Marquee from "react-fast-marquee";

const announcements = [{
  icon: <MdOutlineLocalShipping />,
  text: "Free shippings on all order above 4000 rupees"
}, {
  icon: <HiMiniArrowUturnLeft className="rotate-x-180" />,
  text: "7 days right of exchange"
}, {
  icon: <SlPlane />,
  text: "Fast delivery 3-5 business days"
}, {
  icon: <LuMessageCircleMore className="rotate-y-180" />,
  text: "Customer service: info@theostrich.pk"
},]

export default function AnnouncementBar() {
  return (
    <div className="bg-[#151515]">
      <Marquee autoFill pauseOnHover speed={40}>
        <ul className="flex items-center gap-10 p-3">
          {announcements.map((a, index) => (
            <li key={index} className="flex gap-4 items-center text-[#C4C4C4]">
              {a.icon}
              <p className="text-[12px] text-white font-bold">{a.text}</p>
            </li>
          ))}
        </ul>
      </Marquee>

    </div>
  )
}
