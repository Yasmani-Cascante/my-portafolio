import Image from "next/image";
import CirlcesSvg from "../../public/assets/img/Circles.svg";
import Project_card from "../ui/Project-card"
// import Line from "../../public/assets/img/line-blur.png";
import Line from "../../public/assets/img/line-blur.svg";

function Projects() {
    return (
        <section className="max-w-screen border-b relative">

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
                <div className="grid grid-cols-1 md:grid-cols-2 z-10 relative">
                    <Project_card />
                    <Project_card />
                    <Project_card />
                    <Project_card />
                </div>  
            </div>
            {/* <Image 
            alt="Decorative line"
            className="absolute top-0 right-0 left-[10vw] z-0 h-full"
            src={Line}
            /> */}
            <Line className="absolute top-0 right-0 2xl:left-[5vw] z-0 h-full" />
        </section>
    )
}

export default Projects;