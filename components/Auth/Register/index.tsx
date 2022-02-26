import React from "react"
import Head from "next/head"
import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { DOB } from "./dob"

type IFormValues = {
  email: string
  username: string
  password?: string
  month: string
  date: number
  year: number
}

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data)
    const now = new Date()
    getAllDaysInMonth(now.getFullYear(), now.getMonth())
  }

  function getAllDaysInMonth(year: number, month: number) {
    const date = new Date(year, month, 1)
    const dates = []
    while (date.getMonth() === month) {
      dates.push(new Date(date))
      date.setDate(date.getDate() + 1)
    }
    return dates
  }

  const renderList = (type: string) => {
    if (type === "months") {
      return DOB.map((totMonths) =>
        totMonths.months.map((month) => (
          <option value={month.name} key={month.id}>
            {month.name}
          </option>
        ))
      )
    } else if (type === "years") {
      return DOB.map((totYears) =>
        totYears.years.map((year) => {
          return (
            <option value={year} key={year}>
              {year}
            </option>
          )
        })
      )
    } else if (type === "dates") {
      return DOB.map((totDates) =>
        totDates.dates.map((date) => {
          return (
            <option value={date} key={date}>
              {date}
            </option>
          )
        })
      )
    }
  }

  return (
    <>
      <Head>
        <title>Discord</title>
      </Head>
      <div className="h-screen w-screen flex items-center justify-center bg-[url('../components/assets/login_bg.svg')] bg-cover">
        <div className="container px-5 md:w-[30rem] w-screen md:h-[35rem] h-screen flex md:flex-row md:gap-10 bg-login-black shadow-xl md:rounded-[0.275rem]">
          <div className="flex items-center justify-center flex-col grow-[3] px-3">
            <h1 className="text-[#ffffff] text-[1.5rem] font-heading-2 font-normal">
              Create an account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full mt-2 form-control"
            >
              <ul className="flex flex-col">
                <li className="flex flex-col py-[0.375rem]">
                  <div className="labels flex flex-row">
                    <label
                      className={`text-info-text uppercase text-sm font-extrabold pb-[0.3rem] ${
                        errors.email && `text-red`
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
                    } border-opacity-40 hover:border-opacity-100 focus:border-hyperlink transition-all duration-250 ease-linear`}
                  />
                </li>
                <li className="flex flex-col py-[0.375rem]">
                  <div className="labels flex flex-row">
                    <label
                      className={`text-info-text uppercase text-sm font-extrabold pb-[0.3rem] ${
                        errors.username && `text-red`
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
                    type="text"
                    {...register("username", {
                      required: "This field is required",
                    })}
                    autoComplete="off"
                    className={`mb-1 bg-[#303339] py-[0.5rem] px-[0.75rem] text-info-text rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] ${
                      errors.email &&
                      `border-red focus:border-red border-opacity-100`
                    } border-opacity-40 hover:border-opacity-100 focus:border-hyperlink transition-all duration-250 ease-linear`}
                  />
                </li>
                <li className="flex flex-col py-[0.375rem]">
                  <div className="labels flex flex-row">
                    <label
                      className={`text-info-text uppercase text-sm font-extrabold pb-[0.3rem] ${
                        errors.password && `text-red`
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
                    } border-opacity-40 hover:border-opacity-100 focus:border-hyperlink transition-all duration-250 ease-linear`}
                  />
                </li>
                <li className="flex flex-col pt-[0.375rem]">
                  <div className="labels flex flex-row">
                    <label className="text-info-text uppercase text-sm font-extrabold pb-[0.3rem]">
                      Date of birth
                    </label>
                  </div>
                  <div className="dob flex flex-row">
                    <select
                      className="px-2 register-select py-2 pr-4 text-gray-text bg-[#303339] bg-clip-padding text-lg capitalize rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] border-opacity-40 hover:border-opacity-100 transition-all duration-250 ease-linear"
                      {...register("month")}
                    >
                      <option hidden disabled selected>
                        Select
                      </option>
                      {renderList("months")}
                    </select>
                    <select
                      className="px-2 mx-3 register-select py-2 pr-12 text-gray-text bg-[#303339] bg-clip-padding text-lg capitalize rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] border-opacity-40 hover:border-opacity-100 transition-all duration-250 ease-linear"
                      {...register("date")}
                    >
                      <option hidden disabled selected>
                        Select
                      </option>
                      {renderList("dates")}
                    </select>
                    <select
                      className="px-2 register-select py-2 pr-12 text-gray-text bg-[#303339] bg-clip-padding text-lg capitalize rounded-[0.175rem] outline-none border-[1.75px] border-solid border-[#000000] border-opacity-40 hover:border-opacity-100 transition-all duration-250 ease-linear"
                      {...register("year")}
                    >
                      <option hidden disabled selected>
                        Select
                      </option>
                      {renderList("years")}
                    </select>
                  </div>
                </li>
              </ul>
              <button
                type="submit"
                className="w-full text-[#ffffff] font-bold tracking-[0.035em] bg-blurple hover:bg-button-hover mt-6 py-[0.6rem] rounded-[0.175rem] transition-colors duration-250 ease-in"
              >
                Continue
              </button>
              <p className="mt-[0.5rem] text-sm self-start text-left text-hyperlink hover:underline cursor-pointer">
                <Link href="/auth/login">Already have an account?</Link>
              </p>
              <div className="w-full pt-5">
                <p className="text-gray-text text-[0.775rem] font-thin">
                  By registering, you agree to Discord&apos;s{" "}
                  <span className="text-hyperlink hover:underline cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-hyperlink hover:underline cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
