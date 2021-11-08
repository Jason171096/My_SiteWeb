import React from 'react';
import SectionTop from "@containers/SectionTop"
import Proyectos from "@components/Proyectos"

// markup
export default function proyectos() {
  return (
    <div className="flex flex-col bg-primary-blue w-screen h-screen">
      <SectionTop/>
      <Proyectos/>
    </div>
  )
}