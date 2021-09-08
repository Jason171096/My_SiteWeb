import React from 'react';
import menu from '../images/menu.svg';

const NavBar = () => {
    let link = "inline cursor-pointer hover:text-red-500";
    return (
        <div className="relative ml-auto pr-5 text-white font-bold text-xl lg:text-2xl lg:pr-5 py-10">
            <ul className="hidden sm:block m-0 p-0 space-x-10 xl:space-x-16">
                <li className={link}><a>Home</a></li>
                <li className={link}><a>Sobre mi</a></li>
                <li className={link}><a>Proyectos</a></li>
                <li className={link}><a>Contacto</a></li>
            </ul>
            <div className="w-10 h-10 sm:hidden">
                <img src={menu}/>
            </div>
        </div>
    )
}

export default NavBar
