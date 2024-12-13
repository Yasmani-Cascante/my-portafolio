import React, { useEffect, useRef } from 'react';

const MagneticButton = ({ text }) => {
    const btnRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (btnRef && btnRef.current) {
            const btn = btnRef.current;
            btn.addEventListener('mousemove', onMouseMove);
            btn.addEventListener('mouseout', onMouseOut);
            return () => {
                btn.removeEventListener('mousemove', onMouseMove);
                btn.removeEventListener('mouseout', onMouseOut);
            }
        }
    }, [])

    const onMouseMove = (e) => {
        const btn = btnRef.current;
        const text = btn.children[0];

        // const circle = btn.getBoundingClientRect();
        // const x = (e.clientX + window.scrollX - (circle.width / 2)) * 0.2;
        // const y = (e.clientY + window.scrollY - (circle.height / 2)) * 0.2;
        // btn.children[0].style.transform =`translate3d(${x}px, ${y}px, 0)`;
        // textRef.current.style.transform = `translate3d(${x / 4}px, ${ y / 4}px, 0)`;
        const bounds = btn.getBoundingClientRect();
        const x = e.clientX - bounds.left - bounds.width / 2;
        const y = e.clientY - bounds.top - bounds.height / 2;
        btn.style.transform = "translate(" + x * 0.25 + "px, " + y * 0.25 + "px)"
        text.style.transform = "translate(" + x * 0.15 + "px, " + y * 0.15 + "px)"
        // btn.children[1].style.transform = "translate(" + x * 0.20 + "px, " + y * 0.20 + "px)"
   console.log('btn.children[0]',btn.children[0]);
    }

    const onMouseOut = (e) => {
        const btn = btnRef.current;
        const text = btn.children[0];

        btn.style.transform = "translate(0px, 0px)"
        text.style.transform = "translate(0px, 0px)"
        // btn.children[0].style.transform = `translate3d(0, 0, 0)`;
        // textRef.current.style.transform = `translate3d(0, 0, 0)`;
    }

    return (
        // <div ref={btnRef} className="Magnetic-wrapper border">
        // <a href="#!" ref={btnRef} className="Magnetic-wrapper border absolute bottom-44 right-64 p-4">
        <a href="#!" ref={btnRef} className="Magnetic-wrapper border absolute -bottom-2 -left-2 ">
            <span className="font-bold  uppercase block text-center">
                {text}
            </span>
        </a>
        // </div>

    )
}

export default MagneticButton;