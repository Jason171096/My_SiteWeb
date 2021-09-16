import React from 'react';
import menuIco from '../images/menu.svg';
import { Link } from 'gatsby'

const NavBar = () => {
    const styleLi = "inline cursor-pointer hover:text-redKing transition delay-75";
    const openNav = () => {
        document.getElementById("sideNav").style.width = "100%"
    }
    return (
        <div className="relative ml-auto pr-5 py-10 text-white font-bold text-2xl lg:text-3xl lg:pr-5">
            <ul className="hidden sm:block m-0 p-0 space-x-10 xl:space-x-24">
                <li className={styleLi}><Link to="/">Home</Link></li>
                <li className={styleLi}><Link to="/sobre-mi">Sobre mi</Link></li>
                <li className={styleLi}><Link to="/proyectos">Proyectos</Link></li>
                <li className={styleLi}><Link to="/contacto">Contacto</Link></li>
            </ul>
            <div onClick={openNav} className="w-10 h-10 cursor-pointer sm:hidden">
                <img src={menuIco}/>
            </div>
        </div>
    )
}

export default NavBar
