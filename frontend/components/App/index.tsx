import React from "react"
import Sidebar from "./Sidebar"
import Chatbar from "./Chatbar"
import Statusbar from "./Statusbar"

const Index: React.FC = (): JSX.Element => {
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
