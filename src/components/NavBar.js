import React from 'react';

const NavBar = () => {
    return (
        <div className="text-white font-bold text-2xl pr-5 py-10">
            <ul className="m-0 p-0 space-x-16">
                <li className="inline cursor-pointer"><a>Home</a></li>
                <li className="inline cursor-pointer"><a>Sobre mi</a></li>
                <li className="inline cursor-pointer"><a>Proyectos</a></li>
                <li className="inline cursor-pointer"><a>Contacto</a></li>
            </ul>
        </div>
    )
}

export default NavBar
