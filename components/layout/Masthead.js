import Image from "next/image";
import DiagonalLinesSvg from "../../public/assets/img/diagonal-lines.svg";
import VerticalLinesSvg from "../../public/assets/img/vertical-lines.svg";
import ArrowDownSvg from "../../public/assets/img/icons/arrow-down.svg";
import Ellipse from "../../public/assets/img/103.png";
// import Ellipse from "../../public/assets/img/78.png";
// import EllipseSvg from "../../public/assets/img/Ellipse.svg";
// import EllipseSvg from "../../public/assets/img/lines-masthead.svg";
import EllipseSvg from "../../public/assets/img/diagonal-lines.svg";
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import MagneticButton from "../ui/Magnetic-button.js"

import { animate, motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function Masthead() {
    const constraintsRef = useRef(null);

    return (
        <div className="max-w-screen border-b min-h-full relative ">
            <div className="container border-x relative min-h-[80vh] lg:min-h-[90vh]"
            ref={constraintsRef}
            >

                <div className="ml-5 sm:ml-20 lg:ml-28 pt-28 md:pt-36 max-w-[69rem]">
                    <span className="text-5xl block dark:text-white-dark">Hi!, I&apos;m a freelance</span>
                {/* <h1 className=' text-[4rem] md:text-8xl lg:text-9xl font-bold inline md:whitespace-nowrap'>Creative <br />  Web Designer <br /> & Developer</h1> */}
                <div className="mt-6">
                    <h1 className='masthead-title inline'>Web Designer <br/> & Developer</h1>
                </div>
                {/* <h1 className='text-[4.12rem] inline relative masthead-title'>Creative Web  
                <span className="masthead-title__span ml-7 text-9xl">&</span><span className="block ">Designer</span> <span>Developer</span> </h1> */}
                    <div className="masthead-contact-row mt-[6rem] max-w-sm ml-24">
                        {/* <div className="h-6 w-6 bg-black-bg  ml-2 shadow-normal rounded-full"></div> */}
                        
                        <p className="uppercase font-bold text-black-bg text-sm"> MY WEBSITES EMBODY A MINIMALISTIC AND CREATIVE DESIGN, SOLVE BUSINESS ISSUES, 
                        AND ARE USER-FRIENDLY.    
                        </p>
                        {/* <div className="mt-20 flex items-center">
                            <div className="h-6 w-6 bg-black-bg dark:bg-white-dark shadow-normal rounded-full"></div>
                            <Link key='Github' href='#' className="uppercase font-bold text-lg px-6 flex-initial">
                                Contact me
                            </Link>
                        </div> */}
                        
{/*                       
                        <motion.div 
                        // initial={{ x:1050, y:-505}}
                        // initial={{ x:0, y:0}}
                        // initial={{ opacity:0, x:0, y:0}}
                        // whileInView={{ opacity:1, x:-80, y:350 }}
                        // transition={{ delay: 0.5, duration: 1 }}
                        // transitionEnd={()=>{setshowText(!showText)}}
                        drag
                        dragConstraints={constraintsRef}
                        viewport={{ once: true, amount: 0.3 }}
                        className="draggable border rounded-full px-20 py-16 font-bold inline-block right-80"
                        >
                            <Link key='Github' href='#' className="">
                                <ArrowDownSvg 
                                    className=""
                                />
                            </Link>
                        </motion.div> */}
                    </div>
                </div>
               
                     {/* <a href="#" className="absolute bottom-44 right-64 border rounded-full px-16 py-24"> 
                        <ArrowDownSvg 
                        className=""
                        />
                        <span className="font-bold text-xl uppercase block text-center">Contact</span>
                    </a>     */}

                    <MagneticButton text={'Contact'}/>
                    <DiagonalLinesSvg 
                     className="absolute right-0 bottom-0 w-1/2 h-24"
                    />
                    
                     {/* <div className="w-full absolute top-0 -bottom-24 -right-[30vw] -z-10"> */}
                       {/* <Image 
                            alt="Decorative line"
                            className="h-full w-full -z-10 opacity-50"
                            src={Ellipse}
                            fill
                            style={
                                {
                                // objectFit:"cover",
                                objectFit:"contain",

                                // minHeight: "100%",
                            //    filter: "grayscale(100%)"
                                }
                            }
                        /> */}
                         {/* <EllipseSvg 
                            className="absolute top-0 -z-10"  
                        /> */}
                    {/* </div> */}
                      {/* <EllipseSvg 
                            className="absolute bottom-0 w-1/2 right-0 h-16 -z-10"  
                        /> */}
            </div>
          
       </div>
       
    )
}

export default Masthead;