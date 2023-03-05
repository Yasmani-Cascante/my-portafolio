import Link from "next/link";

import  ThemeSwitch from "../ui/Theme-Switch";
import LangDropdown from "../ui/LangDropdown";
import useWindowDimensions from "../hooks/UseWindowDimensions"
import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";

function Navigation() {
  var [isOpen, toggleOpen] = useCycle(false, true);

  // If windowWidth is > 1024 show the menu 
  const {  windowWidth } = useWindowDimensions();
  windowWidth >=1024 ? isOpen = true : null;

    const variants = {
      closed: {
        x: 0,
        transition: {
          duration: 0.1
        }
      },
      open: {
        x: 6,
        transition: {
          duration: 0.1
        }
      },
      openMiddle: {
        x: -6,
        transition: {
          duration: 0.1
        }
      }
    };

    const menuVariants = {
      show: {
        display: 'flex',
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        }
      },

      hidden: {
        display: 'none',
        opacity: 0, 
        y: -20,
        // transition: {
        //   // duration: 0.3,
        //   when: "afterChildren" 
        // }
      }
    };
    
    
    return (
        <div className="max-w-screen border-b relative">
        <nav className="container border-x flex items-center px-8 lg:pt-10 pb-6 flex-col lg:flex-row z-10 relative">
            <span className="font-bold mr-auto relative top-9 lg:top-0">
                y_cascante-martinez
            </span>  
        
            {/* Responsive Menu */}

            <div className="ml-auto">

            {/* <button
              id="menuBtn"
              className="hamburger block lg:hidden focus:outline-none"
              type="button"
              onClick={navToggle}
            >
              <span className="hamburger__top-bun text-black"></span>
              <span className="hamburger__bottom-bun"></span>
            </button> */}

            {/* <button> */}
              <motion.div 
              className="menu-hamburger lg:hidden"
              onClick={()=>toggleOpen()}
              >
                <motion.span 
                className="bar-top bg-black dark:bg-white" 
                variants={variants}
                animate={isOpen ? "open" : "closed"}
                />
                <motion.span 
                className="bar-middle bg-black dark:bg-white"
                variants={variants}
                animate={isOpen ? "openMiddle" : "closed"}
                 />
                <motion.span 
                className="bar-bottom bg-black dark:bg-white" 
                variants={variants}
                animate={isOpen ? "open" : "closed"}
                />
              </motion.div> 
              {/* </button> */}
            </div>

            <motion.ul
            // className="responsive-nav duration-1000 transition-all mt-10 lg:mt-0 lg:divide-y-0 w-full lg:w-auto self-end lg:self-center lg:flex flex-col lg:flex-row lg:items-center h-full py-1 lg:py-0 lg:pb-0 hidden ml-auto"
            className="responsive-nav lg:flex mt-10 lg:mt-0 lg:divide-y-0 w-full lg:w-auto self-end lg:self-center flex flex-col lg:flex-row lg:items-center h-full py-1 lg:py-0 lg:pb-0 ml-auto opacity-100"
            variants={menuVariants}
            animate={isOpen ? "show" : "hidden"}
         >
             {[
                    ['Home', '/dashboard'],
                    ['Projects', '/projects'],
                    ['About me', '/about-me'],
                ].map(([title, url]) => (
                  <motion.li 
                  key={title}
                  >
                    <Link 
                    href={url} 
                    className="block text-xl lg:text-sm px-6 text-center border-b lg:border-b-0 font-bold text-black hover:text-black-dark py-4 lg:py-0 hover:border-dashed transition-all dark:text-white"
                    
                    >
                        {title}
                    </Link>
                  </motion.li>

                ))}

            <motion.li className="lg:ml-5 pt-10 lg:pt-0 text-center">
              <div className="flex gap-x-8 lg:ml-8 xl:ml-12 gap-y-6 flex-wrap justify-center">
              {/* <button className="text-sm font-bold shadow-custom hover:shadow-none hover:translate-x-1 transition mr-16 lg:mx-16"> */}
              <button className="btn-primary text-sm font-bold shadow-custom hover:shadow-none hover:translate-x-1 transition ">
               Contact me 
            </button>
            <LangDropdown />
            <ThemeSwitch />
              </div>
            </motion.li>
            <li>
            </li>
          </motion.ul>
        </nav>
       

        </div>
    )
}

export default Navigation;
