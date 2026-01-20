export default function Button({ text, mode, className = "" }: {
  text: string,
  mode: "dark" | "light",
  className?: string
}) {
  return (
    <button className={`group relative overflow-hidden rounded-md ${mode == "light" ? "bg-white text-[#151515] hover:text-white" : "bg-[#151515] text-white hover:text-[#151515]"} w-full px-6 py-3 font-medium border border-[#151515] transition-colors duration-300 cursor-pointer ${className}`}>
      <span className="relative z-10 uppercase text-sm">{text}</span>
      <div className={`absolute inset-0 transform scale-0 origin-bottom-left rounded-md transition-transform duration-300 ease-in-out ${mode == "light" ? "bg-[#151515]" : "bg-white"} group-hover:scale-100`}></div>
    </button>
  )
}
