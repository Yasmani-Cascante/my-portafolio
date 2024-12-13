import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Ellipse from "../../public/assets/img/Ellipse-blue.svg";
import Line from "../../public/assets/img/line-blur.svg";
import ArrowDownSvg from "../../public/assets/img/icons/arrow-down.svg";
import VerticalLinesSvg from "../../public/assets/img/vertical-lines.svg";

// import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { ArrowUpLeftIcon } from '@heroicons/react/24/solid';

// import bg_noise from "../../public/assets/img/Noise.png";




export default function ProyectOpen ({id, projects, CloseModal, layoutId}) {
    const project = projects.find(elem => elem.id === id);
        console.log('project', project.id);
    // Collecting Data
    const project_title = project.properties.Name.title[0].plain_text
    const project_description = project.properties.Description.rich_text[0].plain_text
   
    const date = project.properties.Date.date.start;
    const options = {
        year: "numeric",
        month:"long",
        day:"numeric"
    };
    const project_date = new Date(date).toLocaleDateString('en-US', options);
    const project_tags = project.properties.Tags.multi_select;
    
    const project_files = project.properties.Files.files;
    let project_files_url = [];                                                                              
        if (project_files.length > 0) {
        //  project_files_url = project_files[0].file.url;
         project_files.forEach(i => project_files_url.push(i.file.url))
        }
        
    // const { category, title } = items.find(project => project.id === id);
    console.log('projects', project_files_url);

    return (
        <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        // style={{ pointerEvents: "auto" }}
        className=" overlay "
      >
        {/* <Layer_noise /> */}
        {/* <Line 
                className="absolute top-0 right-0 2xl:left-[5vw] z-[-1] h-full"
             />
            // <Ellipse 
            //     className="absolute top-0 right-0 2xl:left-[5vw] z-[-1] h-full"
            //  /> */}

         </motion.div>
        <motion.div className="proyect-card--wrapper open layer-blue z-10"
        layoutId={id}
        whileHover={() => {console.log('asasdas');}}
        >
        <motion.div 
        className="project-card open container relative border"       
       >
        <div className="bg_noise"></div>
{/* 
        <div className="card-open__footer flex w-full mb-24">
            <button 
            className="uppercase flex justify-between w-1/3 items-center px-10 ml-auto border-none"
            onClick={() => CloseModal()} 
            >
                <ArrowDownSvg 
                    className="rotate-90 svg--white"
                    onClick={() => CloseModal()}
                    
                />
                <span className="beta">back</span>
                
            </button>
            <VerticalLinesSvg className="" />
            <VerticalLinesSvg className="" />
        </div> */}
        
        <div className="card-open__header md:px-16 mt-10">
            <div className=" flex lg:items-center flex-col lg:flex-row">
                <h2 className="font-normal"> { project_title } </h2>
                <button 
                className="lg:ml-auto py-5 px-9 border-2 border-black-bg rounded-full bg-white"
                onClick={() => CloseModal()} 
                >
                <ArrowDownSvg 
                    className="rotate-90"  
                    onClick={() => CloseModal()}    
                />
                {/* <span className="theta">back</span> */}
                
            </button>
            </div>

        </div>
           
                
        <div className="relative card-open-gallery">
        {/* <div className="bg_noise"></div> */}

            <div className="card-open__banner relative w-[100%] h-[900px]">
                <Image 
                     alt={`An image of the ${project_title} proyect`}
                     className="block h-auto"
                     src={project_files_url[0]}
                     priority
                    //  width={500}
                    // height={500}
                     fill
                     style={
                     {
                     objectFit:"contain",
                    //  minHeight: "100vh",
                     }
                     }
                 />
            </div>
             <div className="tablet-section relative h-[600px] my-36">
             <Image 
                     alt={`An image of the ${project_title} proyect`}
                     className=""
                     src={project_files_url[1]}
                     priority
                     fill
                     style={
                     {
                     objectFit:"contain",
                    //  minHeight: "100vh",
                     }
                     }
                 />
             </div>
             <div className="movile-section my-36">
             <div className="relative h-96">
                <Image 
                        alt={`An image of the ${project_title} proyect`}
                        className="block h-auto"
                        src={project_files_url[2]}
                        priority
                        fill
                        style={
                        {
                        objectFit:"contain",
                        //  minHeight: "100vh",
                        }
                        }
                    />                
             </div>
             <div className="relative h-96">
                <Image 
                        alt={`An image of the ${project_title} proyect`}
                        className="block h-auto"
                        src={project_files_url[2]}
                        priority
                        fill
                        style={
                        {
                        objectFit:"contain",
                        //  minHeight: "100vh",
                        }
                        }
                    />                
                </div>
                <div className="relative h-96">
                <Image 
                        alt={`An image of the ${project_title} proyect`}
                        className="block h-auto"
                        src={project_files_url[2]}
                        priority
                        fill
                        style={
                        {
                        objectFit:"contain",
                        //  minHeight: "100vh",
                        }
                        }
                    />                
                </div>
             </div>
            
{/* 
         {project_files_url.length > 0?
             
          project_files_url.map( url => 
        
        <div className="h-96 relative my-36">
        <Image 
        alt={`An image of the ${project_title} proyect`}
        className="block h-auto"
        src={url}
        priority
        fill
        style={
           {
          objectFit:"contain",
        //   minHeight: "100vh",
           }
       }
        />
        </div>
       
          )
  
                 : null} */}
          
        </div>
        <div className="card-open__footer flex w-full">
        <button 
        className="uppercase flex justify-between w-1/3 items-center px-10 ml-auto"
        onClick={() => CloseModal()} 
        >
                <ArrowDownSvg 
                    className="rotate-90 svg--white"
                    onClick={() => CloseModal()}
                    
                />
            <span className="beta">back</span>
                
            </button>
            <VerticalLinesSvg className="" />
        </div>
        
        </motion.div>
        </motion.div>
        </>
    )
}

// export async function getStaticProps() {
//     const notion = new Client({ auth: process.env.NOTION_API_KEY });
//     const databaseId = process.env.NOTION_DATABASE_ID;
  
//     const response = await notion.databases.query({
//       database_id: databaseId
//     });
    
//     return {
//       props: {
//         projects: response.results
//       }
//     }
//   }