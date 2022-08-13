import React from 'react'

export default function Card(_props: {title:string, usedTech:string, urlImage:any, urlPage:string}) {
    const cardStyle = "relative flex flex-col m-auto w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-xl glassCard"
    return (
        <div className={cardStyle} onClick={() => window.open(_props.urlPage)}>
            <h1 className="titleTextStyle text-xl my-2">{_props.title}</h1>
            <div className="w-auto h-[250px] lg:h-[370px] flex justify-center">
                <img className="rounded-xl" src={_props.urlImage} alt=""/>
            </div>
            <p className="paragraphTextStyle text-center my-2">{_props.usedTech}</p>
        </div>
    )
}

