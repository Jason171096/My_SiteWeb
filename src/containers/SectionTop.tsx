
import React from 'react';
import GradientBar from "../components/GradientBar";
import NavBar from "../components/NavBar";
import SideNav from "../components/SideNav";

const SectionTop = () => {
    return (
        <div className="flex w-full max-w-screen-2xl">
            <SideNav/>
            <GradientBar/>
            <NavBar/>            
        </div>
    )
}

export default SectionTop
