import Head from 'next/head';
import React from 'react';
import qrCode from '../../assets/qr_code.png';
import Image from 'next/image';

const index: React.FC = () => {

  return (
    <>
    <Head>
      <title>Discord</title>
    </Head>
    <div className="h-screen w-screen flex items-center justify-center bg-[url('../components/assets/login_bg.svg')] bg-cover">
      <div className="container p-6 pb-[2rem] md:w-[50rem] w-[30rem] flex md:flex-row md:gap-10 bg-login-black shadow-xl rounded-[0.275rem]">
        <div className="flex items-center justify-center flex-col grow-[3] px-3">
          <h1 className='text-[#ffffff] text-[1.5rem] font-heading-2 font-normal'>Welcome back!</h1>
          <p className='text-info-text text-[1.1rem] pt-[0.275rem]'>We&apos;re so excited to see you again!</p>  
          <form action="" className='w-full mt-2 form-control'>
            <ul className='flex flex-col'>
              <li className='flex flex-col py-[0.375rem]'>
                <label className='text-info-text uppercase text-[0.775rem] font-extrabold pb-[0.3rem]'>email</label>
                <input type="email" name="email" autoComplete='off' className='mb-1 bg-[#303339] py-[0.5rem] px-[0.75rem] text-info-text rounded-[0.175rem] outline-none border-[1.5px] border-solid border-[#000000] border-opacity-40 hover:border-opacity-100 focus:border-hyperlink transition-all duration-250 ease-linear' />
              </li>
              <li className='flex flex-col pt-[0.375rem]'>
                <label className='text-info-text uppercase text-[0.775rem] font-extrabold pb-[0.3rem]'>password</label>
                <input type="password" name="password" className='bg-[#303339] py-[0.5rem] px-[0.75rem] text-info-text rounded-[0.175rem] outline-none border-[1.5px] border-solid border-[#000000] border-opacity-40 hover:border-opacity-100 focus:border-hyperlink transition-all duration-250 ease-linear' />
              </li>
              <label className='text-hyperlink hover:underline text-sm pt-[0.15rem] cursor-pointer'>Forgot your password?</label>
            </ul>
          </form>
          <button className='w-full text-[#ffffff] font-bold tracking-[0.035em] bg-blurple hover:bg-button-hover mt-6 py-[0.6rem] rounded-[0.175rem] transition-colors duration-250 ease-in'>Login</button>
          <p className='mt-[0.5rem] text-sm text-gray-text self-start text-left'>Need an account? <span className='text-hyperlink hover:underline cursor-pointer'>Register</span></p>
        </div>
        <div className='px-4 hidden md:flex md:flex-col  md:justify-center'>
          <div className="flex items-center justify-center mt-10 p-2 w-[10rem] rounded-[0.275rem] self-center bg-[#ffffff]">
          <Image src={qrCode} alt="QR Code" />
          </div>
          <div className="w-[16rem] mt-6 self-center text-center">
            <h1 className='text-[#ffffff] text-[1.3rem] font-heading-2'>Log in with QR Code</h1>
            <p className='mt-[0.5rem] text-info-text'>Scan this with the <span className='font-extrabold'>Discord mobile app</span> to login instantly.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default index