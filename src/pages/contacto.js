import React from "react"
import Contacto from "../components/Contacto"
import SectionTop from "../components/SectionTop"

// markup
export default function contacto() {
  return (
    <div className="flex flex-col bg-primary-blue w-screen h-screen">
      <SectionTop/>
      <Contacto/>
    </div>
  )
}