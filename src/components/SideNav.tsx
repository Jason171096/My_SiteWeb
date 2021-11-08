import React from 'react';
import closeIco from '@icons/close.svg';
import { Link } from 'gatsby'

const SideNav = () => {
    const closeNav = () => {
        document.getElementById("sideNav").style.width = "0%"
    }
    return (
        <div id="sideNav" className="h-full w-0 fixed z-10 top-0 left-0 overflow-x-hidden transition delay-100 bg-gradient-to-tr from-blueMap to-violetMap">
            <div className="relative ml-auto pr-5 py-10">
                <div onClick={closeNav} className="w-10 h-10 cursor-pointer">
                <img  src={closeIco}/> 
                </div>
            </div>
            <ul>
                <li className=""><Link to="/">Home</Link></li>
                <li className=""><Link to="/sobre-mi">Sobre mi</Link></li>
                <li className=""><Link to="/proyectos">Proyectos</Link></li>
                <li className=""><Link to="/contacto">Contacto</Link></li>
            </ul>
        </div>
    )
}

export default SideNav
