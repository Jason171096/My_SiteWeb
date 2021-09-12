import React from "react";
import instaIco from "../images/instagram.svg";
import gitIco from "../images/github.svg";
import linkeIco from "../images/linkedin.svg";
import codepenIco from "../images/codepen.svg";
import startSticker from '../images/start-up.svg';

const Contacto = () => {
  const sizeIco = "w-[25px] mx-1";
  const styleInput = "text-black text-lg outline-none resize-none rounded-lg py-3 px-2";
  return (
    <div className="flex relative mx-auto w-full h-4/6 text-center text-xl text-white justify-center">
        <div className="hidden md:block max-w-xl">
            <img src={startSticker}/>
        </div>
      <div className="flex flex-col w-full h-full bg-redKing rounded-lg mx-5 max-w-sm">
        <picture className="flex flex-row ml-auto mr-5 justify-items-end my-5">
          <img className={sizeIco} src={instaIco} />
          <img className={sizeIco} src={gitIco} />
          <img className={sizeIco} src={linkeIco} />
          <img className={sizeIco} src={codepenIco} />
        </picture>
        <div className="flex flex-col mx-3 my-5">
          <form className="flex flex-col py-2 mx-8 space-y-8 justify-center">
            <input className={styleInput} placeholder="Nombre" />
            <input className={styleInput} placeholder="E-mail" />
            <textarea className={styleInput} placeholder="Mensaje"></textarea>
            <a className="bg-yellowKing text-black px-7 py-3 rounded-md text-xl cursor-pointer shadow-2xl hover:bg-yellow-500">Enviar</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
