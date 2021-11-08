import React from 'react';
import SectionTop from "@containers/SectionTop";
import SectionBottom from "@containers/SectionBottom";
// import { Cursor } from "../components/Cursor";
// markup
const IndexPage = () => {
  return (
    <>
      <div className="bg-primary-blue">
        <div className="w-screen h-screen overflow-auto">
          <div className="flex flex-col">
            <SectionTop />
            <SectionBottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
