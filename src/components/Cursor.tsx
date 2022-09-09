import React from 'react';
import { gsap } from "gsap";

const Cursor = () => {
    const isDocument = typeof document !== "undefined"
    const hoverDuration = 0.3;
    let isHovered = false, intialCursorHeight;

    let mouse = {
        x: -100,
        y: -100
    };


    const updateCursor = () => {
        
        gsap.set(".cursor", {
            x: mouse.x,
            y: mouse.y
        });
    

        // gsap.to(".cursor--large", {
        //     duration: 0.15,
        //     x: mouse.x,
        //     y: mouse.y
        // });
        
        requestAnimationFrame(updateCursor);
    }

    const updateCursorPosition = (e:MouseEvent) => {
        mouse.x = e.pageX-12;
        mouse.y = e.pageY-12 ;
    }

    if(isDocument) {
        document.body.addEventListener("pointermove", updateCursorPosition);
        updateCursor()
    }
    
    return (
        <>
      <div className="fixed z-50 w-auto h-auto ">
	    <div className="w-8 h-8 left-0 top-0 rounded-full flex justify-center items-center pointer-events-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 select-none cursor">
            <span className="relative w-8 h-8 shadow-3xl"></span>
        </div>
        </div>
        </>
       
    );
}

export default Cursor
