import React from 'react'

export default function Card(_props: {title:string, usedTech:string, urlImage:string}) {
    const textStyle = ""
    const cardStyle = "relative flex m-auto w-[300px] h-[250px] rounded-xl bg-gradient-to-tr from-violetMap to-blueMap"
    return (
        <div className={cardStyle}>
            <h1>{_props.title}</h1>
        </div>
    )
}
