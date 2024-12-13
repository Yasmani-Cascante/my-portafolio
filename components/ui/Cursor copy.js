import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { EyeIcon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ArrowSvg from "../../public/assets/img/icons/ph_arrow-arc-right.svg";
// import { EyeIcon } from '@heroicons/react/24/solid';


// we will not render <Cursor/> on mobile/touch devices.
const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const Cursor = ({revealProject}) => {
console.log('revealProject', revealProject);
    // Abort if we are in responsive mode 
    if (typeof navigator !== "undefined" && isMobile()) return null;

    // Mouse Position
    const [mousePosition, setMousePosition] = useState({
        x: "",
        y: "",
      });

    // const [linkHovered, setLinkHovered] = useState(false);
    const [cursorVariant, setCursorVariant] = useState('initial');
    const [cursorHoverProject, setCursorHoverProject] = useState('hidde');

    const handleMouseMove = (e) => {
        setMousePosition({
        x: e.clientX,
        y: e.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        handleHoverEvents();
        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    

    
    const handleHoverEvents = () => {

        // Links & buttons hover Handle
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('hoverLink'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });
        document.querySelectorAll("button").forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('hide'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });

        // About Photo Cursor hidden
       const aboutImg = document.querySelector('#AboutImg');
       aboutImg.addEventListener("mouseover", () => setCursorVariant('hide'))
       aboutImg.addEventListener("mouseout", () => setCursorVariant('initial'))

        // Hamburger Menu hover Handle
       const hamburgerMenu = document.querySelector('.menu-hamburger');
       hamburgerMenu.addEventListener("mouseover", () => setCursorVariant('hoverLink'))
       hamburgerMenu.addEventListener("mouseout", () => setCursorVariant('initial'))
       
        // Click Event Listeners
        document.addEventListener("mousedown", () => setCursorVariant('hoverLink') );
        document.addEventListener("mouseup", () => setCursorVariant('initial'));
        
        // Headers hover Handle
        document.querySelectorAll("h1").forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('biggest'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });
        document.querySelectorAll("h2").forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('big'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });
    //     document.querySelectorAll("div.project-card__header > h3, .poject-card__footer-link").forEach(el => {
    //         el.addEventListener("mouseover", () => setCursorVariant('hoverLink2'))
    //         el.addEventListener("mouseout", () => setCursorVariant('initial'))
    //         el.addEventListener("mouseover", () => setCursorHoverProject('show'));
    //         el.addEventListener("mouseout", () => setCursorHoverProject('hidde'));
    //    });
       document.querySelectorAll(".project-card").forEach(el => {
        el.addEventListener("mouseover", () => setCursorVariant('hoverProyect'))
        el.addEventListener("mouseout", () => setCursorVariant('initial'))
        el.addEventListener("mouseover", () => setCursorHoverProject('show'));
        el.addEventListener("mouseout", () => setCursorHoverProject('hidde'));
   });

    };

    const variants = {
        initial: {
            // x:mousePosition.x - 21,
            // y:mousePosition.y - 21,
            x:mousePosition.x - 15,
            y:mousePosition.y - 15,
            width: 30,
            height: 30,
            // backgroundColor: "transparent",
            
            // mixBlendMode: "difference",
            border: `3px solid`,
            // borderColor: `#222222`,
            // height: 30,
            // width: 30,
            // transition: {
            //     // duration: 0,
            // //     // scale: {
            // //     //     duration: 0.15
            // //     // },
            // //     // backgroundColor: {duration: 0.15}
            // }
        },
        hide: {
            // x:mousePosition.x - 30,
            // y:mousePosition.y - 30,
            // width: 60,
            // height: 60,
            x:mousePosition.x - 5,
            y:mousePosition.y - 5,
            width: 10,
            height: 10,
            border: `1px solid`,
            backgroundColor: '#000',
            // scale: 1,
            opacity: 0,
              transition: {
                // width: {duration: 0.15},
                // height: {duration: 0.15},
                // opacity: {duration: 0.3}

                // duration: 0.15,
            // //     // scale: {
            // //     //     duration: 0.15
            // //     // },
            // //     // backgroundColor: {duration: 0.15}
            }

          },
       
        hoverProyect: {
            // height: 72,
            // width: 72,
            // scale: .2,
            scale: 0.5,
            x:mousePosition.x - 15,
            y:mousePosition.y - 15,
            backgroundColor: '#000',
            // mixBlendMode: "unset",
            // backgroundColor: "#f99a45",
            // border: "4px solid",
            // borderColor: "#fff",
            // padding: 4,
            transition: {
                duration: 0.5,
                x: {
                    duration: 0
                },
                y: {
                    duration: 0
                },
                // backgroundColor: {duration: 1}
                // ease: "ease" 
                // ease: "anticipate"
                // type: "inertia",
                // velocity: 50
            }
        },
        hoverLink: {
            height: 72,
            width: 72,
            // scale: 2.2,
            // scale: 0.5,
            x:mousePosition.x - 35,
            y:mousePosition.y - 35,
            backgroundColor: '#fefefe',
            mixBlendMode: "difference",
            transition: {
                // duration: 0,
                // scale: {
                //     duration: 0.15
                // },

                // height: {duration: 0.5},
                // width: {duration: 0.15},
                // ease: "ease" 
            }
        },
        big: {
            height: 150,
            width: 150,
            // scale: 1.1,
            x:mousePosition.x - 75,
            y:mousePosition.y - 60,
            backgroundColor: "#fefefe",
            mixBlendMode: "difference",
            transition: {
                // duration: 0.15,
                // scale: {
                //     duration: 0.15
                // }
                //     height: {duration: 0.5},
                // width: {duration: 0.15},
            }

        },
        biggest: {
            // scale:5,
            // x:mousePosition.x - 15,
            // y:mousePosition.y - 15,
            scale:2,
            x:mousePosition.x - 15,
            y:mousePosition.y - 15,
            backgroundColor: "#fefefe",
            mixBlendMode: "difference",
            // transition: {
            //     duration: 0,
            //     scale: {
            //         duration: 0.15
            //     }
            // }

        },

    }

    const variantsEyes = {
        hidde: {
            opacity: 0,
            // rotate: 0
            // padding: `0px`,
            // scale: 0,
            // height: 0,
            transition: {
                delay: 0
            }
        },
        show: {
            opacity: 1,
            // height: `100%`,
                // scale: 1,
                // mixBlendMode: "difference",

                // padding: `12px`,
                // width: 60,
                // height: 60,
                // x:mousePosition.x - 30,
                // y:mousePosition.y - 30,
                // backgroundColor: "#fff",
                // backgroundColor: "#ffff",
                
                // mixBlendMode: "difference", 
            // x:mousePosition.x - 21,
            // y:mousePosition.y - 21,
            // rotate: 45
            // rotate: 25

        }

    }

    return (
        <motion.div
         variants={variants}
         animate={cursorVariant}
        //  transition={{ ease: "linear", duration: 0 }}
         transition={{
            duration: 0.3,
            x: {
                duration: 0 
            },
            y: {
                duration: 0 
            },
            // ease: "linear"
         }}
         className="my-cursor"
        >
            
            <motion.div 
            className="hover-project-cursor relative border h-[200px] w-[200px]"
            variants={variantsEyes}
            animate={cursorHoverProject}
            transition={{
                // duration: 0.3,
                 ease: "easeInOut",
                //  type: "inertia",
                //  damping: 5,
                //  stiffness: 50,
                //  restDelta: 0.001
                 delay: 0.8
                // scale: {duration:0}
             }}
            //  animate={{ rotate: 180 }}
                // transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
                <motion.div 
                // className="absolute flex justify-center w-full items-start translate-y-[-0.50rem] text-black"
                className="flex-col justify-around items-center w-fit -translate-y-32 translate-x-8 "
                
                >
                {/* <ArrowUpRightIcon className="arrow-svg w-[50px] h-[50px]"/> */}
                
                <span className="text-[4rem] font-bold rotate-12">click!</span>
                <ArrowSvg className="arrow-svg w-[64px] h-[64px]"/>
                {/* <EyeIcon className="arrow-svg w-[64px] h-[64px]"/> */}
                </motion.div>
            </motion.div>
        </motion.div>
    )
 
}

export default Cursor;