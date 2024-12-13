import Image from "next/image";
import DiagonalLinesSvg from "../../public/assets/img/diagonal-lines.svg";
import VerticalLinesSvg from "../../public/assets/img/vertical-lines.svg";
import ArrowDownSvg from "../../public/assets/img/icons/arrow-down.svg";
// import Ellipse from "../../public/assets/img/103.png";
// import Ellipse from "../../public/assets/img/78.png";
import Ellipse from "../../public/assets/img/Ellipse.svg";
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

                <div className="ml-5 sm:ml-20 lg:ml-28 pt-16 md:pt-24 max-w-[69rem]">
                {/* <h1 className=' text-[4rem] md:text-8xl lg:text-9xl font-bold inline md:whitespace-nowrap'>Creative <br />  Web Designer <br /> & Developer</h1> */}
                {/* <h1 className='text-[4.12rem] sm:text-8xl lg:text-9xl inline relative masthead-title'>Creative Web Designer <span className="masthead-title__span">&</span> <span>Developer</span> </h1> */}
                <h1 className='text-[4.12rem] inline relative masthead-title'>Creative Web  
                <span className="masthead-title__span ml-7 text-9xl">&</span><span className="block mt-10">Designer</span> <span>Developer</span> </h1>
                <p className="max-w-xs uppercase font-bold sm:ml-10 md:ml-24 mt-16 text-sm">MY WEBSITES EMBODY A MINIMALISTIC AND CREATIVE DESIGN, SOLVE BUSINESS ISSUES, 
                AND ARE USER-FRIENDLY.</p>
                </div>
               

                {/* <div className="flex mt-20 md:mt-10 lg:mt-40 absolute w-[90vw] -ml-[16vw] items-center">
                    <VerticalLinesSvg 
                     />
                    <a href="#"> 
                        <ArrowDownSvg 
                        className="ml-10"
                        />
                    </a>    
                </div> */}
                     {/* <a href="#" className="absolute bottom-80 left-[30vw]"> 
                        <ArrowDownSvg 
                        className="ml-10"
                        />
                    </a>     */}
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
                        className="draggable border rounded-full px-14 py-24 font-bold inline-block bottom-0"
                        >
                            <Link key='Github' href='#' className="uppercase">
                            Contact me
                            </Link>
                        </motion.div>
                
                    <DiagonalLinesSvg 
                     className="absolute right-0 bottom-0 w-1/2 hidden lg:block"
                    />
                    
                     <div className="w-full absolute top-0 -bottom-24 -right-[30vw] -z-10">
                     {/*   <Image 
                            alt="Decorative line"
                            className="h-full w-full"
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
                         {/* <Ellipse 
                            className=" border"
                            
                        /> */}
                    </div>
                  
            </div>
          
       </div>
       
    )
}

export default Masthead;