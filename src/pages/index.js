import React from "react"
import SectionLeft from "../components/SectionLeft"
import SectionRight from "../components/SectionRight"
// markup
const IndexPage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary-blue w-screen h-screen justify-between">
      <SectionLeft/>
      <SectionRight/>
    </div>
  )
}

export default IndexPage
