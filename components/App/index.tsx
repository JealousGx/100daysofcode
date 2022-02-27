import React from "react"
import Sidebar from "./Sidebar"
import Chatbar from "./Chatbar"
import Statusbar from "./Statusbar"

const Index = () => {
  return (
    <div>
      <Sidebar>
        <Chatbar />
        <Statusbar />
      </Sidebar>
    </div>
  )
}

export default Index
