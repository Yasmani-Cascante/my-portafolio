
import DiagonalLinesSvg from "../../public/assets/img/diagonal-lines.svg";
import LinesSvg from "../../public/assets/img/vertical-lines-small.svg";

import { motion } from "framer-motion";
import { useState } from "react";
import Process_data from "../../work_process_data.json";
import WorkProcessCard from "../ui/WorkProcessCard.js"
function WorkProcess() {
    // const [pointer, setPointer] = useState('hide');
    // const variants = {
    //     hide: {
    //         opacity: 0,
    //         // clipPath: `circle(0% at 50% 50%)`,
    //         clipPath: `circle(10% at 0% 50%)`,
    //         // clipPath: `polygon(55% 50%, 50% 50%, 50% 50%, 50% 50%)`
    //     },

    //     hover: {
    //         opacity: 1,
    //         // clipPath: `circle(100% at 50% 50%)`,
    //         clipPath: `circle(100% at 50% 50%)`,
        
    //         // clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)`
            
    //     },

    // }

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

                    <LinesSvg 
                    className="fill-white md:w-[985px] h-full lg:w-[816px]"
                    />
                    {/* <DiagonalLinesSvg 
                    className="lg:h-[119px]"
                    /> */}
                </div>
            </div>
            <div className="max-w-screen border-b"></div> 
            
            <div className="container border-x ">
                <ul className="work_process-list">

                    {Process_data.map( (process, index) => (
                        // <motion.li 
                        // whileHover={() => setPointer('hover')}
                        // onHoverEnd={() => setPointer('hide')}  
                        // className="relative proccess-card border-b group transition-all duration-300"
                        // >
                        //     <motion.div 
                        //     className="eclipse-path bg-secondary w-full h-full absolute z-0"
                        //     variants = {variants}
                        //     animate={pointer}
                        //     transition={{
                        //         duration: .6,
                        //     }}
                        //     />
                        //     <div className="flex md:items-end w-11/12 p-8 lg:p-16 flex-col md:flex-row ">
                        //         <span className="text-process_index font-bold mr-6 leading-[4.8rem] text-7xl text-[6.953rem] mb-8 md:mb-0 text-black dark:text-white-dark group-hover:text-white">01.</span>
                        //         <div className="flex flex-col gap-y-6 md:gap-y-8 group-hover:text-white">
                        //             <h3 className="whitespace-normal group-hover:text-white process-card__title uppercase">{process.title}</h3>
                        //             <p className="group-hover:font-normal">{process.text}</p>
                        //         </div>
                        //     </div> 
                        // </motion.li>  
                        <li  key={index}>
                            <WorkProcessCard data={process} />
                        </li>  
                       
                    ))} 

                </ul>  
            </div>
        </section>
    )
}

export default WorkProcess;