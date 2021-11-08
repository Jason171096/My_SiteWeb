import React from 'react';
import Jason from "@images/Jason.png";

const Picture = () => {
    return (
        <picture className="self-end w-[300px] sm:w-[400px] mt-5">
            <img src={Jason} alt="Jason"/>
        </picture>
    )
}

export default Picture
