import Image from "next/image";
import profilPhoto from "../../public/assets/img/Profil-photo.jpg";

function About() {
    return (
        <div className="max-w-screen border-b">
            <div className="container border-x flex justify-between items-center">
                <div className="flex flex-col max-w-md ml-16">
                    <h2>Hello ;) <br /> My name is <br /> Yasmani</h2>
                    <p className="my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil. 
                        Nam consectetur, impedit reprehenderit commodi beatae earum minus assumenda animi! 
                        Doloremque assumenda repellendus quia fuga at ipsam. Iste, modi amet.</p>
                
                    <button className="group font-bold large shadow-custom flex justify-between hover:shadow-none hover:translate-x-1 transition-all">
                        <span>Download CV</span>
                        <svg className="ml-4" width="24" height="17" viewBox="0 0 24 17"  xmlns="http://www.w3.org/2000/svg">
                            <path className="hover:shadow-custom" fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5C0 8.26429 0.0903001 8.03823 0.251035 7.87155C0.41177 7.70487 0.629774 7.61124 0.857088 7.61124H21.0724L15.6779 2.01913C15.5169 1.85225 15.4265 1.6259 15.4265 1.38989C15.4265 1.15387 15.5169 0.927528 15.6779 0.760642C15.8388 0.593755 16.0571 0.5 16.2847 0.5C16.5123 0.5 16.7306 0.593755 16.8915 0.760642L23.7482 7.87075C23.828 7.95331 23.8913 8.05139 23.9346 8.15937C23.9778 8.26734 24 8.3831 24 8.5C24 8.6169 23.9778 8.73266 23.9346 8.84063C23.8913 8.94861 23.828 9.04669 23.7482 9.12924L16.8915 16.2394C16.7306 16.4062 16.5123 16.5 16.2847 16.5C16.0571 16.5 15.8388 16.4062 15.6779 16.2394C15.5169 16.0725 15.4265 15.8461 15.4265 15.6101C15.4265 15.3741 15.5169 15.1478 15.6779 14.9809L21.0724 9.38876H0.857088C0.629774 9.38876 0.41177 9.29513 0.251035 9.12845C0.0903001 8.96178 0 8.73571 0 8.5Z"/>
                        </svg>
                    </button>
                       {/* <button className="group large font-bold flex items-center w-fit mt-6 shadow-custom hover:shadow-none hover:translate-x-1 transition-all"> 
                        <span>Download CV</span>
                        <svg className="ml-4" width="24" height="17" viewBox="0 0 24 17"  xmlns="http://www.w3.org/2000/svg">
                            <path className="" fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5C0 8.26429 0.0903001 8.03823 0.251035 7.87155C0.41177 7.70487 0.629774 7.61124 0.857088 7.61124H21.0724L15.6779 2.01913C15.5169 1.85225 15.4265 1.6259 15.4265 1.38989C15.4265 1.15387 15.5169 0.927528 15.6779 0.760642C15.8388 0.593755 16.0571 0.5 16.2847 0.5C16.5123 0.5 16.7306 0.593755 16.8915 0.760642L23.7482 7.87075C23.828 7.95331 23.8913 8.05139 23.9346 8.15937C23.9778 8.26734 24 8.3831 24 8.5C24 8.6169 23.9778 8.73266 23.9346 8.84063C23.8913 8.94861 23.828 9.04669 23.7482 9.12924L16.8915 16.2394C16.7306 16.4062 16.5123 16.5 16.2847 16.5C16.0571 16.5 15.8388 16.4062 15.6779 16.2394C15.5169 16.0725 15.4265 15.8461 15.4265 15.6101C15.4265 15.3741 15.5169 15.1478 15.6779 14.9809L21.0724 9.38876H0.857088C0.629774 9.38876 0.41177 9.29513 0.251035 9.12845C0.0903001 8.96178 0 8.73571 0 8.5Z"/>
                        </svg>
                    </button> */}
                </div>
                <div className="border border-t-0 border-r-0 border-b-0 w-1/2">
                    <Image 
                        src={profilPhoto}
                        className="w-full"
                        alt="profile picture of a person"
                        />
                </div> 
            </div>
        </div>
    )
}

export default About;