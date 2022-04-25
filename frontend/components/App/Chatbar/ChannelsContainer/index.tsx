import React, { useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import UserControlsWrapper from "./UserControls"
import Settings from "./Settings"
import { ChannelContainer, ChannelInfo, Channels, Channel } from "./styles"
import { servers } from "../../data"

import { useAppSelector, useAppDispatch } from "../../../../redux/hooks"
import { setChannel } from "../../../../redux/Reducers/channelReducer"

import TagIcon from "@mui/icons-material/Tag"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"

const ChannelsContainer: React.FC = (): JSX.Element => {
  const [activeChannel, setActiveChannel] = useState<number>()
  const [activeChannelName, setActiveChannelName] = useState<string>("Discord")
  const [displayCategoryChannels, setDisplayCategoryChannels] =
    useState<string>("")
  const [displaySettings, setDisplaySettings] = useState<boolean>(false)

  const router = useRouter()
  const dispatch = useAppDispatch()

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
    dispatch(
      setChannel({
        channelID: id,
        channelName: name,
      })
    )
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
          <UserControlsWrapper
            setDisplaySettings={setDisplaySettings}
            displaySettings={displaySettings}
          />
        </Channels>
      </ChannelContainer>
    </>
  )
}

export default ChannelsContainer
