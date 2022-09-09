import React from 'react';
import { Link } from 'gatsby'

const SideNav = () => {
    return (
        <div id="sideNav" className="h-full w-0 fixed z-10 top-0 left-0 overflow-x-hidden transition delay-100 bg-gradient-to-tr from-blueMap to-violetMap">
            <div className="relative pr-5 py-10">
                <div className="w-10 h-10 ml-auto">
                </div>
            </div>
            <div className="flex justify-center items-center text-white text-lg">
            <ul className="flex flex-col space-y-7">
                <li className=""><Link to="/">Inicio</Link></li>
                <li className=""><Link to="/sobreMi">Sobre mi</Link></li>
                <li className=""><Link to="/proyectos">Proyectos</Link></li>
                <li className=""><Link to="/contacto">Contacto</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default SideNav
