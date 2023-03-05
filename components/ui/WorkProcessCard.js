import { useState } from "react";
import { motion } from "framer-motion";

export default function WorkProcessCard(data) {
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
       <motion.div 
        whileHover={() => setPointer('hover')}
        onHoverEnd={() => setPointer('hide')}  
        className="relative proccess-card border-b group transition-all duration-300"
        >
            <motion.div 
            className="eclipse-path bg-black-lighten w-full h-full absolute z-0"
            variants = {variants}
            animate={pointer}
            transition={{
                duration: .6,
            }}
            />
            <div className="flex md:items-end w-11/12 p-8 lg:p-16 flex-col md:flex-row ">
                <span className="text-process_index font-bold mr-6 leading-[4.8rem] text-7xl text-[6.953rem] mb-8 md:mb-0 text-black dark:text-white-dark group-hover:text-black-lighten">0{data.data.id}.</span>
                <div className="flex flex-col gap-y-6 md:gap-y-8">
                    <h3 className="whitespace-normal process-card__title uppercase group-hover:text-black-lighten">{data.data.title}</h3>
                    <p className="group-hover:font-bold">{data.data.text}</p>
                </div>
            </div> 
        </motion.div>  
    )
}

// export default WorkProcessCard;