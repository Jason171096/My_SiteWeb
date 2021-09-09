import React from 'react';
import menu from '../images/menu.svg';
import { Link } from 'gatsby'

const NavBar = () => {
    let link = "inline cursor-pointer hover:text-red-500";
    return (
        <div className="relative ml-auto pr-5 py-10 text-white font-bold text-2xl lg:text-3xl lg:pr-5  ">
            <ul className="hidden sm:block m-0 p-0 space-x-10 xl:space-x-24">
                <li className={link}><Link to="/">Home</Link></li>
                <li className={link}><Link to="/sobre-mi">Sobre mi</Link></li>
                <li className={link}><Link to="/proyectos">Proyectos</Link></li>
                <li className={link}><Link to="/contacto">Contacto</Link></li>
            </ul>
            <div className="w-10 h-10 sm:hidden">
                <img src={menu}/>
            </div>
        </div>
    )
}

export default NavBar
