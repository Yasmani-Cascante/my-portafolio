import Image from "next/image";
import Link from "next/link";
import LinesSvg from "../../public/assets/img/vertical-lines-small.svg";
import TransLinesSvg from "../../public/assets/img/trans-arrow-small.svg";


function Contact() {
    return (
        <div className="max-w-screen">
            <div className="flex container border-x items-center">
                <h2 className="ml-16">Contact whit me</h2>
                <div className="ml-auto w-1/2 border-l">
                    <Image 
                    src={LinesSvg}
                    className="w-full"
                    alt="illustration of lines"
                    />
                </div>
            </div>
            <div className="max-w-screen border-b"></div> 

            <div className="container border-x flex justify-between min-h-[60vh]">
                <div className="w-1/2 ">
                    <Image 
                    src={TransLinesSvg}
                    className="w-full"
                    alt="illustration of lines"
                    />
                    <h3 className="mt-20 pl-16 uppercase">Looking forward <br />
                        to hearing about your project</h3>
                    <form 
                    action="/send-data-here" 
                    method="post" 
                    className="p-16 flex flex-col "
                    >
                        <div className="field flex flex-col">
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

                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="w-1/2 border-l relative ">
                    {/* <Link key='linkedin' href='#' className="border rounded-full px-10 py-16 absolute top-48 right-80">
                        linkedin
                    </Link>
                    <Link key='Instagram' href='#' className="border rounded-full px-12 py-20 absolute top-1/3 right-28">
                        Instagram
                    </Link>
                    <Link key='Github' href='#' className="border rounded-full px-12 py-16 absolute top-2/4 right-96">
                        Github
                    </Link> */}
                    <div className="flex flex-col items-center gap-6 mt-36">
                        <Link key='linkedin' href='#' className="border rounded-full px-10 py-16 font-bold inline-block w-fit mr-48">
                            linkedin
                        </Link>
                        <Link key='Instagram' href='#' className="border rounded-full px-12 py-20 font-bold inline-block w-fit ml-64">
                            Instagram
                        </Link>
                        <Link key='Github' href='#' className="border rounded-full px-12 py-16 font-bold inline-block w-fit  mr-28">
                            Github
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Contact;