import React, { useEffect, useRef } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

import {
  SettingsContainer,
  SettingsWrapper,
  ProfilePictureContainer,
  Button,
} from "./styles"

import CloseRoundedIcon from "@mui/icons-material/CloseRounded"

type IFormValues = {
  email: string
  username: string
  password?: string
  bio?: string
}

const Settings = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>()
  const settingsRef = useRef<any>()
  const { setDisplaySettings, displaySettings } = props

  // Click outside the Wrapper to close settings container
  useEffect(() => {
    const handler = (event: Event) => {
      if (!settingsRef.current.contains(event.target)) {
        setDisplaySettings(false)
      }
    }
    document.addEventListener("mouseup", handler)

    return () => {
      document.removeEventListener("mouseup", handler)
    }
  })

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data)
  }

  return (
    <SettingsContainer>
      <SettingsWrapper ref={settingsRef}>
        <div className="flex justify-between text-white">
          <CloseRoundedIcon
            onClick={() => setDisplaySettings(!displaySettings)}
            className="text-3xl absolute right-5 mb-[1rem] cursor-pointer"
          />
          <p className="text-xl font-bold">My Account</p>
        </div>
        {/* Modify the ProfilePictureContainer after watching the tutorial of drag & drop image uploader */}
        <ProfilePictureContainer />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-2 mb-[1rem] form-control"
        >
          <ul className="flex flex-col">
            {/* Email Section */}
            <li className="flex flex-col py-[0.375rem]">
              <div className="labels flex flex-row">
                <label
                  className={`uppercase text-sm font-extrabold pb-[0.3rem] ${
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
                {...register("email")}
                // Change the defaultValue dynamically after implementing the API
                defaultValue="abcd@gmail.com"
                placeholder="Change email"
                autoComplete="off"
                className={`w-full mb-1 bg-[#303339] py-[0.5rem] px-[0.75rem] text-info-text rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] ${
                  errors.email &&
                  `border-red focus:border-red border-opacity-100`
                } border-opacity-40 hover:border-opacity-100 focus:border-hyperlink transition-all duration-250 ease-linear`}
              />
            </li>

            {/* Username Section */}
            <li className="flex flex-col py-[0.375rem]">
              <div className="labels flex flex-row">
                <label
                  className={`uppercase text-sm font-extrabold pb-[0.3rem] ${
                    errors.username ? `text-red` : `text-info-text`
                  }`}
                >
                  username{" "}
                  {errors.username && (
                    <span className="italic normal-case text-sm">
                      - {errors.username?.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                type="username"
                {...register("username")}
                // Change the defaultValue dynamically after implementing the API
                defaultValue="Jealous"
                placeholder="Change username"
                autoComplete="off"
                className={`w-full mb-1 bg-[#303339] py-[0.5rem] px-[0.75rem] text-info-text rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] ${
                  errors.username &&
                  `border-red focus:border-red border-opacity-100`
                } border-opacity-40 hover:border-opacity-100 focus:border-hyperlink transition-all duration-250 ease-linear`}
              />
            </li>

            {/* Password Section */}
            <li className="flex flex-col py-[0.375rem]">
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
                {...register("password")}
                // Change the defaultValue dynamically after implementing the API
                defaultValue="*********"
                autoComplete="off"
                placeholder="Change password"
                className={`w-full mb-1 bg-[#303339] py-[0.5rem] px-[0.75rem] text-info-text rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] ${
                  errors.password &&
                  `border-red focus:border-red border-opacity-100`
                } border-opacity-40 hover:border-opacity-100 focus:border-hyperlink transition-all duration-250 ease-linear`}
              />
            </li>

            {/* Bio Section */}
            <li className="flex flex-col py-[0.375rem]">
              <div className="labels flex flex-row">
                <label
                  className={`uppercase text-sm font-extrabold pb-[0.3rem] ${
                    errors.bio ? `text-red` : `text-info-text`
                  }`}
                >
                  biography{" "}
                  {errors.bio && (
                    <span className="italic normal-case text-sm">
                      - {errors.bio?.message}
                    </span>
                  )}
                </label>
              </div>
              <textarea
                cols={4}
                {...register("bio")}
                // Change the defaultValue dynamically after implementing the API
                defaultValue="Hi, this is Jealous!"
                placeholder="A little information about yourself. 25 words max."
                autoComplete="off"
                className={`w-full mb-1 bg-[#303339] py-[0.5rem] px-[0.75rem] text-info-text rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] ${
                  errors.bio && `border-red focus:border-red border-opacity-100`
                } border-opacity-40 hover:border-opacity-100 focus:border-hyperlink transition-all duration-250 ease-linear`}
              />
            </li>
          </ul>
        </form>
        <div className="flex items-center justify-between">
          <Button
            onClick={() => setDisplaySettings(!displaySettings)}
            saveProfile={true}
            type="submit"
          >
            Save
          </Button>
          <Button
            onClick={() => setDisplaySettings(!displaySettings)}
            saveProfile={false}
            type="submit"
          >
            Delete Account
          </Button>
        </div>
      </SettingsWrapper>
    </SettingsContainer>
  )
}

export default Settings
