import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// we will not render <Cursor/> on mobile/touch devices.
const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const Cursor = ({}) => {

    // Abort if we are in responsive mode 
    if (typeof navigator !== "undefined" && isMobile()) return null;

    // Mouse Position
    const [mousePosition, setMousePosition] = useState({
        x: "",
        y: "",
      });

    // const [linkHovered, setLinkHovered] = useState(false);
    const [cursorVariant, setCursorVariant] = useState('initial');

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
        document.querySelectorAll("a, button").forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('hoverLink'));
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
        document.querySelectorAll("h1, h2").forEach(el => {
            el.addEventListener("mouseover", () => setCursorVariant('big'));
            el.addEventListener("mouseout", () => setCursorVariant('initial'));
        });
        
    };

    const variants = {
        initial: {
            x:mousePosition.x - 21,
            y:mousePosition.y - 21,
            mixBlendMode: "difference",
            
        },
        hoverLink: {
            // height: 72,
            // width: 72,
            scale: 2.2,
            x:mousePosition.x - 15,
            y:mousePosition.y - 15,
            backgroundColor: '#fefefe',
            mixBlendMode: "difference",
            transition: {
                duration: 0,
                scale: {
                    duration: 0.15
                }
            }
        },
        big: {
            // scale:5,
            // x:mousePosition.x - 15,
            // y:mousePosition.y - 15,
            scale:7,
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
        hide: {
            x:mousePosition.x - 150,
            y:mousePosition.y - 150,
            width: 300,
            height: 300,
            opacity: 0,

          },
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
        />
    )
 
}

export default Cursor;