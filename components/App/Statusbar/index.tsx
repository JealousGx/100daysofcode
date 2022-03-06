import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

import Logo from "../../assets/Discord-Logo-White.png"
import { data } from "./data"
import { StatusContainer, Profile, ProfileCard, Input } from "./styles"

interface usersType {
  name: string
  rank: string
}

const Index = () => {
  const [activeProfile, setActiveProfile] = useState<number>(0)
  const profileRef = useRef<any>()

  useEffect(() => {
    if (data) {
      const handler = (event: Event) => {
        if (!profileRef.current.contains(event.target)) {
          setActiveProfile(0)
        }
      }
      document.addEventListener("mouseup", handler)

      return () => {
        document.removeEventListener("mouseup", handler)
      }
    }
  })

  if (!data) {
    return (
      <StatusContainer>
        <div className="mx-2 w-[6rem] h-3 rounded-[0.2rem] bg-gray-text animate-pulse" />
        <div className="mx-2 flex gap-2 items-center mt-3">
          <div className="px-2 w-10 h-10 rounded-full bg-gray-text animate-pulse" />
          <div className="w-[6rem] h-3 rounded-[0.2rem] bg-gray-text animate-pulse" />
        </div>
      </StatusContainer>
    )
  }

  return (
    <StatusContainer>
      {data &&
        data.ranks.map((rank, index) => {
          let totalUsersInRank = 0
          data.users.filter((user) => user.rank === rank && totalUsersInRank++)
          return (
            <div className="py-4" key={index}>
              <div className="text-gray-text text-sm font-bold uppercase pl-2">
                {rank} - {totalUsersInRank}
                <br />
              </div>
              {data.users.map((user) => {
                return (
                  user.rank === rank && (
                    <Profile
                      ref={profileRef}
                      onClick={() => setActiveProfile(user.id)}
                      key={user.id}
                      userColor={user.color}
                      className={`group`}
                      isActive={user.id === activeProfile}
                    >
                      <div
                        className={`p-[0.4rem] mr-2 flex items-center justify-center rounded-full ${
                          user.bgColor
                        } ${
                          user.status === "offline"
                            ? "opacity-50"
                            : "opacity-100"
                        } group-hover:opacity-100`}
                      >
                        <Image
                          src={Logo}
                          alt="Profile Logo"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span
                        className={`${
                          user.status === "offline"
                            ? "opacity-50"
                            : "opacity-100"
                        } group-hover:opacity-100`}
                      >
                        {user.name}
                      </span>
                      <ProfileCard isActive={user.id === activeProfile}>
                        <div className="pb-3 mb-3 border-b-[1px] border-b-gray-text border-opacity-50">
                          <div
                            className={`w-[4.5rem] h-[4.5rem] mr-2 flex items-center justify-center rounded-full ${user.bgColor} mb-4 hover:opacity-50 cursor-pointer`}
                          >
                            <Image
                              src={Logo}
                              alt="Profile Logo"
                              width={42}
                              height={42}
                            />
                          </div>
                          <span className="text-off-white text-2xl">
                            {user.name}
                            <span className="text-gray-text text-xl">
                              #{user.hash}
                            </span>
                          </span>
                          {user.status !== "offline" && (
                            <span className="ml-4 text-[0.75rem] text-off-white">
                              Online
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="w-full h-10 whitespace-nowrap text-gray-400 text-lg">
                            Bio:{" "}
                            <span className="text-sm text-gray-500">
                              {user.bio}
                            </span>
                          </p>
                          <Input
                            type="text"
                            placeholder={`Message @${user.name}`}
                          />
                        </div>
                      </ProfileCard>
                    </Profile>
                  )
                )
              })}
            </div>
          )
        })}
    </StatusContainer>
  )
}

export default Index
