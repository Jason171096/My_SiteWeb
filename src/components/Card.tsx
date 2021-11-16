import React from 'react'

export default function Card(_props: {title:string, usedTech:string, urlImage:any}) {
    const cardStyle = "relative flex flex-col m-auto w-[300px] h-[250px] rounded-xl bg-gradient-to-tr from-violetMap to-blueMap"
    return (
        <div className={cardStyle}>
            <h1 className="titleTextStyle text-xl">{_props.title}</h1>
            <div className="m-3">
                <img className="rounded-xl" src={_props.urlImage} alt=""/>
            </div>
            <p className="paragraphTextStyle">{_props.usedTech}</p>
        </div>
    )
}
