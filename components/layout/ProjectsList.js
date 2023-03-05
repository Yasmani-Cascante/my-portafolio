import Image from "next/image";
import CirlcesSvg from "../../public/assets/img/Circles.svg";
// import Project_card from "../ui/Project-card4"
import Project_card from "../ui/Project-card2"
// import Line from "../../public/assets/img/line-blur.png";
import Line from "../../public/assets/img/line-blur.svg";

import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import ProyectOpen from "../ui/ProyectOpen"


function Store({ match }) {
    let { id } = match.params;
    console.log(".... ", id);
  
    // return (
    //   <>
    //     <List selectedId={id} />
    //     <AnimatePresence>
    //       {id && imageHasLoaded && <Item id={id} key="item" />}
    //     </AnimatePresence>
    //   </>
    // );
  }

  
function ProjectsList({ projects }) {

    const [selectedId, setSelectedId] = useState(null)
    // let { id } = match.params;
    // Tomando el id del proyecto seleccionado 
    const selectedProyect = (id) => {
       console.log('here', id);
       setSelectedId(id);
    //    setTimeout(() => {
    //     console.log(".... ", selectedId);
        
    //    }, 1000);

      }
      const CloseModalWindow = () => {
        console.log("beforeModalWindow", selectedId);

        setSelectedId(null)
        console.log("CloseModalWindow", selectedId);
      }

    return (
        <section className="max-w-screen border-b relative">
            <div className="flex container border-x items-center flex-col-reverse md:flex-row">
                <h2 className="md:ml-16 py-3 md:py-0">Recent work</h2>
                <div className="circle-img-wrapper box-border overflow-hidden ml-auto w-full md:w-1/2 md:border-l border-b md:border-b-0">
                        <CirlcesSvg 
                        className="circles-svg stroke-black dark:stroke-white"
                        fill="transparent"
                        />
                </div>
            </div>
            <div className="max-w-screen border-b"></div>    
            <div className="container border border-t-0 border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-2 z-10 relative"> 
                    <motion.div 
                    className="z-10 absolute top-0 left-[50%] right-0 h-full w-1 border border-r-0 border-t-0 border-b-0"
                    >  
                    </motion.div>
                    <motion.div 
                    className="z-10 absolute top-[50%] left-0 right-0  w-full h-0 border border-r-0 border-t-0 border-b-1"
                    ></motion.div>

                    <AnimateSharedLayout type="crossfade">
                        {projects.map( (project) => (
                            <Project_card 
                            key={project.id} 
                            project={project}
                            // layoutId={selectedProyect}
                            selectedProyect={selectedProyect}
                            />
                        ))}
                       <AnimatePresence>
                       {selectedId && 
                       (
                         <ProyectOpen 
                         id={selectedId} 
                        //  layoutId={selectedId}
                         projects={projects} 
                         CloseModal={()=> CloseModalWindow()}
                         />
                        )}
                        </AnimatePresence>
                    </AnimateSharedLayout>

                    {/* <List selectedId={id} />
                    <AnimatePresence>
                        {id && imageHasLoaded && <Item id={id} key="item" />}
                    </AnimatePresence> */}

                </div>  
            </div>
            <Line className="absolute top-0 right-0 2xl:left-[5vw] z-[-1] h-full opacity-70" />  
        </section>
    )
}

export default ProjectsList;





