import Image from 'next/image'
import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import StudyGroup from '../../assets/study-group.svg';
import VoiceConnected from '../../assets/voice-connected-chilling.svg';
import Animals from '../../assets/animal-crossing.svg';
import Chilling from '../../assets/chilling.svg';
import Stars from '../../assets/stars.svg'

interface HeroDataType {
  id: number,
  img: string,
  heading: string,
  para: string,
  alternate: boolean,
  grayBg: boolean,
}

const heroData: HeroDataType[] = [
  {
    id: 1,
    img: StudyGroup,
    heading: "Create an invite-only place where you belong",
    para: "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
    alternate: false,
    grayBg: false,
  },
  {
    id: 2,
    img: VoiceConnected,
    heading: "Where hanging out is easy",
    para: "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
    alternate: true,
    grayBg: true,
  },
  {
    id: 3,
    img: Animals,
    heading: "From few to a fandom",
    para: "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
    alternate: false,
    grayBg: false,
  },
]

const HeroSection: React.FC = () => {
  return (
    <>
      {heroData.map((element) => {
        return (
          <div key={element.id} className={`lg:max-w-full py-[5rem] px-8 w-full flex items-center justify-center lg:gap-[8rem] flex-col ${element.alternate === true ? `md:flex-row-reverse` : `md:flex-row`} ${element.grayBg === true && `bg-[#F6F6F6]`}`}>
            <Image src={element.img} alt="Study Group" className='flex w-1/4' />
            <div className="info flex mt-[2rem] sm:mt-0 xl:w-[25vw] md:w-1/3 items-center justify-center flex-col">
              <h2 className="font-heading-2 xl:text-[3rem] xl:leading-[4rem] lg:text-[3vw] sm:text-[3vw] text-[4vw] text-black mb-[1rem] lg:leading-[4vw]">{element.heading}</h2>
              <p className='text-xl font-thin leading-7 text-black opacity-90'>{element.para}</p>
            </div>
          </div>
        )
      })}
      <div className='bg-[#F6F6F6] py-[5rem] lg:max-w-full px-8 w-full flex items-center justify-center lg:gap-4 flex-col-reverse'>
        <div className="relative downB">
          <Image src={Stars} alt="Stars" className='absolute bottom-0-z-10' />
          <h2 className='relative z-10 font-heading-2 text-2xl font-extrabold text-center -mt-6'>Ready to start your journey?</h2>
          <div className="flex items-center justify-center">
            <button className="text-center mt-[3rem] py-[0.8rem] px-8 capitalize font-medium text-xl text-white rounded-3xl bg-blurple hover:opacity-80 hover:shadow-xl transition-all duration-200 ease-in"><FileDownloadOutlinedIcon fontSize="medium" /><span className="ml-2 pt-[0.8rem]">Download for windows</span></button>
          </div>
        </div>
        <Image src={Chilling} alt="Chilling" />
        <div className="w-[80%] flex items-center justify-center flex-col">
          <h2 className='font-heading xl:text-[3rem] xl-leading-[4rem] lg:text-[3vw] sm:text-[3vw] text-[4vw] text-black mb-[1rem] lg:-leading-[4vw] uppercase'>reliable tech for staying close</h2>
          <p className='text-xl font-thin leading-7 text-black opacity-90 text-center'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        </div>
      </div>
    </>
  )
}

export default HeroSection