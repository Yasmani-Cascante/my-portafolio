
import DiagonalLinesSvg from "../../public/assets/img/diagonal-lines.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Process_data from "../../work_process_data.json";

function WorkProcess() {
    const [pointer, setPointer] = useState('hide');
    const variants = {
        hide: {
            opacity: 0,
            // clipPath: `circle(0% at 50% 50%)`,
            clipPath: `circle(10% at 0% 50%)`,
            // clipPath: `polygon(55% 50%, 50% 50%, 50% 50%, 50% 50%)`
        },

        hover: {
            opacity: 1,
            // clipPath: `circle(100% at 50% 50%)`,
            clipPath: `circle(100% at 50% 50%)`,
        
            // clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)`
            
        },

    }

    return (
        <section className="max-w-screen border-b">
            <div className="flex container border-x items-center flex-col-reverse md:flex-row">
                <h2 className="md:ml-16 py-3 md:py-0">Work Process</h2>
                <div className="ml-auto overflow-hidden w-full md:w-1/2 md:border-l border-b md:border-b-0">
                    {/* <Image 
                    src={HorizontalLinesSvg}
                    className="w-full"
                    alt="illustration of lines"
                    /> */}
                    <DiagonalLinesSvg 
                    className="lg:h-[119px]"
                    />
                </div>
            </div>
            <div className="max-w-screen border-b"></div> 
            
            <div className="container border-x ">
                <ul className="">
                   <motion.li 
                    whileHover={() => setPointer('hover')}
                    onHoverEnd={() => setPointer('hide')}
                   
                   className="relative proccess-card border-b group transition-all duration-300"
                   >
                        <motion.div 
                        className="eclipse-path bg-secondary w-full h-full absolute z-0"
                        variants = {variants}
                        animate={pointer}
                        transition={{
                            duration: .6,
                        }}
                        />
                        <div className="flex md:items-end w-11/12 p-8 lg:p-16 flex-col md:flex-row ">
                            <span className="text-process_index font-bold mr-6 leading-[4.8rem] text-7xl text-[6.953rem] mb-8 md:mb-0 text-black dark:text-white-dark group-hover:text-white">01.</span>
                            <div className="flex flex-col gap-y-6 md:gap-y-8 group-hover:text-white">
                                <h3 className="whitespace-normal group-hover:text-white process-card__title uppercase">BRIEF AND ANALYTICS</h3>
                                <p className="group-hover:font-normal">We conduct an INTERVIEW, AND THEN I LEARN ALL THE DETAILS OF A PROJECT AND THE SPECIFIC DETAILS OF A BUSINESS. I RESEARCH COMPETITORS, COLLECT REFERENCES, FORM IDEAS FOR A PROJECT, AND DEVELOP A STRUCTURE FOR A FUTURE SITE.</p>
                            </div>
                        </div> 
                   </motion.li>
                   <motion.li 
                    whileHover={() => setPointer('hover')}
                    onHoverEnd={() => setPointer('hide')}
                   
                   className="relative proccess-card border-b group transition-all duration-300"
                   >
                        <motion.div 
                        className="eclipse-path bg-secondary w-full h-full absolute z-0"
                        variants = {variants}
                        animate={pointer}
                        transition={{
                            duration: .6,
                        }}
                        />
                        <div className="flex md:items-end w-11/12 p-8 lg:p-16 flex-col md:flex-row ">
                            <span className="text-process_index font-bold mr-6 leading-[4.8rem] text-7xl md:text-[6.953rem] mb-8 md:mb-0 text-black dark:text-white-dark group-hover:text-white">02.</span>
                            <div className="flex flex-col gap-y-8 group-hover:text-white">
                                <h3 className="whitespace-normal group-hover:text-white process-card__title uppercase">DESIGN and PROTOTYPE</h3>
                                <p className="group-hover:font-normal">CREATE A WEBSITE PROTOTYPE TAKING INTO ACCOUNT THE USER EXPERIENCE (UX). AFTER APPROVAL, I DEVELOP TWO VISUAL DESIGN CONCEPTS (UI) FOR 2 BLOCKS (THE MAIN SCREEN AND THE SUBSEQUENT BLOCK), THEN I START FULL-FLEDGED DEVELOPMENT BASED ON THE SELECTED CONCEPT.</p>
                            </div>
                        </div> 
                   </motion.li>
                   <motion.li 
                    whileHover={() => setPointer('hover')}
                    onHoverEnd={() => setPointer('hide')}
                   
                   className="relative proccess-card border-b group transition-all duration-300"
                   >
                        <motion.div 
                        className="eclipse-path bg-secondary w-full h-full absolute z-0"
                        variants = {variants}
                        animate={pointer}
                        transition={{
                            duration: .6,
                        }}
                        />
                        <div className="flex md:items-end w-11/12 p-8 lg:p-16 flex-col md:flex-row">
                        <span className="text-process_index font-bold mr-6 leading-[4.8rem] text-7xl md:text-[6.953rem] mb-8 md:mb-0 text-black dark:text-white-dark group-hover:text-white">03.</span>
                        <div className="flex flex-col gap-y-8 group-hover:text-white">
                            <h3 className="whitespace-normal group-hover:text-white process-card__title ">LAYOUT AND LAUNCH</h3>
                            <p className="group-hover:font-normal">CREATE A WEBSITE PROTOTYPE TAKING INTO ACCOUNT THE USER EXPERIENCE (UX). AFTER APPROVAL, I DEVELOP TWO VISUAL DESIGN CONCEPTS (UI) FOR 2 BLOCKS (THE MAIN SCREEN AND THE SUBSEQUENT BLOCK), THEN I START FULL-FLEDGED DEVELOPMENT BASED ON THE SELECTED CONCEPT.</p>
                        </div>
                    </div> 
                   </motion.li>
                
                </ul>  
            </div>
        </section>
    )
}

export default WorkProcess;