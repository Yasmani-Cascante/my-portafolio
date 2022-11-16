import Link from "next/link";

import  ThemeSwitch from "../ui/Theme-Switch";
import Dropdown from "../ui/Dropdown";

function Navigation() {
    function navToggle() {
        var btn = document.getElementById("menuBtn");
        var nav = document.getElementById("menu");
    
        btn.classList.toggle("open");
        nav.classList.toggle("flex");
        nav.classList.toggle("hidden");
      }
    return (
        <div className="max-w-screen border-b relative">
        <nav className="container border-x flex items-center px-12 lg:pt-10 pb-6 flex-col lg:flex-row ">
            <span className="font-bold mr-auto relative top-9 lg:top-0">
                y_cascante-martinez
            </span>  
        
            {/* Responsive Menu */}

            <div className="ml-auto">
            <button
              id="menuBtn"
              className="hamburger block lg:hidden focus:outline-none"
              type="button"
              onClick={navToggle}
            >
              <span className="hamburger__top-bun text-black"></span>
              <span className="hamburger__bottom-bun"></span>
            </button>
            </div>

            <ul
            id="menu"
            className="responsive-nav duration-1000 transition-all mt-10 lg:mt-0 lg:divide-y-0 w-full lg:w-auto self-end lg:self-center lg:flex flex-col lg:flex-row lg:items-center h-full py-1 lg:py-0 lg:pb-0 hidden ml-auto"
          >
             {[
                    ['Home', '/dashboard'],
                    ['Projects', '/projects'],
                    ['About me', '/about-me'],
                ].map(([title, url]) => (
                    <Link key={title} href={url} className="text-xl lg:text-sm px-6 text-center border-b lg:border-b-0 font-bold text-black hover:text-black-dark py-4 lg:py-0 hover:border-dashed transition-all dark:text-white">
                        {title}
                    </Link>
                ))}
            <li className="lg:ml-5 pt-10 lg:pt-0 text-center">
              <div className="flex gap-x-8 lg:ml-8 xl:ml-12 gap-y-6 flex-wrap justify-center">
              {/* <button className="text-sm font-bold shadow-custom hover:shadow-none hover:translate-x-1 transition mr-16 lg:mx-16"> */}
              <button className="text-sm font-bold shadow-custom hover:shadow-none hover:translate-x-1 transition ">
               Contact me 
            </button>
            <Dropdown />
            <ThemeSwitch />
              </div>
            </li>
            <li>
            </li>
          </ul>
        </nav>
       

        </div>
    )
}

export default Navigation;