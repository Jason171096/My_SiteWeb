import React from 'react'
import SectionTop from '@containers/SectionTop'

export interface LayoutProps  { 
    children: React.ReactNode
 }

const Layout = (props: LayoutProps) => {
    return (
        <div className="bg-primary-blue">
        <div className="w-screen h-screen overflow-auto">
          <div className="flex flex-col">
            <SectionTop />
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default Layout
