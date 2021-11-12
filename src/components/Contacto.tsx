import React from 'react';
import instaIco from "@icons/instagram.svg";
import gitIco from "@icons/github.svg";
import linkeIco from "@icons/linkedin.svg";
import codepenIco from "@icons/codepen.svg";
import messageImg from "@icons/message.svg";

const Contacto = () => {
  const styleIco = "w-[25px] mx-1 cursor-pointer tranform hover:scale-110";
  const styleInput = "text-black text-lg outline-none resize-none rounded-lg py-3 px-2";
  return (
    <div className="flex relative mx-auto w-full h-4/6 text-center text-xl text-white justify-center">
        <div className="hidden md:block max-w-sm">
            <img src={messageImg}/>
        </div>
      <div className="flex flex-col w-full h-[500px] bg-gradient-to-tr from-blueMap to-violetMap rounded-lg mx-5 max-w-sm">
        <picture className="flex flex-row ml-auto mr-5 justify-items-end my-5">
          <a href="https://www.instagram.com/yeison_mm17" target="_blank">
            <img className={styleIco} src={instaIco} />
          </a>
          <a href="https://github.com/Jason171096" target="_blank">
            <img className={styleIco} src={gitIco} />
          </a>
          <a href="https://www.linkedin.com/in/jm-jason-martinez" target="_blank">
            <img className={styleIco} src={linkeIco} />
          </a>
          <a href="https://codepen.io/jason171096" target="_blank">
            <img className={styleIco} src={codepenIco} />
          </a>
        </picture>
        <div className="flex flex-col mx-3 my-5">
          <form className="flex flex-col py-2 mx-8 space-y-8 justify-center">
            <input className={styleInput} placeholder="Nombre" />
            <input className={styleInput} placeholder="E-mail" />
            <textarea className={styleInput} placeholder="Mensaje"></textarea>
            <a className="bg-redKing px-0 py-3 rounded-md text-xl cursor-pointer shadow-2xl hover:bg-red-600 transition delay-100">Enviar</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
