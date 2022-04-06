import React from "react"
import ChannelsContainer from "./ChannelsContainer"
import ChatContainer from "./ChatContainer"
import { ChatbarContainer } from "./styles"

const Index = () => {
  return (
    <ChatbarContainer>
      <ChannelsContainer />
      <ChatContainer />
    </ChatbarContainer>
  )
}

export default Index
