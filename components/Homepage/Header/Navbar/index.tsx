import Image from "next/image"
import React, { useState } from "react"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import hamburger from "../../../assets/hamburger.svg"
import logo from "../../../assets/Logos/2_Full Logo Lockup_Small/RGB/small_logo_white_RGB.svg"
import darkLogo from "../../../assets/Logos/2_Full Logo Lockup_Small/RGB/small_logo_black_RGB.svg"
import Link from "next/link"

const Navbar: React.FC = () => {
  const [displayNav, setDisplayNav] = useState<boolean>(false)

  const handleNavbar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    setDisplayNav(displayNav === false ? true : false)
  }

  return (
    <div className="xl:px-[20vw] lg:px-[5rem] min-w-full flex items-center justify-between">
      <Image
        src={logo}
        alt="Discord Logo"
        width={124}
        height={24}
        className="cursor-pointer"
      />
      <div className="lg:block hidden">
        <ul className="flex items-center justify-center">
          <li className="capitalize mr-8 text-white font-[640] text-[0.95rem] cursor-pointer hover:underline">
            download
          </li>
          <li className="capitalize mr-8 text-white font-[640] text-[0.95rem] cursor-pointer hover:underline">
            nitro
          </li>
          <li className="capitalize mr-8 text-white font-[640] text-[0.95rem] cursor-pointer hover:underline">
            safety
          </li>
          <li className="capitalize mr-8 text-white font-[640] text-[0.95rem] cursor-pointer hover:underline">
            support
          </li>
          <li className="capitalize mr-8 text-white font-[640] text-[0.95rem] cursor-pointer hover:underline">
            blog
          </li>
          <li className="capitalize mr-8 text-white font-[640] text-[0.95rem] cursor-pointer hover:underline">
            careers
          </li>
        </ul>
      </div>
      <div className="right-wrapper h-full flex flex-row items-center justify-center">
        <div className="py-2 px-4 font-semibold text-sm rounded-3xl hover:shadow-xl hover:text-blurple transition-all duration-200 ease-linear bg-white cursor-pointer mr-4">
          <Link href="/auth/login">Login</Link>
        </div>
        <div className="hamburger sm:block lg:hidden">
          <Image
            onClick={(event) => handleNavbar(event)}
            src={hamburger}
            alt="Hamburger"
            className="cursor-pointer filter invert"
          />
          <div
            className={`${
              displayNav === true
                ? `fixed inset-0 z-[100] opacity-100 w-[100%] h-[100%]`
                : `opacity-0`
            } bg-[#0000008c]`}
          >
            <div
              className={`${
                displayNav === true
                  ? `absolute top-0 right-0 rounded-l-lg z-40 w-[90%] md:w-[40%] max-w-md h-full bg-white`
                  : `hidden`
              }`}
            >
              <div className="p-7 flex items-center justify-between">
                <Image
                  src={darkLogo}
                  alt="Dark Logo"
                  width={124}
                  height={24}
                  className="cursor-pointer"
                />
                <div
                  onClick={(event) => handleNavbar(event)}
                  className="relative closeIcon p-3 mr-3 cursor-pointer"
                >
                  <span className="absolute z-50 w-[1.25rem] h-[0.125rem] rotate-45 bg-black"></span>
                  <span className="absolute z-50 w-[1.25rem] h-[0.125rem] rotate-[135deg] bg-black"></span>
                </div>
              </div>
              <div className="overflow-y-auto p-1 pl-7 w-full">
                <ul className="w-[90%] border-t-[0.1rem]">
                  <li className="mt-[1.05rem] px-4 py-[0.5rem] w-full cursor-pointer rounded-lg font-normal text-md capitalize text-[#00B5F4] bg-[#0000000a]">
                    <span className="hover:underline">home</span>
                  </li>
                  <li className="mt-[0.05rem] px-4 py-[0.5rem] w-full cursor-pointer rounded-lg font-normal text-md text-gray-700 capitalize active:text-[#00B5F4] active:bg-[#0000000a]">
                    <span className="hover:underline">download</span>
                  </li>
                  <li className="mt-[0.05rem] px-4 py-[0.5rem] w-full cursor-pointer rounded-lg font-normal text-md text-gray-700 capitalize active:text-[#00B5F4] active:bg-[#0000000a]">
                    <span className="hover:underline">nitro</span>
                  </li>
                  <li className="mt-[0.05rem] px-4 py-[0.5rem] w-full cursor-pointer rounded-lg font-normal text-md text-gray-700 capitalize active:text-[#00B5F4] active:bg-[#0000000a]">
                    <span className="hover:underline mr-[0.25rem]">
                      safety <ArrowForwardIosIcon fontSize="small" />
                    </span>
                  </li>
                  <li className="mt-[0.05rem] px-4 py-[0.5rem] w-full cursor-pointer rounded-lg font-normal text-md text-gray-700 capitalize active:text-[#00B5F4] active:bg-[#0000000a]">
                    <span className="hover:underline mr-[0.25rem]">
                      mod academy <ArrowForwardIosIcon fontSize="small" />
                    </span>
                  </li>
                  <li className="mt-[0.05rem] px-4 py-[0.5rem] w-full cursor-pointer rounded-lg font-normal text-md text-gray-700 capitalize active:text-[#00B5F4] active:bg-[#0000000a]">
                    <span className="hover:underline">support</span>
                  </li>
                  <li className="mt-[0.05rem] px-4 py-[0.5rem] w-full cursor-pointer rounded-lg font-normal text-md text-gray-700 capitalize active:text-[#00B5F4] active:bg-[#0000000a]">
                    <span className="hover:underline">blog</span>
                  </li>
                  <li className="mt-[0.05rem] px-4 py-[0.5rem] w-full cursor-pointer rounded-lg font-normal text-md text-gray-700 capitalize active:text-[#00B5F4] active:bg-[#0000000a]">
                    <span className="hover:underline">careers</span>
                  </li>
                  <div className="flex items-center justify-center">
                    <button className="absolute bottom-5 py-2 w-[80%] capitalize font-medium text-sm text-white rounded-3xl bg-blurple hover:opacity-80 transition-opacity duration-200 ease-in">
                      <FileDownloadOutlinedIcon fontSize="medium" />
                      <span className="ml-2 pt-[0.8rem]">
                        Download for windows
                      </span>
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
