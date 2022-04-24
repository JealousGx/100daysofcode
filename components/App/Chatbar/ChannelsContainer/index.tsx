import React, { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"

import Settings from "./Settings"
import {
  ChannelContainer,
  ChannelInfo,
  Channels,
  Channel,
  UserControls,
} from "./styles"
import { servers } from "../../data"

import { useAppSelector } from "../../../../redux/hooks"

import Logo from "../../../assets/Discord-Logo-White.png"
import TagIcon from "@mui/icons-material/Tag"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import SettingsIcon from "@mui/icons-material/Settings"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"

const ChannelsContainer: React.FC = (): JSX.Element => {
  const [activeChannel, setActiveChannel] = useState<number>()
  const [activeChannelName, setActiveChannelName] = useState<string>("Discord")
  const [displayCategoryChannels, setDisplayCategoryChannels] =
    useState<string>("")
  const [displaySettings, setDisplaySettings] = useState<boolean>(false)

  const router = useRouter()

  // Get active server name
  const activeServer = useAppSelector((state) => state.server.serverName)

  // Filter out the server with the activeServer name
  const serverChannels = servers.filter(
    (server) => server.serverName === activeServer
  )

  const handleCategoryChannels = (category: string) => {
    if (displayCategoryChannels === category) {
      setDisplayCategoryChannels("")
    } else {
      setDisplayCategoryChannels(category)
    }
  }

  const handleChannel = (id: number, name: string) => {
    setActiveChannelName(name)
    setActiveChannel(id)
    router.push(`/channels/${id}`)
  }

  return (
    <>
      <Head>
        <title>{activeChannelName && activeChannelName}</title>
      </Head>
      <ChannelContainer>
        {/* User Control Panel (User Account Settings Component) */}
        {displaySettings && (
          <Settings
            displaySettings={displaySettings}
            setDisplaySettings={setDisplaySettings}
          />
        )}
        <ChannelInfo>
          <h1 className="pt-8 pb-4 font-heading-2 text-xl tracking-wide text-center text-off-white">
            Jealous
          </h1>
          <p className="px-4 font-heading-2 text-[0.775rem] tracking-wide text-center text-off-white">
            Server for fun!
            <br /> Enjoy your stay here.
          </p>
        </ChannelInfo>
        <Channels>
          {servers &&
            serverChannels.map((serverData) =>
              serverData.categories.map((category, index) => {
                return (
                  <div key={index}>
                    <div
                      className="pt-3 flex items-center uppercase cursor-pointer hover:text-[#DCDDDE]"
                      onClick={() => handleCategoryChannels(category)}
                    >
                      <ArrowDropDownIcon
                        className={`font-[0.25rem] ${
                          displayCategoryChannels === category && `-rotate-90`
                        } transition-transform duration-250ms ease-linear`}
                      />
                      <p className="text-sm font-bold">{category}</p>
                    </div>
                    {serverData.channels.map((channel) => {
                      return (
                        channel.category === category &&
                        !(displayCategoryChannels === category) && (
                          <Channel
                            key={channel.id}
                            type={channel.category}
                            onClick={() =>
                              handleChannel(channel.id, channel.title)
                            }
                            className={`${
                              activeChannel === channel.id && `active`
                            }`}
                          >
                            {channel.category === "voice-chat" ? (
                              <VolumeUpIcon />
                            ) : (
                              <TagIcon className="-skew-x-[8deg]" />
                            )}
                            {channel.title}
                          </Channel>
                        )
                      )
                    })}
                  </div>
                )
              })
            )}
          {/* User Controls: */}
          {/* TODO: After implementing the backend, change the profile and the user (id) according to the logged in user */}
          <UserControls>
            <div className="flex">
              <div className="w-8 h-8 p-[0.4rem] mr-2 bg-blue-600 hover:opacity-70 cursor-pointer flex items-center justify-center rounded-full group-hover:opacity-100">
                <Image src={Logo} alt="Profile Logo" width={20} height={20} />
              </div>
              <div className="flex flex-col leading-[1rem] text-white tracking-wide font-bold cursor-pointer">
                Jealous
                <span className="text-[#b9bbbe] text-[0.675rem] font-normal">
                  #0000
                </span>
              </div>
            </div>
            <div className="p-1 hover:bg-[#42464D] rounded-[0.1875rem] transition-all ease-linear duration-[25ms]">
              <SettingsIcon
                className="text-white cursor-pointer"
                onClick={() => setDisplaySettings(!displaySettings)}
              />
            </div>
          </UserControls>
        </Channels>
      </ChannelContainer>
    </>
  )
}

export default ChannelsContainer
