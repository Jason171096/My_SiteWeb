import React from "react"
import GradientBar from "./GradientBar"
import NavBar from "./NavBar"

const SectionTop = () => {
    return (
        <div className="flex w-screen max-w-screen-2xl">
            <GradientBar/>
            <NavBar/>            
        </div>
    )
}

export default SectionTop
