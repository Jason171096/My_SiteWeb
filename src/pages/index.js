import React from "react";
import SectionTop from "../components/SectionTop";
import SectionBottom from "../components/SectionBottom";
import Cursor from "../components/Cursor";
// markup
const IndexPage = () => {
  return (
    <>
      <div className="flex flex-col bg-primary-blue w-screen h-screen cursor-image">
        <SectionTop />
        <SectionBottom />
      </div>
    </>
  );
};

export default IndexPage;
