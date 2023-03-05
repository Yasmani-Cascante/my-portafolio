import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Ellipse from "../../public/assets/img/Ellipse-blue.svg";
import Line from "../../public/assets/img/line-blur.svg";
// import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { ArrowUpLeftIcon } from '@heroicons/react/24/solid';

// import Layer_noise from "../../public/assets/img/Noise.png";




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
    let project_files_url = null;                                                                              
        if (project_files.length > 0) {
         project_files_url = project_files[0].file.url;
        }
    
    // const { category, title } = items.find(project => project.id === id);
    // console.log('projects', project_files_url);

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
        <motion.div className="card-content-container open layer-blue z-10"
        layoutId={id}
        >
        <motion.div 
        className="project-card open container relative border bg-white"       
       >
        <div className="layer"></div>

            <button 
            id="test"
            className="project-card-btn mb-10 border-none flex items-end uppercase text-4xl transition font-bold"
            onClick={() => CloseModal()}
            > 
                <ArrowUpLeftIcon
                className="h-8 w-8 mr-2"
            onClick={() => CloseModal()}
                />
                <span className="">
                    Back
                </span>
            </button>

            <div className="project-card__header flex lg:items-end flex-col lg:flex-row">
                <h2 className="font-normal"> { project_title } </h2>
                <span className="lg:ml-auto font-bold mt-4 text-black-light dark:text-white-dark">{ project_date }</span>
            </div>

            <p className="my-10 w-[70%] mb-24"> { project_description } </p>
                
        
        <div className="relative w-full project-image-open">
         {project_files_url?
                 <Image 
                 alt={`An image of the ${project_title} proyect`}
                 className="block h-auto"
                 src={project_files_url}
                 priority
                 fill
                 style={
                    {
                   objectFit:"cover",
                   minHeight: "100vh",
                    }
                }
                 />  
                 : null}
          
        </div>
        <button 
        className="text-sm font-bold shadow-custom hover:shadow-none hover:translate-x-1 transition"
        onClick={() => CloseModal()} 
        >
               back 
            </button>
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