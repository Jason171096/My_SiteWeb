import React from "react";
import SectionTop from "../components/SectionTop";
import SectionBottom from "../components/SectionBottom";
import Cursor from "../components/Cursor";
// markup
const IndexPage = () => {
  return (
    <>
      <div className="flex flex-col bg-primary-blue w-full h-screen">
        <SectionTop />
        <SectionBottom />
      </div>
    </>
  );
};

export default IndexPage;
