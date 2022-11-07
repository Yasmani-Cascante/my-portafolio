import Image from "next/image";
import profilPhoto from "../../public/assets/img/Profil-photo.jpg";
import CirlcesSvg from "../../public/assets/img/Circles.svg";
import Project_card from "../ui/Project-card"

function Projects() {
    return (
        <div className="max-w-screen border-b">

            <div className="flex container border-x items-center">
                <h2 className="ml-16">Projects</h2>
                <div className="circle-img-wrapper ml-auto w-1/2 border-l">
                    <Image 
                        src={CirlcesSvg}
                        className="w-full"
                        
                        alt="illustration of circles"
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
        </div>
    )
}

export default Projects;