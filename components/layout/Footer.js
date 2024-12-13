
import Image from "next/image";
import ArrowUpSvg from "../../public/assets/img/arrow-up.svg";

function Footer() {
    return (
      <footer className="w-full bg-black pt-28 pb-6 relative">
        {/* <div className="bg_noise mix-darken"></div> */}
        <ul className="container flex text-white justify-between items-center md:items-end gap-8 pb-4 flex-col md:flex-row">
          <li>y_cascante-martinez</li>
          <li>2022 Copyright</li>
          <a href="#" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
            <ArrowUpSvg className="footer-svg"/>
          </a>         
        </ul>
      </footer>
    )
}

export default Footer;