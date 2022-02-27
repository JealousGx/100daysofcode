import Image from "next/image"
import React, { useState } from "react"
import Logo from "../../assets/Discord-Logo-White.png"
import ServerLogo from "../../assets/server_logo.png"
import SecondServer from "../../assets/server2.png"
import ThirdServer from "../../assets/server3.png"
import AddIcon from "@mui/icons-material/Add"
import ExploreIcon from "@mui/icons-material/Explore"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"

import { ServerButton } from "./styles"

interface serversType {
  id: number
  btnText: string
  img: StaticImageData
  type: string
  activeClass?: boolean | false
}

const servers: serversType[] = [
  {
    id: 1,
    btnText: "Jealous Server",
    img: ServerLogo,
    type: "server",
  },
  {
    id: 2,
    btnText: "Web Development Help",
    img: SecondServer,
    type: "server",
  },
  {
    id: 3,
    btnText: "👋 Football Updates",
    img: ThirdServer,
    type: "server",
    activeClass: true,
  },
]

const Index = ({ children }: any) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-[4.5rem] h-full px-[0.75rem] py-[0.75rem] bg-black">
        <div className="flex items-center justify-center flex-col">
          <ServerButton btnText="Home" type="home" onClick={() => setActiveTab(4)} className={activeTab === 4 ? 'active' : ''} >
            <Image src={Logo} alt="Discord Logo" width={26} height={29} />
          </ServerButton>
          <span className="w-[1.925rem] h-[0.125rem] my-2 bg-login-black opacity-70" />
        </div>
        <div className="flex items-center justify-center flex-col">
          {servers.map((server) => {
            return (
              <ServerButton
                key={server.id}
                btnText={server.btnText}
                type={server.type}
                className={server.id === activeTab ? `active` : ``}
                onClick={() => setActiveTab(server.id)}
              >
                <Image
                  src={server.img}
                  alt={server.btnText}
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
      </div>
      {children}
    </div>
  )
}

export default Index
