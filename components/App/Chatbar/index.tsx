import React from "react"
import Image from "next/image"
import {
  ChatbarContainer,
  ChannelContainer,
  ChannelInfo,
  Channels,
} from "./styles"

import Hash from "../../assets/hash.png"
import { serverData } from "./data"

const Index = () => {
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
          <div>
            <Image src={Hash} alt="Hash" className="text-gray-text" />
          </div>
          {/* TODO: Map through the data and render the categories and the respective channels */}
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
