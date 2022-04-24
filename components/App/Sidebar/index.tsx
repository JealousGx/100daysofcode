import Head from "next/head"
import Image from "next/image"
import React, { useState } from "react"

import Logo from "../../assets/Discord-Logo-White.png"
import AddIcon from "@mui/icons-material/Add"
import ExploreIcon from "@mui/icons-material/Explore"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"

import { servers } from "../data"
import { ServerButton, SidebarContainer } from "./styles"
import { setServer } from "../../../redux/Reducers/serverReducer"
import { useAppDispatch } from "../../../redux/hooks"
const Index: React.FC = ({ children }): JSX.Element => {
  const dispatch = useAppDispatch()
  const [activeTab, setActiveTab] = useState<number>(servers.length + 1)

  // Function to set the active server through Redux
  const setActiveServer = (serverID: number, serverName: string) => {
    setActiveTab(serverID)
    dispatch(
      setServer({
        serverID,
        serverName,
      })
    )
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-row">
        <SidebarContainer>
          <div className="flex items-center justify-center flex-col">
            <ServerButton
              btnText="Home"
              type="home"
              onClick={() => setActiveServer(servers.length + 1, "Home")}
              className={activeTab === servers.length + 1 ? "active" : ""}
            >
              <Image src={Logo} alt="Discord Logo" width={26} height={29} />
            </ServerButton>
            <span className="w-[1.925rem] h-[0.125rem] my-2 bg-login-black opacity-70" />
          </div>
          <div className="flex items-center justify-center flex-col">
            {servers.map((server) => {
              return (
                <ServerButton
                  key={server.id}
                  btnText={server.serverName}
                  type={server.type}
                  className={server.id === activeTab ? `active` : ``}
                  onClick={() => setActiveServer(server.id, server.serverName)}
                >
                  <Image
                    src={server.serverImage}
                    alt={server.serverName}
                    width={26}
                    height={29}
                  />
                </ServerButton>
              )
            })}
            <ServerButton type="discordBtn" btnText="Add a server">
              <AddIcon fontSize="medium" />
            </ServerButton>
            <ServerButton type="discordBtn" btnText="Explore Public Servers">
              <ExploreIcon fontSize="medium" />
            </ServerButton>
            <div className="flex items-center justify-center flex-col">
              <span className="w-[1.925rem] h-[0.125rem] mb-2 bg-login-black opacity-70" />
              <ServerButton type="discordBtn" btnText="Download Discord">
                <FileDownloadOutlinedIcon fontSize="medium" />
              </ServerButton>
            </div>
          </div>
        </SidebarContainer>
        {children}
      </div>
    </>
  )
}

export default Index
