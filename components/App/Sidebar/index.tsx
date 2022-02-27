import Image from "next/image"
import React, { useState } from "react"
import Logo from "../../assets/Discord-Logo-White.png"
import ServerLogo from "../../assets/server_logo.png"
import SecondServer from "../../assets/server2.png"
import ThirdServer from "../../assets/server3.png"
import AddIcon from "@mui/icons-material/Add"
import ExploreIcon from "@mui/icons-material/Explore"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"

const Index = ({ children }: any) => {
  // const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-[4.5rem] h-full px-[0.75rem] py-[0.75rem] bg-black">
        <div className="flex items-center justify-center flex-col">
          <div
            className={`home w-12 h-12 p-1 bg-login-black rounded-full flex items-center justify-center cursor-pointer hover:bg-blurple hover:rounded-2xl active:rounded-2xl transition-all duration-150 ease-in-out`}
          >
            <Image src={Logo} alt="Discord Logo" width={26} height={29} />
          </div>
          <span className="w-[1.925rem] h-[0.125rem] my-2 bg-login-black opacity-70" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <div
            className={`server1 w-12 h-12 p-1 mb-[0.75rem] bg-off-white rounded-full flex items-center justify-center cursor-pointer hover:rounded-2xl active:rounded-2xl transition-all duration-150 ease-in-out`}
          >
            <Image src={ServerLogo} alt="Discord Logo" width={26} height={29} />
          </div>
          <div
            className={`server2 w-12 h-12 p-1 mb-[0.75rem] bg-off-white rounded-full flex items-center justify-center cursor-pointer hover:rounded-2xl active:rounded-2xl transition-all duration-150 ease-in-out`}
          >
            <Image
              src={SecondServer}
              alt="Discord Logo"
              width={26}
              height={29}
            />
          </div>
          <div
            className={`server3 w-12 h-12 p-1 mb-[0.75rem] bg-off-white rounded-2xl flex items-center justify-center cursor-pointer hover:rounded-2xl active:rounded-2xl transition-all duration-250 ease-in-out`}
          >
            <Image
              src={ThirdServer}
              alt="Discord Logo"
              width={26}
              height={29}
            />
          </div>
          <div
            className={`icons w-12 h-12 p-1 mb-[0.75rem] bg-login-black text-status-green rounded-full flex items-center justify-center cursor-pointer hover:rounded-2xl hover:bg-status-green hover:text-off-white transition-all duration-250 ease-in-out`}
          >
            <AddIcon fontSize="medium" />
          </div>
          <div
            className={`explore w-12 h-12 p-1 mb-[0.75rem] bg-login-black text-status-green rounded-full flex items-center justify-center cursor-pointer hover:rounded-2xl hover:bg-status-green hover:text-off-white transition-all duration-250 ease-in-out`}
          >
            <ExploreIcon fontSize="medium" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <span className="w-[1.925rem] h-[0.125rem] my-2 bg-login-black opacity-70" />
            <div
              className={`download w-12 h-12 p-1 bg-login-black text-status-green rounded-full flex items-center justify-center cursor-pointer hover:bg-status-green hover:text-off-white hover:rounded-2xl active:rounded-2xl transition-all duration-150 ease-in-out`}
            >
              <FileDownloadOutlinedIcon fontSize="medium" />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Index
