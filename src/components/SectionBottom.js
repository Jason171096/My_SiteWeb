import React from "react"
import Info from './Info'
import Picture from './Picture'

const SectionBottom = () => {
    return (
        <div className="flex relative flex-col w-full h-full max-w-screen-xl">
            <Picture/>
            <Info/>      
        </div>
    )
}

export default SectionBottom