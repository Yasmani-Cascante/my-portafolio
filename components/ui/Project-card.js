import Image from "next/image";
import Link from "next/link";

function Project_card({project}) {

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

    return (
        <div className="project-card transition-all duration-300 p-8 md:p-8 md:py-16 lg:p-16 border border-t-0 border-r-0">
            <div className="project-card__header flex lg:items-end flex-col lg:flex-row">
                <h3> { project_title } </h3>
                <span className="lg:ml-auto font-bold mt-4">{ project_date }</span>
            </div>

            <p className="my-12"> { project_description } </p>
            
            <div className="project-card__footer flex pt-4 items-center">
                
                    { project_tags.map(tag => (
                        <span className="font-bold mr-4">{tag.name}</span>
                    ))}
                    
                <Link  href="#" className="group poject-card__footer-link transition-all ml-auto px-4 py-3 font-bold flex items-center w-fit hover:bg-black hover:text-white dark:hover:bg-blue">
                    <span className="uppercase whitespace-nowrap">Learn more</span>
                    <svg className="ml-4" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path  className="group-hover:fill-white transition-all" fill-rule="evenodd" clip-rule="evenodd" d="M0.649653 11.9745C0.542118 11.8655 0.480747 11.7197 0.47904 11.5693C0.477332 11.4189 0.535429 11.2762 0.64055 11.1725L9.98903 1.95011L4.9432 1.82508C4.79264 1.82132 4.64757 1.7579 4.5399 1.64875C4.43223 1.53961 4.37078 1.39369 4.36907 1.24309C4.36736 1.0925 4.42553 0.949559 4.53078 0.845726C4.63604 0.741892 4.77975 0.685669 4.93031 0.689424L11.3448 0.849393C11.4194 0.851159 11.4935 0.867624 11.5627 0.897845C11.6319 0.928067 11.695 0.97145 11.7484 1.02551C11.8017 1.07957 11.8442 1.14325 11.8735 1.21289C11.9028 1.28254 11.9182 1.35678 11.919 1.43138L11.9918 7.84749C11.9935 7.99809 11.9353 8.14103 11.8301 8.24486C11.7248 8.34869 11.5811 8.40492 11.4306 8.40116C11.28 8.39741 11.1349 8.33398 11.0273 8.22484C10.9196 8.1157 10.8581 7.96978 10.8564 7.81918L10.7999 2.77212L1.45147 11.9945C1.34635 12.0982 1.20282 12.1543 1.05245 12.1506C0.902077 12.1468 0.757187 12.0835 0.649653 11.9745Z" fill="black"/>
                    </svg>
                </Link>
            </div>
            {/* <div className="project-image-container absolute h-[200px] w-[200px] ">
            {project_files_url?
                 <Image 
                 alt="Decorative line"
                 width={500}
                 height={500}
                 priority={true}
                 src={project_files_url}
                 />  
                 : null}
            </div>    */}
                
            {/* <Image 
            alt="Decorative line"
            className="absolute top-0 right-0 left-[10vw] z-0 h-full"
            src={project_files_url}
            /> */}
          
        </div>
    )
}

export default Project_card;