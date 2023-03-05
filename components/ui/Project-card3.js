import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FollowPointer } from "./Follow-pointer";

function Project_card({project}) {
    const ref = useRef(null);

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

        
    // const { x, y } = FollowPointer(ref);
    // const [cursorVariant, setCursorVariant] = useState('hide');

    const [clipMaskRadius, setClipMaskRadius] = useState(0);
    const [maskOpacity, setMaskOpacity] = useState(0);
    const [clipMask, setClipMask] = useState({ x: 0, y: 0 });
    useEffect(() => {
        function getCoordinates(mouse) {
          const imagePosition = {
            posX: ref.current.offsetLeft,
            posY: ref.current.offsetTop,
          };
    
          const posX = mouse.clientX - imagePosition.posX;
          const posY = mouse.clientY - imagePosition.posY;
    
          setClipMask({
            x: (posX / ref.current.clientWidth) * 100,
            y: (posY / ref.current.clientHeight) * 15,
          });
        
        }

        ref.current.addEventListener("mousemove", (mouse) => {
          window.requestAnimationFrame(() => {
            getCoordinates(mouse);
          });
        });
      }, []);

    // const variants = {
    //     hide: {
    //         // scale: 0,
    //         opacity: 0,
    //     },  
    //     showImage: {
    //         // scale: 1,
    //         opacity: 1,
    //         // x:position.x,
    //         // y:position.y ,
    //     }
    // }

    return (
        <motion.div 
        className="relative project-card flex flex-col transition-all duration-300 p-8 md:p-8 md:py-16 lg:p-16 border border-t-0 border-r-0"
        ref={ref}
        onMouseEnter={() => {
            setClipMaskRadius(30);
            setMaskOpacity(1)
          }}
        onMouseLeave={() => {
            setClipMaskRadius(0);
            setMaskOpacity(0)

          }}
        >
            <div className="z-50">
            <div className="project-card__header flex lg:items-end flex-col lg:flex-row">
                <h3> { project_title } </h3>
                <span className="lg:ml-auto font-bold mt-4 text-black-light dark:text-white-dark">{ project_date }</span>
            </div>

            {/* <p className="my-12"> { project_description } </p> */}
            
            <div className="project-card__footer flex pt-4 items-center mt-auto">
                
                    { project_tags.map((tag, index) => (
                        <span key={index} className="font-bold mr-4 text-black-light dark:text-white-dark">{tag.name}</span>
                    ))}
                    
                <Link  href="#" className="group poject-card__footer-link transition-all ml-auto px-4 py-3 font-bold flex items-start w-fit">
                    <span className="uppercase whitespace-nowrap">Learn more</span>
                    <ArrowUpRightIcon
                     className="h-5 w-5 ml-2"
                    />
                </Link>
                </div>
            </div>
{/* 
            <motion.div className="project-image-container absolute w-full h-full" 
            // variants={variants}
            // animate={{ x, y, cursorVariant} }
            
            > */}
            {/* {project_files_url?
                 <Image 
                 alt={`An image of the ${project_title} proyect`}
                //  width={200}
                //  height={200}
                //  priority={true}
                layout="fill"
                objectFit="cover"
                 className=""
                 src={project_files_url}
                 />  
                 
                 : null} */}
            {project_files_url? 
            <Image 
            layout="fill"
            objectFit="cover"
            alt={`An image of the ${project_title} proyect`}
            // className="absolute top-0 right-0 left-[10vw] z-0 h-full"
            // className="absolute z-0 h-full"
            src={project_files_url}
            // left= {`${x}px`}
            // top= {`${y}px`}
            className="sepia"
            style={
            {
            clipPath: `circle(${clipMaskRadius}% at ${clipMask.x }% ${clipMask.y}%`,
            // clipPath: `polygon(0 0, ${clipMask.x}% 0, ${clipMask.x}% 100%, 0 100%)`,
            opacity: `${maskOpacity}`,
            }
            }
            />
            : null}
            {/* </motion.div>    */}
          
        </motion.div>   
    )
}

export default Project_card;