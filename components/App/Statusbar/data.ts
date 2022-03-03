interface dataType {
  users: {
    id: number
    name: string
    rank?: string | "Member"
    img?: StaticImageData | null
  }[]
  ranks: string[]
}

export const data: dataType = {
  users: [
    {
      id: 1,
      name: "Jealous",
      rank: "Owner",
    },
    {
      id: 2,
      name: "Envy",
      rank: "Owner",
    },
    {
      id: 3,
      name: "Spectre",
      rank: "Moderator",
    },
    {
      id: 4,
      name: "Deo",
      rank: "Member",
    },
    {
      id: 5,
      name: "John",
      rank: "Member",
    },
    {
      id: 6,
      name: "Smith",
      rank: "Hero",
    },
    {
      id: 7,
      name: "Neo",
      rank: "Hero",
    },
    {
      id: 8,
      name: "Naruto",
      rank: "Member",
    },
    {
      id: 9,
      name: "Sasuke",
      rank: "Member",
    },
    {
      id: 10,
      name: "Kakashi",
    },
  ],
  ranks: ["Owner", "Moderator", "Hero", "Member"],
}
