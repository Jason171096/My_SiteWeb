import React, { useState } from 'react';
import menuIco from '@icons/menu.svg';
import { Link } from 'gatsby'

const NavBar = () => {
    const [openSide, setOpenSide] = useState(true);
    const styleLi = "inline hover:text-redKing transition delay-75 cursor-none";
    const styleSpan = "absolute bg-white w-full h-1 rounded transition duration-500";
    const onClickToggle = () => {
        setOpenSide(!openSide)
        const sideNav = document.getElementById("sideNav")
        const span1 = document.getElementById("span1")
        const span2 = document.getElementById("span2")
        const span3 = document.getElementById("span3")

        if(openSide) {
            span1.classList.add("-rotate-45");
            span1.classList.add("top-[13px]");

            span3.classList.add("rotate-45");
            span3.classList.add("bottom-[15px]");

            span2.classList.add("opacity-0");
            sideNav.style.width = "100%"
        }
        else {
            span1.classList.remove("-rotate-45");
            span1.classList.remove("top-[13px]");

            span3.classList.remove("rotate-45");
            span3.classList.remove("bottom-[15px]");

            span2.classList.remove("opacity-0");
            sideNav.style.width = "0%"
        }

        

    }
    return (
        <div className="relative ml-auto pr-5 py-7 text-white font-bold text-2xl lg:text-3xl">
            <ul className="hidden sm:block m-0 p-0 space-x-10 xl:space-x-24">
                <li className={styleLi}><Link to="/" >Inicio</Link></li>
                <li className={styleLi}><Link to="/sobreMi">Sobre mi</Link></li>
                <li className={styleLi}><Link to="/proyectos">Proyectos</Link></li>
                <li className={styleLi}><Link to="/contacto">Contacto</Link></li>
            </ul>
            <div onClick={onClickToggle} className="w-10 h-8 relative z-20 sm:hidden">
                <span id="span1" className={styleSpan + " top-0"}></span>
                <span id="span2" className={styleSpan + " top-[14px]"} ></span>
                <span id="span3" className={styleSpan + " bottom-0"}></span>
            </div>
        </div>
    )
}

export default NavBar
