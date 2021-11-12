import React from 'react';
import illustrationJason from "@images/vector-jason.png";

const Picture = () => {
    return (
        <picture className="self-end w-[300px] sm:w-[400px] mt-5">
            <img src={illustrationJason} alt="Jason"/>
        </picture>
    )
}

export default Picture
