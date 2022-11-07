import Link from "next/link";

function Navigation() {
    return (
        <div className="max-w-screen border-b">
        <nav className="container border-x flex items-center px-12 pt-10 pb-6">
            <span className="font-bold">
                y_cascante-martinez
            </span>  
            <ul className="inline ml-auto">
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
            <button className="text-sm font-bold hover:bg-black hover:text-white hover:border-black transition-all">
                en
            </button>      
        </nav>
        </div>
    )
}

export default Navigation;