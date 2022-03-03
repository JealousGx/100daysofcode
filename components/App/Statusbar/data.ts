interface dataType {
  users: {
    id: number
    name: string
    rank: string
    status: string
    color: string
    bgColor: string
    img?: StaticImageData
  }[]
  ranks: string[]
}

const colors = [
  "#5d8aa8",
  "#e52b50",
  "#9966cc",
  "#915c83",
  "#8db600",
  "#7fffd4",
]

export const data: dataType = {
  users: [
    {
      id: 1,
      name: "Jealous",
      rank: "Owner",
      status: "online",
      color: "text-red",
      bgColor: "bg-[#5d8aa8]",
    },
    {
      id: 2,
      name: "Envy",
      rank: "Owner",
      status: "offline",
      color: "text-red",
      bgColor: "bg-[#9966cc]",
    },
    {
      id: 3,
      name: "Spectre",
      rank: "Moderator",
      status: "online",
      color: "text-orange-500",
      bgColor: "bg-[#e52b50]",
    },
    {
      id: 4,
      name: "Deo",
      rank: "Member",
      status: "online",
      color: "text-sky-600",
      bgColor: "bg-[#7fffd4]",
    },
    {
      id: 5,
      name: "John",
      rank: "Member",
      status: "online",
      color: "text-sky-600",
      bgColor: "bg-[#9966cc]",
    },
    {
      id: 6,
      name: "Smith",
      rank: "Hero",
      status: "online",
      color: "text-yellow",
      bgColor: "bg-[#e52b50]",
    },
    {
      id: 7,
      name: "Neo",
      rank: "Hero",
      status: "online",
      color: "text-yellow",
      bgColor: "bg-[#7fffd4]",
    },
    {
      id: 8,
      name: "Naruto",
      rank: "Member",
      status: "online",
      color: "text-sky-600",
      bgColor: "bg-[#915c83]",
    },
    {
      id: 9,
      name: "Sasuke",
      rank: "Member",
      status: "offline",
      color: "text-sky-600",
      bgColor: "bg-[#9966cc]",
    },
    {
      id: 10,
      name: "Kakashi",
      rank: "Member",
      status: "offline",
      color: "text-sky-600",
      bgColor: "bg-[#7fffd4]",
    },
  ],
  ranks: ["Owner", "Moderator", "Hero", "Member"],
}
