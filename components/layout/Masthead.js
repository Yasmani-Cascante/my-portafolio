import Image from "next/image";
import ArrowDownSvg from "../../public/assets/img/bi_arrow-down.svg";
import VerticalLinesSvg from "../../public/assets/img/vertical-lines.svg";
import HorizontalLinesSvg from "../../public/assets/img/horizontal-lines.svg";

function Masthead() {
    return (
        <div className="max-w-screen border-b">
            <div className="container border-x relative min-h-[90vh]">
                {/* <span>Hi there!</span> */}
                <div className="ml-40 pt-24">
                <h1 className='text-masthead_title font-bold text-black'>Creative <br />  Web Designer <br /> & Developer</h1>
                <p className="max-w-xs uppercase font-bold ml-24 mt-16">MY WEBSITES EMBODY A MINIMALISTIC AND CREATIVE DESIGN, SOLVE BUSINESS ISSUES, 
                AND ARE USER-FRIENDLY.</p>
                </div>

                <div className="flex mt-20 -ml-20">
                    <Image 
                    src={VerticalLinesSvg}
                    alt="illustration of an arrow"

                    />
                    <a href="#" className="contents">
                        <Image 
                        src={ArrowDownSvg}
                        alt="illustration of an arrow"
                        className="ml-4"
                        />
                    </a>    
                </div>

                <Image 
                    src={HorizontalLinesSvg}
                    className="absolute right-0 bottom-0 w-1/2"
                    alt="illustration of an arrow"

                    />
            </div>
       </div>
       
    )
}

export default Masthead;