import React from "react";
import SectionTop from "@containers/SectionTop";
import Cursor from "@components/Cursor";
import { Script } from "gatsby";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
        
        <div className="bg-primary-blue">
          <div className="w-screen h-screen overflow-auto">
            <div className="flex flex-col">
              <Cursor />  
              <SectionTop />
              {props.children}
            </div>
          </div>
        </div>
        
    </>
  );
};

export default Layout;
