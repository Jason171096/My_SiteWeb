import React from 'react';


const NavBar = () => {
    let link = "inline cursor-pointer hover:text-red-500";
    return (
        <div className="text-white font-bold text-xl lg:text-2xl lg:pr-5 py-10">
            <ul className="m-0 p-0 space-x-10 xl:space-x-16">
                <li className={link}><a>Home</a></li>
                <li className={link}><a>Sobre mi</a></li>
                <li className={link}><a>Proyectos</a></li>
                <li className={link}><a>Contacto</a></li>
            </ul>
        </div>
    )
}

export default NavBar
