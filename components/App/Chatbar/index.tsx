import React, { useState } from "react"
import Image from "next/image"
import {
  ChatbarContainer,
  ChannelContainer,
  ChannelInfo,
  Channels,
  Channel,
  UserControls,
} from "./styles"

import Logo from "../../assets/Discord-Logo-White.png"
import TagIcon from "@mui/icons-material/Tag"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import { serverData } from "./data"

const Index = () => {
  const [displayCategoryChannels, setDisplayCategoryChannels] =
    useState<string>("")
  const [activeChannel, setActiveChannel] = useState<number>()

  const handleCategoryChannels = (category: string) => {
    if (displayCategoryChannels === category) {
      setDisplayCategoryChannels("")
    } else {
      setDisplayCategoryChannels(category)
    }
  }

  return (
    <ChatbarContainer>
      <ChannelContainer>
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
          {serverData.categories.map((category, index) => {
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
                  <p className="text-sm">{category}</p>
                </div>
                {serverData.channels.map((channel) => {
                  return (
                    channel.category === category &&
                    !(displayCategoryChannels === category) && (
                      <Channel
                        type={channel.category}
                        onClick={() => setActiveChannel(channel.id)}
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
          })}
          {/* User Controls: */}
          {/* TODO: After implementing the backend, change the profile and the user (id) according to the logged in user */}
          <UserControls>
            <div className="w-8 h-8 p-[0.4rem] mr-2 bg-blue-600 hover:opacity-70 cursor-pointer flex items-center justify-center rounded-full group-hover:opacity-100">
              <Image src={Logo} alt="Profile Logo" width={20} height={20} />
            </div>
            <div className="flex flex-col leading-[1rem] text-white tracking-wide font-bold cursor-pointer">
              Jealous
              <span className="text-[#b9bbbe] text-[0.675rem] font-normal">
                #0000
              </span>
            </div>
          </UserControls>
        </Channels>
      </ChannelContainer>
      <div>
        Chatbar Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        perspiciatis repudiandae quam, modi at cumque. Quae doloremque illum,
        laudantium laboriosam dolores eligendi vel hic ipsum, quas facere sunt
        distinctio illo atque exercitationem. Aliquid minima voluptas architecto
        fugiat illum ipsum quasi voluptate fugit at assumenda! Error consequatur
        nobis dignissimos vel enim laboriosam, doloribus corrupti aperiam
        dolores possimus omnis, nesciunt quis. Possimus laboriosam cumque
        aliquid veritatis, sunt doloremque optio maiores illo doloribus odit
        aspernatur dolores voluptates quod quisquam ab laborum illum inventore!
        Cumque ea facere doloremque aspernatur autem, hic, id natus dolorum
        beatae ipsam facilis assumenda eligendi officiis esse tenetur quam
        molestiae.
      </div>
    </ChatbarContainer>
  )
}

export default Index
