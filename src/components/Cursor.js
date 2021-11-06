import React from 'react';
import {useState, useEffect} from "react";
import cursorIco from "@icons/cursor.svg"; 

const Cursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});

   useEffect(() => {
       addEventListeners();
       return () => removeEventListeners();
   }, []);

   const addEventListeners = () => {
       document.addEventListener("mousemove", onMouseMove);
   };

   const removeEventListeners = () => {
       document.removeEventListener("mousemove", onMouseMove);
   };

   const onMouseMove = (e) => {
       setPosition({x: e.clientX, y: e.clientY});
   };

   const styleCursor = "";
    return (
        <div className={styleCursor}>
            <img src={cursorIco}/>
        </div>
    );
}

export default Cursor
