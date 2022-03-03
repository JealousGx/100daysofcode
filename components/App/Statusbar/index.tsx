import Image from "next/image"
import React from "react"

import Logo from "../../assets/Discord-Logo-White.png"
import { data } from "./data"
import { StatusContainer } from "./styles"

interface usersType {
  name: string
  rank: string
}

const Index = () => {
  return (
    <StatusContainer>
      {data.ranks.map((rank, index) => {
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
                  <div
                    key={user.id}
                    className={`w-full py-2 pl-2 flex text-[1rem] font-semibold ${
                      user.color
                    } ${
                      user.status === "offline" ? `opacity-50` : `opacity-100`
                    } cursor-pointer hover:bg-[#34373C] rounded-[0.2rem]`}
                  >
                    <div
                      className={`p-2 mr-2 flex items-center justify-center rounded-full ${user.bgColor}`}
                    >
                      <Image
                        src={Logo}
                        alt="Profile Logo"
                        width={24}
                        height={24}
                      />
                    </div>
                    {user.name}
                  </div>
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
