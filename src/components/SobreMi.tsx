import React from "react";
import iconHTML5 from "@icons/icon-html5.svg";
import iconCSS from "@icons/icon-css.svg";
import iconJavascript from "@icons/icon-javascript.svg";
import iconTypescript from "@icons/icon-typescript.svg";
import iconCSharp from "@icons/icon-c-sharp.svg";
import iconReact from "@icons/icon-react.svg";
import iconFigma from "@icons/icon-figma.svg";
import iconAdobeXD from "@icons/icon-adobe-xd.svg";
import iconCanva from "@icons/icon-canva.svg";
import iconGit from "@icons/icon-git.svg";
import iconGitHub from "@icons/icon-github.svg";

const SobreMi = () => {
  const textStyle = "text-center text-white mx-3 ";
  const iconStyle = ``;
  return (
    <div className="mb-10 relative w-full h-full max-w-screen-lg overflow-y-scroll scrollbar-w-2 scrollbar-thumb-gray-400">
      <div className="grid grid-cols-1 w-full h-auto lg:h-full">
        <div className="mx-5 rounded-xl py-4 bg-gradient-to-tr from-blueMap to-violetMap">
          <h1 className={textStyle + "text-xl"}>
            Mi nombre es Jason, soy desarrollador y diseñador
            <strong> FrontEnd</strong>.
          </h1>
          <p className={textStyle}>
            Centrandome en el diseño visual, la interfaz / interacción y la
            experiencia del usuario.
          </p>
        </div>
      </div>
      <div>
        <h1 className={textStyle + "text-3xl p-5"}>Desarrollo</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 w-full h-auto">
        <div className="m-auto">
          <img src={iconHTML5} alt="HTML5" width="100" />
        </div>
        <div className="m-auto">
          <img src={iconCSS} alt="CSS" width="100" />
        </div>
        <div className="m-auto">
          <img src={iconJavascript} alt="JavaScript" width="100" />
        </div>
        <div className="m-auto">
          <img src={iconTypescript} alt="TypeScript" width="100" />
        </div>
        <div className="m-auto">
          <img src={iconCSharp} alt="C#" width="100" />
        </div>
        <div className="m-auto">
          <img src={iconReact} alt="React" />
        </div>
      </div>
      <div>
        <h1 className={textStyle + "text-3xl p-5"}>Diseño</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-full h-auto">
        <div className="m-auto">
          <img src={iconAdobeXD} alt="Adobe XD" width="100" />
        </div>
        <div className="m-auto">
          <img src={iconCanva} alt="Canvas" width="100" />
        </div>
        <div className="m-auto col-span-2">
          <img src={iconFigma} alt="Figma" width="100" />
        </div>
      </div>
      <div>
        <h1 className={textStyle + "text-3xl p-5"}>Control de versión</h1>
      </div>
      <div className="grid grid-cols-2 w-full h-auto">
        <div className="m-auto">
          <img src={iconGit} alt="Git" width="100" />
        </div>
        <div className="m-auto">
          <img src={iconGitHub} alt="GitHub" width="100" />
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
// bg-gradient-to-tr from-blueMap to-violetMap
