import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { EyeIcon } from '@heroicons/react/24/solid';

function Project_card({project, selectedProyect}) {
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


    const [position, setPosition] = useState({
        x: 0,
        y: 0
        });

        const [cursorVariant, setCursorVariant] = useState('showImage');
    
        const handleMouseMove = (e) => {
            // const imagePosition = {
                const cardContainerPosition = {
                    posX: ref.current.offsetLeft,
                    posY: ref.current.offsetTop,
                  };
            console.log("cardContainerPosition", cardContainerPosition);

            //  const posX = e.pageX - cardContainerPosition.posX;
            // const posY = e.pageY - cardContainerPosition.posY;
            // console.log("cardContainerPosition", posX, posY);
        
            //   const posX = e.clientX / 2;
            //   const posY = e.clientY / 2;
              const posX = e.clientX - cardContainerPosition.posX - ref.current.offsetWidth;
              const posY = e.clientY - cardContainerPosition.posY - ref.current.offsetHeight;
  
        setPosition({
            x: posX + 500,
            y: posY / 3,
            // x: posX - 1000,
            // y: posY - 150,
            // x: (posX / ref.current.clientWidth),
            // y: (posY / ref.current.clientHeight),
            // x:  posX / 4,
            // y: posY / 4,
            // x: (e.clientX / 4.5)  ,
            // y: (e.clientY / 4.5)  ,
            // x: e.clientX / 4,
            // y: e.clientY / 6 ,
        });
        };



        useEffect(() => {
        // handleHoverEffect();
        // ref.current.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            // ref.current.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousemove", handleMouseMove);
        
        };
        }, []);

        // const handleHoverEffect = () => {
        //     const card = document.querySelector('.project-card');
        //     console.log("card", card);
        //     // card.addEventListener('mouseover', setCursorVariant('show'))
        //     // card.addEventListener('mouseout', setCursorVariant('hide'))
        // }


        // useEffect(() => {
    
        //     ref.current.addEventListener("mousemove", (mouse) => {
        //         ref.current.clientWidth
        //         ref.current.clientHeight
        //         console.log('ref.current.clientWidth', ref.current.clientWidth);
        //         console.log('ref.current.clientHeight', ref.current.clientHeight);
        //     });
        //   }, []);

    const variants = {
        hide: {
            scale: 0,
            opacity: 0,
            // clipPath: `circle(0% at 100% 100%)`,
            clipPath: `circle(0% at 50% 50%)`,
            // x:position.x - 510,
            // y:position.y - 510,
        },  
        showImage: {
            scale: 1,
            opacity: 1,
            // clipPath: `circle(50% at 100% 100%)`,
            clipPath: `circle(100% at 50% 50%)`,

            // x:position.x - 100,
            // y:position.y - 100,
            // x:position.x,
            // y:position.y,
        }
    }

    return (
        <div className="relative project-card flex flex-col transition-all duration-300 p-8 md:p-8 md:py-16 lg:p-16 border border-t-0 border-r-0"
        ref={ref}
        onMouseEnter={() => {
            console.log("entro");
            setCursorVariant('showImage')
            }}
          onMouseLeave={() => {
              console.log("salio");
            setCursorVariant('hide')

            }}
        >
            <div>
            <div className="project-card__header flex lg:items-end flex-col lg:flex-row">
                <h3
                 onClick={() => selectedProyect(project.id)}
                > { project_title } </h3>
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

            <motion.div className="project-image-container absolute h-[250px] w-[250px] p-4"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
            variants={variants}
            animate={cursorVariant}
            transition={{
                // delay: .2,
                // duration: 0.5,
                // ease: "backInOut"
                ease: "easeInOut",
                // scale: {
                //     type: "spring",
                //     // damping: 5,
                //     // stiffness: 100,
                //     restDelta: 0.001
                //   }
            }}
            >
            {project_files_url?
                 <Image 
                 alt={`An image of the ${project_title} proyect`}
                //  width={200}
                //  height={200}
                //  priority={true}
                fill
                 className="rounded-full "
                 src={project_files_url}
                 style={
                    {
                   objectFit:"cover",
                   backgroundPosition: `center top`,
                    }
                }
                 />  
                 : null}
                 {/* <motion.div
                 variants={variants}
                 animate={cursorVariant}
                 transition={{
                    duration: 1,
                    ease: "easeInOut",
                 }}
                 >
                    <EyeIcon />
                 </motion.div> */}
            </motion.div>   
          
        </div>
    )
}

export default Project_card;