import React from "react"
import NavBar from './NavBar'
import Picture from './Picture'

const SectionRight = () => {
    return (
        <div className="flex relative flex-col w-screen h-screen max-w-screen-md">
            <NavBar/>
            <Picture/>      
        </div>
    )
}

export default SectionRight