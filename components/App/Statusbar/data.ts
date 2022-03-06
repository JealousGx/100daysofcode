export const colors = [
  "#5d8aa8",
  "#e52b50",
  "#9966cc",
  "#915c83",
  "#8db600",
  "#7fffd4",
]

interface dataType {
  users: {
    id: number
    name: string
    rank: string
    bio: string
    hash: string
    status: string
    color: string
    bgColor: string
    img?: StaticImageData
  }[]
  ranks: string[]
}

export const data: dataType = {
  users: [
    {
      id: 1,
      name: "Jealous",
      rank: "Owner",
      bio: "Built this discord clone",
      hash: "0000",
      status: "online",
      color: "red",
      bgColor: "bg-[#5d8aa8]",
    },
    {
      id: 2,
      name: "Envy",
      rank: "Owner",
      bio: "Built this discord clone",
      hash: "0001",
      status: "offline",
      color: "red",
      bgColor: "bg-[#9966cc]",
    },
    {
      id: 3,
      name: "Spectre",
      rank: "Moderator",
      bio: "Fake Account",
      hash: "0002",
      status: "online",
      color: "rgb(254, 215, 170)",
      bgColor: "bg-[#e52b50]",
    },
    {
      id: 4,
      name: "Deo",
      rank: "Member",
      bio: "John Deo",
      hash: "0003",
      status: "online",
      color: "rgb(2, 132, 199)",
      bgColor: "bg-[#7fffd4]",
    },
    {
      id: 5,
      name: "John",
      rank: "Member",
      bio: "John Of CS:GO",
      hash: "0004",
      status: "online",
      color: "rgb(2, 132, 199)",
      bgColor: "bg-[#9966cc]",
    },
    {
      id: 6,
      name: "Smith",
      rank: "Hero",
      bio: "Profession: Blacksmith",
      hash: "0005",
      status: "online",
      color: "rgb(254, 231, 92)",
      bgColor: "bg-[#e52b50]",
    },
    {
      id: 7,
      name: "Neo",
      rank: "Hero",
      bio: "Main Character of Matrix",
      hash: "0006",
      status: "online",
      color: "rgb(254, 231, 92)",
      bgColor: "bg-[#7fffd4]",
    },
    {
      id: 8,
      name: "Naruto",
      rank: "Member",
      bio: "Naruto Shippuden",
      hash: "0007",
      status: "online",
      color: "rgb(2, 132, 199)",
      bgColor: "bg-[#915c83]",
    },
    {
      id: 9,
      name: "Sasuke",
      rank: "Member",
      bio: "Vengeance against Leaf Village",
      hash: "0008",
      status: "offline",
      color: "rgb(2, 132, 199)",
      bgColor: "bg-[#9966cc]",
    },
    {
      id: 10,
      name: "Kakashi",
      rank: "Member",
      bio: "Sensei of Sasuke & Naruto",
      hash: "0009",
      status: "offline",
      color: "rgb(2, 132, 199)",
      bgColor: "bg-[#7fffd4]",
    },
  ],
  ranks: ["Owner", "Moderator", "Hero", "Member"],
}
