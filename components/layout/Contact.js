
import Link from "next/link";
// import LinesSvg from "../../public/assets/img/vertical-lines-small.svg";
// import CirlcesSvg from "../../public/assets/img/diagonal-lines.svg";
// import TransLinesSvg from "../../public/assets/img/trans-arrow-small.svg";
// import TransLinesSvg from "../../public/assets/img/trans-arrow-small.svg";
import DiagonalLinesSvg from "../../public/assets/img/diagonal-lines.svg";
import TypingEffect from "../ui/TypingEffect";
import ContactForm from "../form/contactForm";
import { useState } from "react";
import { motion } from "framer-motion"
import { useRef } from "react";

function Contact() {
    const [showText, setshowText] = useState(false);
    const constraintsRef = useRef(null);

    return (
        <section className="max-w-screen">
            <div className="flex container border-x flex-col-reverse md:flex-row lg:items-center">
                <h2 className="md:ml-16 py-3 md:py-0 text-center md:text-left">Contact whit me</h2>
                <div className="ml-auto overflow-hidden w-full md:w-1/2 md:border-l border-b md:border-b-0">

                <DiagonalLinesSvg 
                        className="fill-white md:w-[985px] h-full lg:w-[816px]"
                        fill="transparent"
                        />
                </div>
            </div>
            <div className="max-w-screen border-b"></div> 

            <div className="container relative overflow-hidden border-x flex justify-between min-h-[60vh] flex-col lg:flex-row">
                <div className="lg:w-1/2 overflow-hidden flex flex-col">
                    {/* <h4 className="mt-32 pl-16 uppercase whitespace-normal">Looking forward <br />
                        to hearing about your <br />
                        project</h4> */}
                        <h4 className="pt-24 md:pt-32 pl-8 md:pl-16 uppercase absolute md:w-[75%] lg:w-[35%]">
                            <TypingEffect text="Looking forward to hearing about your project." delay={75} />
                        </h4>
                  <ContactForm />
                </div>
                <div className="lg:w-1/2 border-l relative pt-28 lg:pt-0">
                    <div className="flex flex-col items-center gap-6 lg:pt-48 min-h-[85vh]">      
                    
                        <motion.div className="drag-area" ref={constraintsRef} />

                        <motion.div 
                        initial={{ scale: 0, x:0, y:0}}
                        whileInView={{ scale: 1, x:-30, y:-30 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 1, duration: 1 }}
                        drag
                        dragConstraints={constraintsRef}
                        className="draggable border rounded-full px-10 py-16 font-bold inline-block"
                        >
                            <Link key='linkedin' href='#' className="">
                            linkedin
                            </Link>
                        </motion.div>  
                        <motion.div 
                        initial={{  x:0, y:0}}
                        whileInView={{  x:80, y:150  }}
                        // viewport={{ once: true, amount: 0.3  }}
                        transition={{ delay: 1, duration: 1 }}
                        drag
                        dragConstraints={constraintsRef}
                        className="draggable border rounded-full px-12 py-20 font-bold inline-block "
                        >
                            <Link key='Instagram' href='#' className="">
                            Instagram
                            </Link>
                        </motion.div>    
                         

                        <motion.div 
                        // initial={{ x:-209, y:505}}
                        initial={{ opacity:0, x:0, y:0}}
                        whileInView={{ opacity:1, x:-80, y:350 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        transitionEnd={()=>{setshowText(!showText)}}
                        drag
                        viewport={{ once: true, amount: 0.3 }}
                        dragConstraints={constraintsRef}
                        className="draggable border rounded-full px-12 py-16 font-bold inline-block"
                        >
                            <Link key='Github' href='#' className="">
                                Github
                            </Link>
                        </motion.div>    
            
                    </div>
                </div>
                <div className="absolute flex bottom-0 bg-white-bg">
                  <DiagonalLinesSvg 
                    className="h-[60px] "
                    />
                                <DiagonalLinesSvg 
                    className="h-[60px] "
                    />
                  </div>
                  
            </div>

           

        </section>
    )
}

export default Contact;