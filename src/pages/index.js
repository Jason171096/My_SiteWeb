import React from "react"
import SectionTop from "../components/SectionTop"
import SectionBottom from "../components/SectionBottom"
// markup
const IndexPage = () => {
  return (
    <div className="flex flex-col bg-primary-blue w-screen h-screen">
      <SectionTop/>
      <SectionBottom/>
    </div>
  )
}

export default IndexPage
