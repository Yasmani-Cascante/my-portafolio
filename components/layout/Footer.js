
import Image from "next/image";
import ArrowUpSvg from "../../public/assets/img/bi_arrow-up.svg";

function Footer() {
    return (
      <div className="w-full bg-black pt-28 pb-6 relative">
        <div className="layer mix-darken"></div>
        <ul className="container flex text-white justify-between items-center">
          <li>y_cascante-martinez</li>
          <li>2022 Copyright</li>
          <a href="#" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
            <Image 
            src={ArrowUpSvg}
            alt="illustration of an arrow"
            />
          </a>         
        </ul>
        </div>
    )
}

export default Footer;