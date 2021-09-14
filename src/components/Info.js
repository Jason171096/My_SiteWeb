import React from "react";
import { Link } from 'gatsby'


const Info = () => {
  return (
    <div className="px-10 lg:px-24">
      <div className=" text-white">
        <h1 className="text-2xl lg:text-3xl ">Hola soy</h1>
        <h2 className="text-4xl lg:text-5xl font-bold">Jason Martinez</h2>
        <p className="text-xl lg:text-2xl">Frontend Developer y Web Designer</p>
        <br/>
        <Link to="/sobre-mi" className="bg-redKing px-7 py-3 rounded-md text-xl cursor-pointer shadow-2xl hover:bg-red-600 transition delay-100">Ver más</Link>
      </div>
    </div>
  );
};

export default Info;
