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
  const imgSize = "m-auto";
  const cardStyle =
    "w-[280px] grid grid-cols-2 m-auto bg-gradient-to-tr from-blueMap to-violetMap rounded-xl p-2 mb-3 shadow-md transform hover:scale-105 transition delay-100";
  return (
    <div className="mx-auto mb-10 relative w-full h-full max-w-screen-lg overflow-y scrollbar-w-2 scrollbar-thumb-gray-400">
      <div className="grid grid-cols-1 w-full h-auto lg:h-full">
        <div className="m-auto rounded-xl py-4 bg-gradient-to-tr from-blueMap to-violetMap max-w-xs lg:max-w-sm">
          <h1 className="titleTextStyle text-xl lg:text-3xl">
            Mi nombre es Jason, soy desarrollador y diseñador
            <strong> FrontEnd</strong>.
          </h1>
          <p className="titleTextStyle mx-3 lg:text-xl">
            Centrandome en el diseño visual, la interfaz / interacción y la
            experiencia del usuario.
          </p>
        </div>
      </div>
      <div>
        <h1 className="titleTextStyle text-3xl p-5 mx-3">Habilidades</h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-6 w-full h-auto sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
        <div className={cardStyle}>
          <img className={imgSize} src={iconHTML5} alt="HTML5" width="100" />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>HTML5</strong>
            </h2>
            <p className="paragraphTextStyle">Lenguaje de marcado hipertexto</p>
          </div>
        </div>
        <div className={cardStyle}>
          <img className={imgSize} src={iconCSS} alt="CSS" width="100" />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>CSS</strong>
            </h2>
            <p className="paragraphTextStyle">Lenguaje de maquetado web</p>
          </div>
        </div>
        <div className={cardStyle}>
          <img
            className={imgSize}
            src={iconJavascript}
            alt="JavaScript"
            width="100"
          />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>JavaScript</strong>
            </h2>
            <p className="paragraphTextStyle">Lenguaje de programación</p>
          </div>
        </div>
        <div className={cardStyle}>
          <img
            className={imgSize}
            src={iconTypescript}
            alt="TypeScript"
            width="100"
          />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>TypeScript</strong>
            </h2>
            <p className="paragraphTextStyle">Lenguaje de programación</p>
          </div>
        </div>
        <div className={cardStyle}>
          <img className={imgSize} src={iconCSharp} alt="C#" width="100" />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>C Sharp</strong>
            </h2>
            <p className="paragraphTextStyle">Lenguaje de programación</p>
          </div>
        </div>
        <div className={cardStyle}>
          <img className={imgSize} src={iconReact} alt="React" />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>React</strong>
            </h2>
            <p className="paragraphTextStyle">
              Librearia escrita en JavaScript
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="grid grid-cols-1 grid-rows-3 w-full h-auto sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
        <div className={cardStyle}>
          <img
            className={imgSize}
            src={iconAdobeXD}
            alt="Adobe XD"
            width="100"
          />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>Adobe XD</strong>
            </h2>
            <p className="paragraphTextStyle">App editor de UI/UX</p>
          </div>
        </div>
        <div className={cardStyle}>
          <img className={imgSize} src={iconCanva} alt="Canvas" width="100" />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>Canvas</strong>
            </h2>
            <p className="paragraphTextStyle">Editor de diseños simples</p>
          </div>
        </div>
        <div className={cardStyle + "sm:col-span-2 lg:col-span-1"}>
          <img className={imgSize} src={iconFigma} alt="Figma" width="100" />
          <div>
            <h2 className="paragraphTextStyle  text-xl">
              <strong>Figma</strong>
            </h2>
            <p className="paragraphTextStyle">Web editor de UI/UX</p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="grid grid-cols-1 w-full h-auto sm:grid-cols-2">
        <div className={cardStyle}>
          <img className={imgSize} src={iconGit} alt="Git" width="100" />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>Git</strong>
            </h2>
            <p className="paragraphTextStyle">Control de versión</p>
          </div>
        </div>
        <div className={cardStyle}>
          <img className={imgSize} src={iconGitHub} alt="GitHub" width="100" />
          <div>
            <h2 className="paragraphTextStyle text-xl">
              <strong>Github</strong>
            </h2>
            <p className="paragraphTextStyle">Repositorio de proyectos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
