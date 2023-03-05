import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { motion } from "framer-motion";

function Project_card({project, selectedProyect}) {

// const [selectedProyect, setSelectedProyect] = useState(null);
    // Collecting Data
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

    const [switcher, setImageSwitcher] = useState('hide');
    const [buttonSwitcher, setButtonSwitcher] = useState('hide');
console.log('switcher', switcher);

    const imageVariants = {
        hide: {
            opacity: 0,
            scale: 1,
            // clipPath: `circle(0% at 50% 50%)`,
            clipPath: `circle(0% at 100% 100%)`,
            filter: "grayscale(0%)",
            // clipPath: `polygon(55% 50%, 50% 50%, 50% 50%, 50% 50%)`
        },
        hover: {
            opacity: 1,
            scale: 1.1,
            clipPath: `circle(100% at 50% 50%)`,
            filter: "grayscale(100%)",
            // backgroundColor: 'cornflowerblue'
            // clipPath: `circle(100% at 50% 50%)`,
            // clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)`
            
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
        <motion.div className="card-content-container relative overflow-hidden"
        layoutId={project.id}
        >
        
        <motion.div
        onClick={() => selectedProyect(project.id)}
        // className="project-card h-full flex flex-col transition-all duration-300 p-8 md:p-8 md:py-16"
        className="project-card flex flex-col transition-all duration-300 m-12 border-0 group "
        // whileHover={{
        //     scale: 1.05,
        //     transition: { duration: 0.2, ease: 'linear' },
        //   }}
        whileHover={() => setImageSwitcher('hover')}
        onHoverEnd={() => setImageSwitcher('hide')}
        >
            <div className="project-card__header flex lg:items-end flex-col lg:flex-row z-10">
                <h3 
                className=""
                > { project_title } </h3>
                <span className="lg:ml-auto font-bold mt-4 text-black-light dark:text-white-dark">{ project_date }</span>
            </div>
    
            <p className="my-12 max-w-[70%] truncate"> { project_description } </p>
                   
            <div className="project-card__footer flex pt-4 items-center mt-10 z-10">

                    { project_tags.map((tag, index) => (
                        <span key={index} className="font-bold mr-4 text-black-light dark:text-white-dark">{tag.name}</span>
                    ))}
                    
               
                {/* <motion.button  
                className="group poject-card__footer-link transition-all ml-auto px-4 py-3 font-bold flex items-start w-fit "
                // variants={imageVariants}
                // animate={switcher}
                >    
                    <span className="uppercase whitespace-nowrap">Click! more</span>
                    <ArrowUpRightIcon
                     className="h-5 w-5 ml-2"
                    />
                </motion.button> */}
                {/* <Link  href="#" className="group poject-card__footer-link transition-all ml-auto px-4 py-3 font-bold flex items-start w-fit group-hover:bg-white-bg group-hover:shadow-custom delay-700 duration-300">
                    <span className="uppercase whitespace-nowrap">more</span>
                    <ArrowUpRightIcon
                     className="h-5 w-5 ml-2"
                    />
                </Link> */}
            </div>
            {/* <div className="project-image-container absolute h-[200px] w-[200px] "> */}  
                
            {/* <Image 
            alt="Decorative line"
            className="absolute top-0 right-0 left-[10vw] z-0 h-full"
            src={project_files_url}
            /> */}
          
        </motion.div>
        {/* <motion.div className="absolute left-2/4 top-0 right-0 h-full w-full z-[-1]" */}
        <motion.div className="absolute left-0 top-0 right-0 h-full w-full z-[-1]"
        variants={imageVariants}
        animate={switcher}
        transition={{
            duration: 0.8,
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
           {project_files_url?
                 <Image 
                 alt={`An image of the ${project_title} proyect`}
                 fill
                 className="opacity-80"
                 priority
                 src={project_files_url}
               
                 style={
                    {
                   objectFit:"cover",
                   minHeight: "100%",
                //    filter: "grayscale(100%)"
                    }
                }
                 />  
                 : null}
        </motion.div> 
    </motion.div>
    )
}

export default Project_card;