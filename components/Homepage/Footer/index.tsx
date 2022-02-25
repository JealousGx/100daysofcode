import Image from 'next/image';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../../assets/Logos/2_Full Logo Lockup_Small/RGB/small_logo_white_RGB.png';
import USAFlag from '../../assets/usa_flag.png';

const Footer: React.FC = () => {
  return (
    <div className='bg-black px-[2rem] md:px-[6rem] xl:px-[15vw] py-[5rem]'>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2rem] pb-8">
        <div className="col1 col-span-2 md:col-span-1 lg:w-[90%] lg:col-span-1">
          <h1 className='font-heading text-3xl font-bold uppercase text-blurple leading-8'>Imagine a place</h1>
          <div className="countyLag flex items-center justify-start gap-3 mt-6 cursor-pointer">
            <Image src={USAFlag} alt="USA Flag" width={24} height={16} />
            <div className="languages text-white text-sm"><span>English, USA</span> <KeyboardArrowDownIcon fontSize="small" /></div>
          </div>
          <div className="socialIcons mt-6">
            <TwitterIcon fontSize="medium" className='text-slate-50 mr-4 cursor-pointer' />
            <InstagramIcon fontSize="medium" className='text-slate-50 mr-4 cursor-pointer' />
            <FacebookIcon fontSize="medium" className='text-slate-50 mr-4 cursor-pointer' />
            <YouTubeIcon fontSize="medium" className='text-slate-50 cursor-pointer' />
          </div>
        </div>
        <div className="lg:ml-[8rem] md:col-start-2 flex flex-col">
          <h1 className='text-[#5865f2]'>Product</h1>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Download</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Nitro</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Status</p>
        </div>
        <div className="lg:ml-[6rem] md:col-start-3 lg:col-start-3">
        <h1 className='text-[#5865f2]'>Company</h1>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>About</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Jobs</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Branding</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Newsroom</p>
        </div>
        <div className="lg:ml-[4rem] md:col-start-2 lg:col-start-4">
        <h1 className='text-[#5865f2]'>Resources</h1>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>College</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Support</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Safety</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Blog</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Feedback</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Developers</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>StreamKit</p>
        </div>
        <div className="lg:ml-[2rem] md:col-start-3 lg:col-start-5">
        <h1 className='text-[#5865f2]'>Policies</h1>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Terms</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Privacy</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Cookie Settings</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Guidelines</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Acknowledgements</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Licenses</p>
          <p className='font-body text-white my-2 hover:underline underline-offset-4 cursor-pointer'>Moderation</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t-[1px] border-t-blurple pt-8">
        <div className="w-[9rem] cursor-pointer">
          <Image src={Logo} alt="Logo"/>
        </div>
        <div className="btn">
          <button className="text-center sm:py-[0.4rem] sm:px-4 py-[0.8vw] px-[4vw] capitalize font-medium text-sm text-white rounded-3xl bg-blurple hover:bg-[#717dff] hover:shadow-xl transition-all duration-200 ease-in">Open Discord</button>
        </div>
      </div>
    </div>
  )
}

export default Footer