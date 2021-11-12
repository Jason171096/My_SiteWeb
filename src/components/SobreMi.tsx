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
  const imgSize = "lg:w-40";
  const textStyle = "text-center text-white mx-3 ";
  const cardStyle = "m-auto bg-gradient-to-tr from-violetMap to-blueMap rounded-xl p-3 mb-3 opacity-90 shadow-md ";
  return (
    <div className="mx-auto mb-10 relative w-full h-full max-w-screen-lg overflow-y scrollbar-w-2 scrollbar-thumb-gray-400">
      <div className="grid grid-cols-1 w-full h-auto lg:h-full">
        <div className="m-auto rounded-xl py-4 bg-gradient-to-tr from-violetMap to-blueMap max-w-xs lg:max-w-sm">
          <h1 className={textStyle + "text-xl lg:text-3xl"}>
            Mi nombre es Jason, soy desarrollador y diseñador
            <strong> FrontEnd</strong>.
          </h1>
          <p className={textStyle + "lg:text-xl"}>
            Centrandome en el diseño visual, la interfaz / interacción y la
            experiencia del usuario.
          </p>
        </div>
      </div>
      <div>
        <h1 className={textStyle + "text-3xl p-5"}>Desarrollo</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 w-full h-auto sm:grid-cols-3 sm:grid-rows-2">
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl"}>HTML5</h2>
          <img className={imgSize} src={iconHTML5} alt="HTML5" width="100" />
        </div>
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl"}>CSS</h2>
          <img className={imgSize} src={iconCSS} alt="CSS" width="100" />
        </div>
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl mx-0"}>JavaScript</h2>
          <img className={imgSize} src={iconJavascript} alt="JavaScript" width="100" />
        </div>
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl mx-0"}>TypeScript</h2>
          <img className={imgSize} src={iconTypescript} alt="TypeScript" width="100" />
        </div>
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl"}>C Sharp</h2>
          <img className={imgSize} src={iconCSharp} alt="C#" width="100" />
        </div>
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl"}>React</h2>
          <img className={imgSize} src={iconReact} alt="React" />
        </div>
      </div>
      <div>
        <h1 className={textStyle + "text-3xl p-5"}>Diseño</h1>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-full h-auto sm:grid-cols-3 sm:grid-rows-1">
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl mx-0"}>Adobe XD</h2>
          <img className={imgSize} src={iconAdobeXD} alt="Adobe XD" width="100" />
        </div>
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl"}>Canvas</h2>
          <img className={imgSize} src={iconCanva} alt="Canvas" width="100" />
        </div>
        <div className={cardStyle + "col-span-2 sm:col-span-1"}>
          <h2 className={textStyle + "text-xl"}>Figma</h2>
          <img className={imgSize} src={iconFigma} alt="Figma" width="100" />
        </div>
      </div>
      <div>
        <h1 className={textStyle + "text-3xl p-5"}>Control de versión</h1>
      </div>
      <div className="grid grid-cols-2 w-full h-auto">
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl"}>Git</h2>
          <img className={imgSize} src={iconGit} alt="Git" width="100" />
        </div>
        <div className={cardStyle}>
          <h2 className={textStyle + "text-xl"}>GitHub</h2>
          <img className={imgSize} src={iconGitHub} alt="GitHub" width="100" />
        </div>
      </div>
    </div>
  );
};

export default SobreMi;