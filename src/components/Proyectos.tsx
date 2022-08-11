import React from "react";
import WebProjectsImg from "@images/user-interface1.svg";
import MovilProjectsImg from "@images/user-interface2.svg";
import { Link } from "gatsby";

const Proyectos = () => {
  const card =
    "flex flex-row w-[300px] h-[200px] justify-evenly items-center rounded-lg shadow-2xl sm:w-[450px] sm:h-[225px] glassCard animationScale ";
  const sizeImg = "w-[150px] sm:w-[200px]";
  return (
    <div className="flex relative flex-col w-full h-[500px] justify-evenly items-center text-center text-white text-3xl sm:text-5xl">
      <Link to="/proyectosWeb">
        <div className={card}>
          <img className={sizeImg} src={WebProjectsImg} />
          <div>
            <h1>Web</h1>
            <h2 className="text-xl">Projects</h2>
            <h3 className="hover:-rotate-12 transition delay-100">➜</h3>
          </div>
        </div>
      </Link>
      <Link to="/proyectosMovil">
        <div className={card}>
          <img className={sizeImg} src={MovilProjectsImg} />
          <div>
            <h1>Movil</h1>
            <h2 className="text-xl">Projects</h2>
            <h3 className="hover:-rotate-12 transition delay-100">➜</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Proyectos;
