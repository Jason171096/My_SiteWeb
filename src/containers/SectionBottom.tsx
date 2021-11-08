import React from 'react';
import Info from "../components/Info";
import Picture from "../components/Picture";

const SectionBottom = () => {
  return (
    <div className="relative max-w-screen-xl">
      <div className="flex flex-col">
        <Picture />
        <Info />
      </div>
    </div>
  );
};

export default SectionBottom;
