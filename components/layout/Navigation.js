import Link from "next/link";

function Navigation() {
    function navToggle() {
        var btn = document.getElementById("menuBtn");
        var nav = document.getElementById("menu");
    
        btn.classList.toggle("open");
        nav.classList.toggle("flex");
        nav.classList.toggle("hidden");
      }
    return (
        <div className="max-w-screen border-b">
        <nav className="container border-x flex items-center px-12 pt-10 pb-6 flex-col lg:flex-row">
            <span className="font-bold mr-auto relative top-9 md:top-0">
                y_cascante-martinez
            </span>  
            {/* <ul className="inline ml-auto">
                {[
                    ['Home', '/dashboard'],
                    ['Projects', '/projects'],
                    ['About me', '/about-me'],
                ].map(([title, url]) => (
                    <Link key={title} href={url} className="text-sm px-3 font-bold text-black hover:text-black-dark">
                        {title}
                    </Link>
                ))}

            </ul>  
            <button className="text-sm font-bold mx-16 shadow-custom hover:shadow-none hover:translate-x-1 transition-all">
               Contact me 
            </button>
            <button className="text-sm font-bold shadow-custom hover:shadow-none hover:translate-x-1 transition-all">
                en
            </button>   */}

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
            className="duration-1000 divide-y divide-gray-200 mt-10 lg:mt-0 sm:divide-y-0 w-full lg:w-auto self-end lg:self-center lg:flex flex-col lg:flex-row lg:items-center h-full py-1 lg:py-0 lg:pb-0 hidden ml-auto"
          >
            {/* <li className="font-semibold px-3 py-2 text-black hover:text-gray-900 uppercase">
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li className="font-semibold px-3 py-2 text-black hover:text-gray-900 uppercase">
              <Link href="/new-meetup">New Meetup</Link>
            </li> */}
             {[
                    ['Home', '/dashboard'],
                    ['Projects', '/projects'],
                    ['About me', '/about-me'],
                ].map(([title, url]) => (
                    <Link key={title} href={url} className="text-sm px-3 font-bold text-black hover:text-black-dark py-4 lg:py-0">
                        {title}
                    </Link>
                ))}
            <li className="lg:ml-5 pt-10 lg:pt-0">
            <button className="text-sm font-bold shadow-custom hover:shadow-none hover:translate-x-1 transition-all mr-16 lg:mx-16">
               Contact me 
            </button>
            <button className="text-sm font-bold shadow-custom hover:shadow-none hover:translate-x-1 transition-all">
                en
            </button> 
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default Navigation;