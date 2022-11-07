import Image from "next/image";
import HorizontalLinesSvg from "../../public/assets/img/horizontal-lines2.svg";


function WorkProcess() {
    return (
        <div className="max-w-screen border-b">
            <div className="flex container border-x items-center">
                <h2 className="ml-16">Work Process</h2>
                <div className="ml-auto w-1/2 border-l">
                    <Image 
                    src={HorizontalLinesSvg}
                    className="w-full"
                    alt="illustration of lines"
                    />
                </div>
            </div>
            <div className="max-w-screen border-b"></div> 
            
            <div className="container border-x ">
                <ul className="">
                   <li className="proccess-card border-b hover:bg-yellow transition-all duration-300">
                    <div className="flex items-end w-11/12 p-16">
                        <span className="text-process_index font-bold mr-6 leading-[4.8rem]">01.</span>
                        <div className="flex flex-col gap-y-8">
                            <h3>BRIEF AND ANALYTICS</h3>
                            <p>We conduct an INTERVIEW, AND THEN I LEARN ALL THE DETAILS OF A PROJECT AND THE SPECIFIC DETAILS OF A BUSINESS. I RESEARCH COMPETITORS, COLLECT REFERENCES, FORM IDEAS FOR A PROJECT, AND DEVELOP A STRUCTURE FOR A FUTURE SITE.</p>
                        </div>
                    </div> 
                   </li>
                   <li className="proccess-card border-b hover:bg-yellow transition-all duration-300">
                    <div className="flex items-end w-11/12 p-16">
                        <span className="text-process_index font-bold mr-6 leading-[4.8rem]">02.</span>
                        <div className="flex flex-col gap-y-8">
                            <h3>DESIGN and PROTOTYPE</h3>
                            <p>CREATE A WEBSITE PROTOTYPE TAKING INTO ACCOUNT THE USER EXPERIENCE (UX). AFTER APPROVAL, I DEVELOP TWO VISUAL DESIGN CONCEPTS (UI) FOR 2 BLOCKS (THE MAIN SCREEN AND THE SUBSEQUENT BLOCK), THEN I START FULL-FLEDGED DEVELOPMENT BASED ON THE SELECTED CONCEPT.</p>
                        </div>
                    </div> 
                   </li>
                   <li className="proccess-card hover:bg-yellow transition-all duration-300">
                    <div className="flex items-end w-11/12 p-16">
                        <span className="text-process_index font-bold mr-6 leading-[4.8rem]">03.</span>
                        <div className="flex flex-col gap-y-8">
                            <h3>LAYOUT AND LAUNCH</h3>
                            <p>CREATE A WEBSITE PROTOTYPE TAKING INTO ACCOUNT THE USER EXPERIENCE (UX). AFTER APPROVAL, I DEVELOP TWO VISUAL DESIGN CONCEPTS (UI) FOR 2 BLOCKS (THE MAIN SCREEN AND THE SUBSEQUENT BLOCK), THEN I START FULL-FLEDGED DEVELOPMENT BASED ON THE SELECTED CONCEPT.</p>
                        </div>
                    </div> 
                   </li>
                </ul>  
            </div>
        </div>
    )
}

export default WorkProcess;