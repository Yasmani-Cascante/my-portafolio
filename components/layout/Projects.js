import Image from "next/image";
import CirlcesSvg from "../../public/assets/img/Circles.svg";
import Project_card from "../ui/Project-card"

function Projects() {
    return (
        <section className="max-w-screen border-b">

            <div className="flex container border-x items-center flex-col-reverse md:flex-row">
                <h2 className="md:ml-16 py-3 md:py-0">Projects</h2>
                <div className="circle-img-wrapper box-border overflow-hidden ml-auto w-full md:w-1/2 md:border-l border-b md:border-b-0">
                        <CirlcesSvg 
                        className="circles-svg stroke-black dark:stroke-white"
                        fill="transparent"
                        />
                </div>
            </div>
            <div className="max-w-screen border-b"></div>    
            <div className="container border-r">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Project_card />
                    <Project_card />
                    <Project_card />
                    <Project_card />
                </div>  
            </div>
        </section>
    )
}

export default Projects;