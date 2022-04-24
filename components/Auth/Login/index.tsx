import Head from "next/head"
import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import AOS from "aos"
import "aos/dist/aos.css"
import { SubmitHandler, useForm } from "react-hook-form"

import { useAppSelector, useAppDispatch } from "../../../redux/hooks"
import { login } from "../../../redux/Reducers/userReducer"

import qrCode from "../../assets/qr_code.png"

interface IFormValues {
  email: string
  password: string
}

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>()

  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    AOS.init({
      offset: 500,
      duration: 250,
      easing: "ease-in-sine",
      delay: 50,
    })
  }, [])

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data)
    router.push("/channels/@me")

    dispatch(
      login({
        loggedIn: true,
      })
    )
  }

  return (
    <>
      <Head>
        <title>Discord</title>
      </Head>
      <div className="h-screen w-screen flex items-center justify-center bg-[url('../components/assets/login_bg.svg')] bg-cover">
        <div
          data-aos="fade-down"
          className="container p-6 pb-[2rem] md:w-[50rem] w-screen md:h-[26rem] h-screen flex md:flex-row md:gap-10 bg-login-black shadow-xl md:rounded-[0.275rem] overflow-hidden"
        >
          <div className="flex items-center justify-center flex-col grow-[3] px-3">
            <h1 className="text-[#ffffff] text-[1.5rem] font-heading-2 font-normal">
              Welcome back!
            </h1>
            <p className="text-info-text text-[1.1rem] pt-[0.275rem]">
              We&apos;re so excited to see you again!
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mt-2 form-control"
            >
              <ul className="flex flex-col">
                <li className="flex flex-col py-[0.375rem]">
                  <div className="labels flex flex-row">
                    <label
                      className={` uppercase text-sm font-extrabold pb-[0.3rem] ${
                        errors.email ? `text-red` : `text-info-text`
                      }`}
                    >
                      email{" "}
                      {errors.email && (
                        <span className="italic normal-case text-sm">
                          - {errors.email?.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <input
                    type="email"
                    {...register("email", {
                      required: "This field is required",
                    })}
                    autoComplete="off"
                    className={`mb-1 bg-[#303339] py-[0.5rem] px-[0.75rem] text-info-text rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] ${
                      errors.email &&
                      `border-red focus:border-red border-opacity-100`
                    } border-opacity-40 hover:border-opacity-100 ${
                      !errors.email && `focus:border-hyperlink`
                    } transition-all duration-250 ease-linear`}
                  />
                </li>
                <li className="flex flex-col pt-[0.375rem]">
                  <div className="labels flex flex-row">
                    <label
                      className={`uppercase text-sm font-extrabold pb-[0.3rem] ${
                        errors.password ? `text-red` : `text-info-text`
                      }`}
                    >
                      password{" "}
                      {errors.password && (
                        <span className="italic normal-case text-sm">
                          - {errors.password?.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <input
                    type="password"
                    {...register("password", {
                      required: "This field is required",
                    })}
                    className={`mb-1 bg-[#303339] py-[0.5rem] px-[0.75rem] text-info-text rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] ${
                      errors.password &&
                      `border-red focus:border-red border-opacity-100`
                    } border-opacity-40 hover:border-opacity-100 ${
                      !errors.password && `focus:border-hyperlink`
                    } transition-all duration-250 ease-linear`}
                  />
                </li>
                <label className="text-hyperlink hover:underline text-sm pt-[0.15rem] cursor-pointer">
                  Forgot your password?
                </label>
              </ul>
              <button
                type="submit"
                className="w-full text-[#ffffff] font-bold tracking-[0.035em] bg-blurple hover:bg-button-hover mt-6 py-[0.6rem] rounded-[0.175rem] transition-colors duration-250 ease-in"
              >
                Login
              </button>
              <p className="mt-[0.5rem] text-sm text-gray-text self-start text-left">
                Need an account?
                <span className="ml-[0.3rem] text-hyperlink hover:underline cursor-pointer active:translate-y-[100%] transition-transform duration-250 ease-linear">
                  <Link href="/auth/register">Register</Link>
                </span>
              </p>
            </form>
          </div>
          <div className="px-4 hidden md:flex md:flex-col  md:justify-center">
            <div className="flex items-center justify-center mt-10 p-2 w-[10rem] rounded-[0.275rem] self-center bg-[#ffffff]">
              <Image src={qrCode} alt="QR Code" />
            </div>
            <div className="w-[16rem] mt-6 self-center text-center">
              <h1 className="text-[#ffffff] text-[1.3rem] font-heading-2">
                Log in with QR Code
              </h1>
              <p className="mt-[0.5rem] text-info-text">
                Scan this with the{" "}
                <span className="font-extrabold">Discord mobile app</span> to
                login instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
