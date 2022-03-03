import Image from "next/image"
import React from "react"

import Logo from "../../assets/server_logo.png"
import { data } from "./data"
import { StatusContainer } from "./styles"

const Index = () => {
  const colors = [
    "#5d8aa8",
    "#e52b50",
    "#9966cc",
    "#915c83",
    "#8db600",
    "#7fffd4",
  ]
  const defaultImage = () => {
    const randomColorIndex = Math.floor(Math.random() * 7)
    ;<div className={`w-4 h-3 bg-[${colors[randomColorIndex]}]`}>
      <Image src={Logo} alt="Profile" />
      Lorem, ipsum.
    </div>
  }
  return (
    <StatusContainer>
      {data.ranks.map((rank, index) => {
        return (
          <div className="py-4 text-gray-text font-bold uppercase" key={index}>
            {rank}
          </div>
        )
      })}
    </StatusContainer>
  )
}

export default Index
