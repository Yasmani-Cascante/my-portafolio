import Image from "next/image";
import DiagonalLinesSvg from "../../public/assets/img/diagonal-lines.svg";
import VerticalLinesSvg from "../../public/assets/img/vertical-lines.svg";
import ArrowDownSvg from "../../public/assets/img/icons/arrow-down.svg";
import Ellipse from "../../public/assets/img/Ellipse.svg";

function Masthead() {

    return (
        <div className="max-w-screen border-b min-h-full relative">
            <div className="container border-x relative min-h-[80vh] lg:min-h-[90vh]">

                <div className="ml-5 sm:ml-20 lg:ml-28 pt-16 md:pt-24 max-w-[69rem]">
                {/* <h1 className=' text-[4rem] md:text-8xl lg:text-9xl font-bold inline md:whitespace-nowrap'>Creative <br />  Web Designer <br /> & Developer</h1> */}
                <h1 className='text-[4.12rem] sm:text-8xl lg:text-9xl inline relative masthead-title'>Creative Web Designer <span className="masthead-title__span">&</span> <span>Developer</span> </h1>
                <p className="max-w-xs uppercase font-bold sm:ml-10 md:ml-24 mt-16">MY WEBSITES EMBODY A MINIMALISTIC AND CREATIVE DESIGN, SOLVE BUSINESS ISSUES, 
                AND ARE USER-FRIENDLY.</p>
                </div>
               

                <div className="flex mt-20 md:mt-10 lg:mt-40 absolute w-[90vw] -ml-[16vw] items-center">
                    <VerticalLinesSvg 
                     />
                    <a href="#"> 
                        <ArrowDownSvg 
                        className="ml-10"
                        />
                    </a>    
                </div>
                    <DiagonalLinesSvg 
                     className="absolute right-0 bottom-0 w-1/2 hidden lg:block"
                    />
                     {/* <Ellipse 
                     className="absolute right-0 bottom-0 w-[25vw]"
                    /> */}
            </div>
          
       </div>
       
    )
}

export default Masthead;