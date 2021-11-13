import React from "react";

const Card = () => {
    const cardStyle = "relative flex m-auto w-[300px] h-[250px] sm:w-[400px] rounded-xl bg-gradient-to-tr from-violetMap to-blueMap"
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-4 gap-10">
      <div className={cardStyle}></div>
      <div className={cardStyle}></div>
    </div>
  );
};

export default Card;
