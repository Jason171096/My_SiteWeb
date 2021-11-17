import React from 'react'

export default function Card(_props: {title:string, usedTech:string, urlImage:any}) {
    const cardStyle = "relative flex flex-col m-auto w-[300px] h-[250px] rounded-xl glassCard"
    return (
        <div className={cardStyle}>
            <h1 className="titleTextStyle text-xl mt-1">{_props.title}</h1>
            <div className="mx-2 mb-2">
                <img className="rounded-xl" src={_props.urlImage} alt=""/>
            </div>
            <p className="paragraphTextStyle">{_props.usedTech}</p>
        </div>
    )
}
