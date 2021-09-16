import React from "react"
import GradientBar from "./GradientBar"
import NavBar from "./NavBar"
import SideNav from "./SideNav"

const SectionTop = () => {
    return (
        <div className="flex w-screen max-w-screen-2xl">
            <SideNav/>
            <GradientBar/>
            <NavBar/>            
        </div>
    )
}

export default SectionTop
