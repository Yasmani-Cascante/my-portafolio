import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { EyeIcon } from '@heroicons/react/24/solid';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import ArrowSvg from "../../public/assets/img/icons/ph_arrow-arc-right.svg";
// import { EyeIcon } from '@heroicons/react/24/solid';
// import LoadingBtn from '../ui/loadingBtn';
import Image from "next/image";

import Project  from "../../public/assets/img/Thumbnails/Project.png";
import Foxym  from "../../public/assets/img/Thumbnails/Foxym.png";
import Test  from "../../public/assets/img/Thumbnails/Test.png";
import ProjectTitle  from "../../public/assets/img/Thumbnails/ProjectTitle.png";


const Cursor = ({revealProjectThumb}) => {

    // Abort if we are in responsive mode 
    // if (typeof navigator !== "undefined" && isMobile()) return null;

    const [mounted, setMounted] = useState(false);
    // Mouse Position
    const [mousePosition, setMousePosition] = useState({ x: "", y: "" });
    // const [linkHovered, setLinkHovered] = useState(false);
    const [cursorVariant, setCursorVariant] = useState('initial');
    // const [viewProjectVariant, setviewProjectVariant] = useState('hidde');
    const [cursorHoverProject, setCursorHoverProject] = useState('hidde');
    const [projectThumb, setProjectThumb] = useState(null);

     // Comprobar si estamos en el lado del cliente
    useEffect(() => {
        setMounted(true);
        
        // Comprobar si es un dispositivo móvil
        const isMobile = /Android|Mobi/i.test(navigator.userAgent);
        if (isMobile) {
            setMounted(false);
            return;
        }

    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

     window.addEventListener("mousemove", handleMouseMove);
    // useEffect(() => {
    //     window.addEventListener("mousemove", handleMouseMove);
    //     handleHoverEvents();
    //     return () => {
    //     window.removeEventListener("mousemove", handleMouseMove);
    //     };
    // }, []);
    

    
    const setupHoverEvents  = () => {

        const elements = {
            links: document.querySelectorAll("a"),
            buttons: document.querySelectorAll("button"),
            projectLink: document.querySelector("#projectLink"),
            aboutImg: document.querySelector('#AboutImg'),
            hamburgerMenu: document.querySelector('.menu-hamburger'),
            h1s: document.querySelectorAll("h1"),
            h2s: document.querySelectorAll("h2"),
            smile: document.querySelector('.smile'),
            projectCards: document.querySelectorAll(".proyect-card--wrapper")
        };

    
        // Event listeners para links
        elements.links.forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('hoverLink'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });

        // Event listeners para botones
        elements.buttons.forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('hide'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });

        if (elements.projectLink) {
            elements.projectLink.addEventListener("mouseover", () => setCursorVariant('hide'));
            elements.projectLink.addEventListener("mouseout", () => setCursorVariant('initial'));
        }
      
        if (elements.aboutImg) {
            elements.aboutImg.addEventListener("mouseover", () => setCursorVariant('hide'));
            elements.aboutImg.addEventListener("mouseout", () => setCursorVariant('initial'));
        }

        if (elements.hamburgerMenu) {
            elements.hamburgerMenu.addEventListener("mouseover", () => setCursorVariant('hoverLink'));
            elements.hamburgerMenu.addEventListener("mouseout", () => setCursorVariant('initial'));
        }
       
       // Event listeners globales
       document.addEventListener("mousedown", () => setCursorVariant('click'));
       document.addEventListener("mouseup", () => setCursorVariant('initial'));
        

        elements.h1s.forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('biggest'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });

        elements.h2s.forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('big'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });
  
        if (elements.smile) {
            elements.smile.addEventListener("mouseover", () => setCursorVariant('big'));
            elements.smile.addEventListener("mouseout", () => setCursorVariant('initial'));
        }
  
        elements.projectCards.forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('hoverProyect'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });
    };
        setupHoverEvents();
        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            // Aquí podrías agregar la limpieza de otros event listeners si es necesario
        };
    }, []);

 // No renderizar nada hasta que estemos seguros de que estamos en el cliente
 if (!mounted) return null;
    
     const variants = {
        initial: {
            // x:mousePosition.x - 21,
            // y:mousePosition.y - 21,
            borderRadius: 300,
            width: 30,
            height: 30,
            x:mousePosition.x - 15,
            y:mousePosition.y - 15,
            // scale:1,

            // backgroundColor: "transparent",
            // backgroundColor: "#fefefe",
            // mixBlendMode: "difference",
            // boxShadow: `4px 16px 24px grey`,

            // border: `3px solid`,
            // borderColor: `#222222`,
            // height: 30,
            // width: 30,
            transition: {
                // duration: 0.07,
            //     // scale: {
            //     //     duration: 0.15
            //     // },
            //     // backgroundColor: {duration: 0.15}
            }
        },
        hide: {
            // x:mousePosition.x - 30,
            // y:mousePosition.y - 30,
            // width: 60,
            // height: 60,
            x:mousePosition.x - 5,
            y:mousePosition.y - 5,
            width: 15,
            height: 15,
            mixBlendMode: "difference",

            // border: `1px solid`,
            // backgroundColor: '#000',
            scale: 0,
            opacity: 0,
              transition: {
                // width: {duration: 0.15},
                // height: {duration: 0.15},
                // opacity: {duration: 0.3}

                duration: 0.15,
            // //     // scale: {
            // //     //     duration: 0.15
            // //     // },
            // //     // backgroundColor: {duration: 0.15}
            }

          },
       
        hoverProyect: {
            height: 200,
            width: 200,
            // border: `2px solid`,
            // backgroundColor:'transparent',
            // borderRadius: 0,
            // rotate: -15,
            // boxShadow: 'none',
            // scale: .2,
            // scale: 0.5,
            x:mousePosition.x - 50,
            y:mousePosition.y - 50,
            // backgroundColor: 'rgba(0,0,0, 0.75)',
            // mixBlendMode: "difference",
            // backgroundColor: "#f99a45",
            // backgroundColor: "#fefefe",

            // borderRadius: 3,
            // border: "4px solid",
            // borderColor: "#fff",
            // padding: 4,
            transition: {
            //     duration: 0.5,
            //     x: {
            //         duration: 0
            //     },
            //     y: {
            //         duration: 0
            //     },
            //     // backgroundColor: {duration: 1}
            //     // ease: "ease" 
            //     // ease: "anticipate"
            //     // type: "inertia",
            //     // velocity: 50
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
            // border: `3px solid #000`,
            boxShadow: `4px 16px 24px grey`,
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
        click: {
            height: 20,
            width: 20,
            // scale: 2.2,
            // scale: 0.5,
            x:mousePosition.x - 10,
            y:mousePosition.y - 10,
 
            // backgroundColor: '#fefefe',
            // border: `3px solid #000`,
            // boxShadow: `4px 16px 24px grey`,            
            transition: {
                duration: 0.15
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
            // boxShadow: `4px 16px 24px grey`,
            transition: {
                // duration: 0.15,
                // scale: {
                //     duration: 0.15
                // }
                //     height: {duration: 0.5},
                // width: {duration: 0.15},
                // mixBlendMode: {duration: 0.15},
            }

        },
        biggest: {
            height: 250,
            width: 250,
            // scale:2,
            // x:mousePosition.x - 15,
            // y:mousePosition.y - 15,
            // scale:2,
            x:mousePosition.x - 125,
            y:mousePosition.y - 125,
            backgroundColor: "#fefefe",
            mixBlendMode: "difference",
            // zoom: .3,
            transition: {
            //     duration: 0,
            //     scale: {
            //         duration: 0.15
            //     }
            }

        },

    }

    const viewCircle = {
        hidde: {
            opacity: 0,
            
            // rotate: 0
            // padding: `0px`,
            // scale: 0,
            // height: 0,
            // height: 30,
            // width: 0,
            // transition: {
            //     delay: 0
            // }
        },
        show: {
            opacity: 1,
            // height: `200px`,
            // width: `200px`,
                // scale: 1,
                // mixBlendMode: "normal",
                

                // padding: `12px`,
                // width: 60,
                // height: 60,
                // x:mousePosition.x - 850,
                // y:mousePosition.y - 850,
                // backgroundColor: "#fff",
                // backgroundColor: "#000",
                
                // mixBlendMode: "difference", 
            // x:mousePosition.x - 21,
            // y:mousePosition.y - 21,
            // rotate: 45
            // rotate: 25

        }

    }

     const newLocal = null;
    return (
        <motion.div
        className="my-cursor rounded-full overflow-visible"
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
        >
            { revealProjectThumb?
            
            <motion.div 
            className="bg-black-bg h-full w-full rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            // variants={viewCircle}
            // animate={viewProjectVariant}
            transition={{
             duration: 0.25
             }}
            >
                <motion.div 
                className="shadow-big bg-blue-light rounded-full h-24 w-24 relative -left-4 top-0 z-10 flex items-center align-middle "
                style={{left:mousePosition.x / 10, top:mousePosition.y / 10}}
                transition={{
                    duration: 0.25
                    }}
                >
                
                <span className="text-white text-center w-full"
                >
                    view
                </span>
                </motion.div>
           
                <Image 
                alt={`An image of the proyect`}
                fill
                className="rounded-full"
            //  priority
            //  src={revealProjectThumb}
            //  src={projectThumb}
                src={`/assets/img/Thumbnails/${revealProjectThumb}.png`}
                // src={`/../public/assets/img/Thumbnails/${revealProjectThumb}.png`}
                style={
                    {
                    objectFit:"cover",
                    // objectFit:"contain",

                    // minHeight: "100%",
                //    filter: "grayscale(100%)"
                    }
                }
                />  
            </motion.div>
            //  )}
            : newLocal }
           

        </motion.div>
    );
 
};

export default Cursor;