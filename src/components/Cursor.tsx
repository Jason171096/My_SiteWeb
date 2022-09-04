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
      <div className="fixed z-50 w-auto h-auto">
	    <div className="w-6 h-6 left-0 top-0 rounded-full flex justify-center items-center pointer-events-none bg-gray-50 select-none cursor">
            <div className="w-4 h-4 rounded-full bg-black flex justify-center items-center"></div>
        </div>
        </div>
        </>
       
    );
}

export default Cursor
