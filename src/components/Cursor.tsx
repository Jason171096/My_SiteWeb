import React from 'react';
import {useState, useEffect} from "react";
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
    

        gsap.to(".cursor--large", {
            duration: 0.15,
            x: mouse.x,
            y: mouse.y
        });
        
        requestAnimationFrame(updateCursor);
    }

    const updateCursorPosition = (e:MouseEvent) => {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
    }

    if(isDocument) {
        document.body.addEventListener("pointermove", updateCursorPosition);
        updateCursor()
    }
   

    // useEffect(() => {
    //     updateCursor();
        
    //     //updateCursorPosition();
    // }, [])

    
    
    return (
        <>
      <div className="fixed w-6 h-6 z-50">
	    <div className="fixed w-6 h-6 left-0 top-0 translate-x-2/4 translate-y-2/4 rounded-full pointer-events-none bg-gray-50 select-none cursor"></div>
        </div>
        </>
       
    );
}

export default Cursor
