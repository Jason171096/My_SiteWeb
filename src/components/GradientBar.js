import React from "react"
import vectors from '../images/vectors_gradient.svg';

const GradientBar = () => {
    return (
        <figure className="fixed z-0 w-[350px] lg:w-[450px]">
            <img src={vectors} alt="Vectors"/>
        </figure>
    )
}

export default GradientBar
