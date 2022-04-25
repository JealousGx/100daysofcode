import React from "react"
import ChannelsContainer from "./ChannelsContainer"
import ChatContainer from "./ChatContainer"
import { ChatbarContainer } from "./styles"

import { useAppSelector } from "../../../redux/hooks"

const Index: React.FC = (): JSX.Element => {
  const activeServer = useAppSelector((state) => state.server.serverName)
  return (
    <ChatbarContainer activeServer={activeServer}>
      <ChannelsContainer />
      <ChatContainer />
    </ChatbarContainer>
  )
}

export default Index
