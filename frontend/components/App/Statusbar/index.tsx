import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"

import { useAppSelector } from "../../../redux/hooks"

import Logo from "../../assets/Discord-Logo-White.png"
import { servers } from "../data"
import { StatusContainer, Profile, ProfileCard, Input } from "./styles"

type FCType = JSX.Element | null

const Index: React.FC = (): FCType => {
  // Get current active server from Redux
  const activeServer = useAppSelector((state) => state.server.serverName)

  const [activeProfile, setActiveProfile] = useState<number>(0)
  const profileRef = useRef<any>()

  // Filtering the the active server
  const filteredServer = servers.filter(
    (server) => server.serverName === activeServer
  )

  useEffect(() => {
    const handler = (event: Event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setActiveProfile(0)
      }
    }
    document.addEventListener("mouseup", handler)

    return () => {
      document.removeEventListener("mouseup", handler)
    }
  }, [])

  if (!servers) {
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

  if (activeServer === "Home") {
    return null
  }

  return (
    <StatusContainer>
      {filteredServer &&
        filteredServer.map((server) =>
          server.ranks.map((rank, index) => {
            let totalUsersInRank = 0
            server.users.filter(
              (user) => user.userRank === rank && totalUsersInRank++
            )
            return (
              <div className="py-4" key={index}>
                <div className="text-gray-text text-sm font-bold uppercase pl-2">
                  {rank} - {totalUsersInRank}
                  <br />
                </div>
                {server.users.map((user) => {
                  return (
                    user.userRank === rank && (
                      <Profile
                        ref={profileRef}
                        onClick={() => setActiveProfile(user.id)}
                        key={user.id}
                        userColor={user.userColor}
                        className={`group`}
                        isActive={user.id === activeProfile}
                      >
                        {user.userImg ? (
                          <div
                            className={` mr-2 flex items-center justify-center rounded-full ${
                              user.status === "offline"
                                ? "opacity-50"
                                : "opacity-100"
                            } group-hover:opacity-100`}
                          >
                            <Image
                              className="rounded-full"
                              src={user.userImg}
                              alt={user.userName}
                              width={32}
                              height={32}
                            />
                          </div>
                        ) : (
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
                              alt={user.userName}
                              width={20}
                              height={20}
                            />
                          </div>
                        )}
                        <span
                          className={`${
                            user.status === "offline"
                              ? "opacity-50"
                              : "opacity-100"
                          } group-hover:opacity-100`}
                        >
                          {user.userName}
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
                              {user.userName}
                              <span className="text-gray-text text-xl">
                                #{user.userHash}
                              </span>
                            </span>
                            {user.status !== "offline" && (
                              <span className="absolute top-3 right-4 flex flex-row items-center ml-4 text-[0.75rem] text-green">
                                <div className="w-2 h-2 rounded-full bg-green mr-2" />
                                Online
                              </span>
                            )}
                          </div>
                          <div>
                            <p className="w-full h-10 whitespace-nowrap text-gray-400 text-[1rem]">
                              Bio:{" "}
                              <span className="text-[0.775rem] text-gray-500">
                                {user.userBio}
                              </span>
                            </p>
                            <Input
                              type="text"
                              placeholder={`Message @${user.userName}`}
                            />
                          </div>
                        </ProfileCard>
                      </Profile>
                    )
                  )
                })}
              </div>
            )
          })
        )}
    </StatusContainer>
  )
}

export default Index
