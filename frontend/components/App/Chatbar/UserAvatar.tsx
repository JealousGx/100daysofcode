import React from "react"
import Image from "next/image"
import { AvatarContainer } from "./styles"

import Logo from "../../assets/Discord-Logo-White.png"

interface Props {
  bgColor: string
}

const UserAvatar: React.FC<Props> = ({ bgColor }): JSX.Element => {
  return (
    <AvatarContainer bgColor={bgColor} className="cursor-pointer">
      <Image src={Logo} alt="Profile Logo" width={24} height={24} />
    </AvatarContainer>
  )
}

export default UserAvatar
