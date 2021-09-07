import React from "react"
import GradientBar from "./GradientBar"
import Info from "./Info"

const SectionLeft = () => {
    return (
        <div className="flex w-[1000px] h-screen">
            <GradientBar/>
            <Info/>            
        </div>
    )
}

export default SectionLeft
