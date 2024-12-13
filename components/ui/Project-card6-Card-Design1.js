import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Project_card({project, selectedProyect, hoverDispatch}) {

// const [selectedProyect, setSelectedProyect] = useState(null);
    // Collecting Data
    const project_thumbnail_index = project.properties.Thumbnail.rich_text[0].plain_text // For show Thumbnail in Cursor Component
    const project_title = project.properties.Name.title[0].plain_text
    const project_description = project.properties.Description.rich_text[0].plain_text
    const project_tags = project.properties.Tags.multi_select;
    const date = project.properties.Date.date.start;
    const options = {
        year: "numeric",
        month:"long",
        day:"numeric"
    };
    const project_date = new Date(date).toLocaleDateString('en-US', options);
    const project_files = project.properties.Files.files;
    let project_files_url = null;                                                                              
        if (project_files.length > 0) {
         project_files_url = project_files[0].file.url;
        }

    const location = project.properties.Place.rich_text[0].plain_text;

    function getProjectCity (text) {
        let text_size = text.length;
        let position = text.search(",");
        let City = text.slice(0, position);
        let Country = text.slice(position + 1, text_size);
        const response = [] ;
          return  <p class="ml-auto mt-auto  group-hover:text-black-lighten text-right text-sm ">{City},<br/>{Country}</p>
        } 

    const [switcher, setImageSwitcher] = useState('hide');
    const [buttonSwitcher, setButtonSwitcher] = useState('hide');
// console.log('switcher', switcher);



const getCity = (tag , index) => {
    // console.log("estamosn aqui ", tag);
    if (tag.name == "Dev") {
        return (
            <span key={index} className="group-hover:shadow-none text-sm mr-4 border rounded-3xl px-6 py-1 text-dark dark:text-white-dark shadow-none transition duration-150">{tag.name}</span>    
            // <span key={index} className="group-hover:shadow-none text-sm mr-4 border rounded-full px-7 py-8 text-dark dark:text-white-dark shadow-none transition duration-150">{tag.name}</span>    
                )
    } else {
        return (
            <span key={index} className="group-hover:shadow-none text-sm mr-2 border border  rounded-3xl px-6 py-1 text-dark dark:text-white-dark shadow-none transition duration-300">{tag.name}</span>
            // <span key={index} className="group-hover:shadow-none text-sm mr-4 border border-black bg-black-bg rounded-full px-4 py-8 text-white dark:text-white-dark shadow-none transition duration-300">{tag.name}</span>
                )
    }

}
  
    const bgVariants = {
        hide: {
            opacity: 0,
            // scale: 0.97,
            // clipPath: `circle(0% at 50% 50%)`,
            clipPath: `circle(50% at 50% 50%)`,
            // filter: "grayscale(0%)",
            // clipPath: `polygon(55% 50%, 50% 50%, 50% 50%, 50% 50%)`
            // clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)`,
            // backgroundColor: '#004DBA',
            // backgroundColor: 'rgba(0,0,0, 0.85)',

        },
        hover: {
            opacity: 1,
            // scale: 1.1,
            // filter: "grayscale(100%)",
            // backgroundColor: 'cornflowerblue',
            // backgroundColor: '#222222',
            // backgroundColor: 'rgba(0,0,0, 0.1)',
            clipPath: `circle(100% at 50% 50%)`,
            
            // clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)`
            
        },
    }

    const buttonVariants = {
        hide: {
            opacity: 0,
            scale: 1,
            // clipPath: `circle(0% at 50% 50%)`,
            clipPath: `circle(0% at 100% 100%)`,
            filter: "grayscale(0%)",
            // clipPath: `polygon(55% 50%, 50% 50%, 50% 50%, 50% 50%)`
        },

        seeMore: {
            opacity: 1,
            // scale: 1.1,
            clipPath: `circle(100% at 50% 50%)`,
            filter: "grayscale(0%)",
            // backgroundColor: 'cornflowerblue'
            // clipPath: `circle(100% at 50% 50%)`,
            // clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)`
            
        }  
    }

    return (
        <motion.div className="proyect-card--wrapper relative overflow-hidden "
        layoutId={project.id}
        // onMouseEnter={() => {
        //     hoverDispatch(project_thumbnail_index)
        //     }}
        //     onMouseLeave={() => {
        //         hoverDispatch('')
        //       }}
        whileHover={() => {
        hoverDispatch(project_thumbnail_index);
        setImageSwitcher('hover')
        }}
        onHoverEnd={() => {
            hoverDispatch('');
            setImageSwitcher('hide')
            }}
        // whileHover={() => setImageSwitcher('hover')}
        // onHoverEnd={() => setImageSwitcher('hide')} 
        >
        
        <motion.div
        onClick={() => selectedProyect(project.id)}
        // className="project-card h-full flex flex-col transition-all duration-300 p-8 md:p-8 md:py-16"
        className="project-card flex flex-col px-16 py-20  group test-design h-full"
        // whileHover={{
        //     scale: 1.05,
        //     transition: { duration: 0.2, ease: 'linear' },
        //   }}
        whileHover={() => setImageSwitcher('hover')}
        onHoverEnd={() => setImageSwitcher('hide')}
        >
            <div className="project-card__body">
                <div className="project-card__header flex flex-row items-end z-10">
                    <h3 className="text-black/85 uppercase text-2xl"> { project_title } </h3>
                    <div className="project-card__tags ml-auto z-10">
                        { project_tags.map((tag, index) => (
                            <span key={index} className="text-sm mr-2 border rounded-3xl px-6 py-1 text-black/75 dark:text-white-dark">{tag.name}</span>
                        ))}
                    </div>
                    {/* <span className="ml-5 text-black-light dark:text-white-dark">{ project_date }</span> */}
                </div>
                <p className="mt-10 max-w-[60%] text-black/60 group-hover:text-black-lighten"> { project_description } </p>
            
            <p></p>
            
            </div>
            
                   
            {/* <div className="project-card__footer flex pt-4 items-end mt-10 z-10"> */}

            {/* <ArrowUpRightIcon
                     className="project-card-btn absolute bottom-8 right-12 opacity-85 h-20 w-20 rounded-full ml-auto text-black/50"
                    /> */}
                        {/* { getProjectCity(location).map((elem)=>{
                            <span key={elem} className="text-sm mr-2 border rounded-3xl px-6 py-1 text-black/75 dark:text-white-dark">K{elem}</span>
                        })}    */}

                    {location?  
                        getProjectCity(location)
                    :null}
                            {/* <motion.button  
                className="group poject-card__footer-link transition-all ml-auto px-4 py-3 font-bold flex items-start w-fit "
                // variants={bgVariants}
                // animate={switcher}
                >    
                    <span className="uppercase whitespace-nowrap">Click! more</span>
                    <ArrowUpRightIcon
                     className="h-5 w-5 ml-2"
                    />
                </motion.button> */}
            {/* <div className="project-image-container absolute h-[200px] w-[200px] "> */}  
                
            {/* <Image 
            alt="Decorative line"
            className="absolute top-0 right-0 left-[10vw] z-0 h-full"
            src={project_files_url}
            /> */}
          
        </motion.div>
        
        {/* Card HoverEffect & image Reveal Elements*/}

        {/* <motion.div className="absolute left-2/4 top-0 right-0 h-full w-full z-[-1]" */}
        <motion.div 
        className="absolute bg-black-lighten left-0 top-0 right-0 h-full w-full z-[-1]"
        variants={bgVariants}
        animate={switcher}
        transition={{
            duration: 0.35,
            // ease: "backInOut"
            ease: "easeInOut",
            // scale: {
            //     type: "spring",
            //     damping: 5,
            //     stiffness: 100,
            //     restDelta: 0.001
            //   }
        }}
        > 
        </motion.div> 
    </motion.div>
    )
}

export default Project_card;