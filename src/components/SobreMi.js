import React from "react";
import myPhoto from "../images/profile-pic.png";

const SobreMi = () => {
  return (
    <div className="flex mx-auto mb-10 relative w-screen h-full max-w-screen-lg overflow-x-auto scrollbar-w-2 scrollbar-thumb-gray-400">
      <div className="flex mx-5 w-screen h-[750px] bg-gradient-to-tr from-blueMap to-violetMap border border-white rounded-xl lg:h-full">
        <div className="flex flex-col w-full h-full text-white text-lg sm:text-2xl">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="m-2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:mx-10 border-2 border-white rounded-full">
              <img className="rounded-xl" src={myPhoto} />
            </div>
            <div className="m-2 text-center max-w-screen-sm">
              <h1>
                Soy desarrollador Front-end con experiencia de 2 años en diseño
                y creación de aplicaciones moviles y sitios web. Con
                conocimientos de UI/UX para la psicologia del usuario.
              </h1>
            </div>
          </div>
          <div className="flex flex-col m-2">
            <div className="text-4xl text-center font-bold">
              <h1>Habilidades</h1>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-evenly">
                <div className="m-2">
                  <h2 className="text-2xl font-bold">Programación</h2>
                  <ul>
                    <li>○ HTML</li>
                    <li>○ CSS</li>
                    <li>○ Javascript</li>
                    <li>○ React</li>
                    <li>○ Dart</li>
                    <li>○ C#</li>
                  </ul>
                </div>
                <div className="m-2">
                  <h2 className="text-2xl font-bold">Diseño</h2>
                  <ul>
                    <li>○ Figma</li>
                    <li>○ Adobe XD</li>
                    <li>○ Photoea</li>
                  </ul>
                </div>
                <div className="m-2">
                  <h2 className="text-2xl font-bold">Control de versión</h2>
                  <ul>
                    <li>○ Git</li>
                    <li>○ Github</li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
