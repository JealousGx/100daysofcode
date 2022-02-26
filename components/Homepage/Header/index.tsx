import React from "react"
import Image from "next/image"
import Navbar from "./Navbar"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import Chilling1 from "../../assets/hero-chilling.svg"
import Chilling2 from "../../assets/hero-chilling-2.svg"
import Clouds from "../../assets/clouds.svg"

const Header: React.FC = () => {
  return (
    <div className="relative z-10 lg:py-5 pt-4 px-6 lg:h-[94vh] h-[50rem] bg-[#404eed] overflow-hidden">
      <Navbar />
      <div className="hidden md:block absolute -bottom-[0.4rem] -z-10 min-w-max">
        <Image src={Clouds} alt="Clouds" />
      </div>
      <div className="w-full -z-10 mt-[4rem] lg:mt-[7rem] flex items-center lg:justify-center flex-col-reverse md:flex-row">
        <div className="lg:block md:hidden block absolute -bottom-[0.4rem] -left-[20%] lg:-left-[40%] xl:left-0 max-w-full z-1">
          <Image src={Chilling1} alt="Chilling" />
        </div>
        <div className="md:w-[40rem] lg:w-[50rem] w-full text-white flex lg:items-center items-start justify-center flex-col text-left lg:text-center z-10">
          <h1 className="font-heading uppercase text-[6vw] md:text-5xl text-center">
            Imagine a place...
          </h1>
          <p className="font-body leading-8 xl:w-[45rem] md:mt-[3rem] mt-[1.5rem] md:text-[1.3rem] text-[1rem]">
            <span className="ml-3">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community.{" "}
            </span>
            Where just you and a handful of friends can spend time together. A
            place that makes it easy to talk every day and hang out more often.
          </p>
          <div className="z-10 md:mt-[2.025rem] mt-[2rem] flex lg:items-center lg:justify-center items-start justify-start flex-col gap-6 lg:flex-row">
            <button className="py-[0.55rem] px-8 bg-white lg:text-[1rem] xl:text-[1.25rem] sm:text-xl font-semibold text-black rounded-[2rem] hover:shadow-2xl transition-all duration-250 ease-in hover:text-blurple">
              <FileDownloadOutlinedIcon
                fontSize="medium"
                className="mr-[0.5rem]"
              />
              Download for Windows
            </button>
            <button className="py-[0.55rem] px-8 bg-black lg:text-[1rem] xl:text-[1.25rem] sm:text-xl font-semibold text-white rounded-[2rem] hover:shadow-2xl hover:bg-gray-700 transition-all duration-250 ease-in">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="chilling2 hidden md:block sm:hidden absolute -bottom-[0.4rem] -right-[20%] lg:-right-[25%] xl:right-0 -z-10">
          <Image src={Chilling2} alt="Chilling" />
        </div>
      </div>
    </div>
  )
}

export default Header
