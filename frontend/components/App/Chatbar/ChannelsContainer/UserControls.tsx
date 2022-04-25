import React from "react"
import Image from "next/image"

import { useAppSelector } from "../../../../redux/hooks"

import Logo from "../../../assets/Discord-Logo-White.png"
import { UserControls } from "./styles"
import SettingsIcon from "@mui/icons-material/Settings"

interface Props {
  displaySettings: boolean
  setDisplaySettings: React.Dispatch<React.SetStateAction<boolean>>
}

const UserControlsWrapper: React.FC<Props> = ({
  displaySettings,
  setDisplaySettings,
}): JSX.Element => {
  const currentUsername = useAppSelector((state) => state.user.userName) // Get current user's username

  // Generator a random id between 1000 and 10000 for user (To be modified after implementing backend)
  const randomNum = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)

  return (
    <UserControls>
      <div className="flex">
        <div className="w-8 h-8 p-[0.4rem] mr-2 bg-blue-600 hover:opacity-70 cursor-pointer flex items-center justify-center rounded-full group-hover:opacity-100">
          <Image src={Logo} alt="Profile Logo" width={20} height={20} />
        </div>
        <div className="flex flex-col leading-[1rem] text-white tracking-wide font-bold cursor-pointer">
          {currentUsername ? currentUsername : "Jealous"}
          <span className="text-[#b9bbbe] text-[0.85rem] font-normal">
            <span>#</span>
            {randomNum}
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
  )
}

export default UserControlsWrapper
