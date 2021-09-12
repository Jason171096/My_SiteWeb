import React from "react"
import SectionTop from "../components/SectionTop"
import SobreMi from "../components/SobreMi"

// markup
export default function sobremi() {
  return (
    <div className="flex flex-col bg-primary-blue w-screen h-screen">
      <SectionTop/>
      <SobreMi/>
    </div>
  )
}