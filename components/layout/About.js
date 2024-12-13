import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// import profilPhoto from "../../public/assets/img/Profil-photo.jpg";
 import profilPhotoColor from "../../public/assets/img/Profile-picture.jpg";
//import profilPhotoColor from "../../public/assets/img/shubham-pawar-SanJsOPdLtU-unsplash.jpg";
//import profilPhoto from "../../public/assets/img/shubham-pawar-SanJsOPdLtU-unsplash.jpg";

import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { animate, motion } from "framer-motion";

function About({hoverDispatch}) {

    // const imgEnter = () => {
    //     changeState = true
    //     console.log('...', "imgEnter");

    // }
    // const imgLeave = () => { 
    //     changeState = false
    //     console.log('...', "imgLeave");
    // }
    const ref = useRef(null);
    const constraintsRef = useRef(null);

    const [clipMaskRadius, setClipMaskRadius] = useState(0);
    const [maskOpacity, setMaskOpacity] = useState(0);
    const [clipMask, setClipMask] = useState({ x: 0, y: 0 });

    // button Effect
    const [pointer, setMyPointer] = useState('hide');
    const variants = {
        hide: {
            opacity: 0,
            // clipPath: `circle(50% at 0% 50%)`,
            clipPath: `circle(0% at 50% 50%)`,
            
            // clipPath: `polygon(55% 50%, 50% 50%, 50% 50%, 50% 50%)`
        },
  
        hover: {
            // opacity: 1,
            // clipPath: `circle(100% at 50% 50%)`,
            clipPath: `circle(100% at 50% 50%)`,
        
            // clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)`
            
        },
    }
  
    
    useEffect(() => {
        function getCoordinates(mouse) {
          const imagePosition = {
            posX: ref.current.offsetLeft,
            posY: ref.current.offsetTop,
          };
console.log("imagePosition", imagePosition);
    
          const posX = mouse.pageX - imagePosition.posX;
          const posY = mouse.pageY - imagePosition.posY;
    
          setClipMask({
            x: (posX / ref.current.clientWidth) * 100,
            y: (posY / ref.current.clientHeight) * 100,
          });
        
        }

        ref.current.addEventListener("mousemove", (mouse) => {
          window.requestAnimationFrame(() => {
           
            getCoordinates(mouse);
          });
        });
      }, []);

     
    
    // const MouseEnter = (e) => {
    //     setClipMaskRadius(25)
    // }
    // const MouseLeave = (e) => {
    //     setClipMaskRadius(0)
    // }
    
    return (
        <section className="max-w-screen border-b">
            <div className="container border-x flex flex-col-reverse lg:flex-row justify-between pb-20 lg:pb-0">
               <div 
               className="about-text-col-wrapper flex relative w-full" 
               ref={constraintsRef}

               >
                  <div className="flex flex-col max-w-lg lg:max-w-md lg:mb-32 px-8 xl:ml-16 self-center">
                        {/* <h2 className="contents">Hello ;) <br /> My name is <br /> Yasmani</h2> */}
                        <div className="flex">
                          <h2 className="w-fit">Hello</h2>
                          <div className="group relative pl-4 smile">
                            <span className="beta absolute opacity-100 group-hover:opacity-0 transition duration-150 ease-in-out delay-300">:)</span>
                            <span className="beta absolute opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out delay-300">;)</span>
                          </div>
                        </div>
                        
                        {/* <h3 className="mt-7"> My name is <br /> Yasmani</h3> */}
                        <div className=""> 
                          <p className="mt-16 mb-10 font-normal text-black/75">
                          <h5 className="inline-block mr-2"> My name is
                            <span className="lowercase ml-3">Yasmani.</span>
                          </h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil. 
                              Nam consectetur, impedit reprehenderit commodi beatae earum minus assumenda animi! 
                              Doloremque assumenda repellendus quia fuga at ipsam. Iste, modi amet.</p>
                        </div>
                  </div>
                  <motion.div 
                        // initial={{ x:-209, y:505}}
                        // initial={{ x:0, y:0}}
                        // initial={{ opacity:0, x:0, y:0}}
                        // whileInView={{ opacity:1, x:-80, y:350 }}
                        // transition={{ delay: 0.5, duration: 1 }}
                        // transitionEnd={()=>{setshowText(!showText)}}
                        drag
                        dragConstraints={constraintsRef}
                        viewport={{ once: true, amount: 0.3 }}
                        className="draggable border rounded-full px-8 py-20 font-bold inline-block bottom-0 left-0"
                        >
                            <Link key='Github' href='#' className="uppercase">
                                Download CV
                            </Link>
                        </motion.div>
               </div>
               
                <div 
                className="about-img-wrapper border-b lg:border-b-0 lg:border-l w-full relative lg:h-[80vh] mb-20 lg:mb-0"
                ref={ref}
                onMouseEnter={() => {
                    setClipMaskRadius(25);
                    setMaskOpacity(1)
                  }}
                onMouseLeave={() => {
                    setClipMaskRadius(0);
                    setMaskOpacity(0)

                  }}
                >
                <Image
                        src={profilPhotoColor}
                        layout={"fill"}
                        objectFit="cover"
                        // onMouseEnter={MouseEnter} 
                        // onMouseLeave={imgHover} 
                        // height={896}
                        alt="profile picture of a person"
                        className="sepia"
                        // style={{ scale:`${clipMaskRadius ? '1.05' : '1' }`}}
                        />
                    <Image
                        id="AboutImg"
                        src={profilPhotoColor}
                        layout={"fill"}
                        objectFit="cover"
                        // onMouseEnter={hoverDispatch}       
                        // onMouseLeave={hoverDispatch} 
                        // onMouseEnter={MouseEnter}   
                        // onMouseLeave={MouseLeave} 
                        // height={896}
                        alt="profile picture of a person"
                        className="masked"
                        // style={{clipPath: `circle(${clipMaskRadius}% at ${clipMask.x }% ${clipMask.y}%`}}
                        style={{clipPath: `circle(${clipMaskRadius}% at ${clipMask.x }% ${clipMask.y}%)`,
                        opacity: `${maskOpacity}`,
                        // scale:`${clipMaskRadius ? '1.05' : '1' }`
                    }}
                        />
                     
                </div> 
            </div>
        </section>
    )
}

export default About;