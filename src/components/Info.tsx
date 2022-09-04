import React from 'react';
import { Link } from 'gatsby'

const Info = () => {
  return (
    <div className="mx-10 lg:mx-24 pb-5">
      <div className=" text-white pb-3">
        <h1 className="text-xl lg:text-2xl ">Hola soy</h1>
        <h2 className="text-3xl lg:text-4xl font-bold">Jason Martinez</h2>
        <p className="text-lg lg:text-xl">Full-Stack Developer y Web Designer</p>
        <br/>
        <Link to="/sobre-mi" className="bg-redKing px-7 py-3 rounded-md text-xl shadow-2xl hover:bg-red-600 transition delay-100">Ver más</Link>
      </div>
    </div>
  );
};

export default Info;
