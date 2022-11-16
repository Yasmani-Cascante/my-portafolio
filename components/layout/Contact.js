import Image from "next/image";
import Link from "next/link";
// import LinesSvg from "../../public/assets/img/vertical-lines-small.svg";
import LinesSvg from "../../public/assets/img/vertical-lines-small.svg";
// import TransLinesSvg from "../../public/assets/img/trans-arrow-small.svg";
// import TransLinesSvg from "../../public/assets/img/trans-arrow-small.svg";
import DiagonalLinesSvg from "../../public/assets/img/diagonal-lines.svg";


function Contact() {
    return (
        <section className="max-w-screen">
            <div className="flex container border-x flex-col-reverse md:flex-row lg:items-center">
                <h2 className="md:ml-16 py-3 md:py-0 text-center md:text-left">Contact whit me</h2>
                <div className="ml-auto overflow-hidden w-full md:w-1/2 md:border-l border-b md:border-b-0">

                    <LinesSvg 
                    className="fill-white md:w-[985px] h-full lg:w-[816px]"
                    />
                </div>
            </div>
            <div className="max-w-screen border-b"></div> 

            <div className="container border-x flex justify-between min-h-[60vh] flex-col lg:flex-row">
                <div className="lg:w-1/2 overflow-hidden">

                    <DiagonalLinesSvg 
                    className="h-[60px] "
                    />
                    <h3 className="mt-20 pl-16 uppercase whitespace-normal">Looking forward <br />
                        to hearing about your project</h3>
                    <form 
                    action="/send-data-here" 
                    method="post" 
                    className="px-8 pt-16 md:p-16 flex flex-col"
                    >
                        <div className="field flex flex-col ">
                            <label for="name" className="after:content-['*'] after:ml-1 after:text-red">name</label>
                            <input type="text" id="name" name="name"/>
                        </div>
                        <div className="field flex flex-col">  
                            <label for="email" className="after:content-['*'] after:ml-1 after:text-red">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>

                        <div className="field flex flex-col">
                            <label for="text-area">Tell me about your project</label>
                            <textarea rows="4" type="text" id="text-area" name="text-area" />
                        </div>

                        <button type="submit" className="text-2xl shadow-custom hover:shadow-none hover:translate-x-1 duration-150 ">Submit</button>
                    </form>
                </div>
                <div className="lg:w-1/2 border-l relative">
                    <div className="flex flex-col items-center gap-6 py-20 lg:py-36 ">
                        <Link key='linkedin' href='#' className="border rounded-full px-10 py-16 font-bold inline-block w-fit md:mr-48">
                            linkedin
                        </Link>
                        <Link key='Instagram' href='#' className="border rounded-full px-12 py-20 font-bold inline-block w-fit md:ml-64">
                            Instagram
                        </Link>
                        <Link key='Github' href='#' className="border rounded-full px-12 py-16 font-bold inline-block w-fit  md:mr-28">
                            Github
                        </Link>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Contact;