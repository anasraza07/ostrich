export default function Button() {
  return (
    <button className="group relative overflow-hidden rounded-md bg-white w-full max-w-65 px-6 py-3 font-medium text-[#151515] border border-[#151515] transition-colors duration-300 hover:text-white cursor-pointer">
      <span className="relative z-10 uppercase text-sm">Choose options</span>
      <div className="absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out bg-[#151515] group-hover:scale-100"></div>
    </button>
  )
}
