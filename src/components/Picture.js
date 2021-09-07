import React from "react"
import Jason from '../images/Jason.png'

const Picture = () => {
    return (
        <picture className="self-center w-[350px] lg:w-[450px] mt-12">
            <img src={Jason} alt="Jason"/>
        </picture>
    )
}

export default Picture
