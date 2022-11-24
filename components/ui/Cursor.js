import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// we will not render <Cursor/> on mobile/touch devices.
const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

const Cursor = ({}) => {


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
            height: 72,
            width: 72,
            x:mousePosition.x - 36,
            y:mousePosition.y - 36,
            backgroundColor: '#fefefe',
            mixBlendMode: "difference",

            // backgroundColor: "rgb(238, 130, 31)"
        },
        big: {
            height: 200,
            width: 200,
            x:mousePosition.x - 75,
            y:mousePosition.y - 75,
            backgroundColor: "#fefefe",
            mixBlendMode: "difference"
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
        // style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, background:`url(${project_files_url})`  }}
        // style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`  }}
        className="my-cursor"
        />
    )
 
}

export default Cursor;