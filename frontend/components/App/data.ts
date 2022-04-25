import ServerLogo from "../assets/server_logo.png"
import SecondServer from "../assets/server2.png"
import ThirdServer from "../assets/server3.png"

// User Profile Image: http://placeimg.com/640/480

interface dataType {
  // Actual Server Info
  id: number
  serverName: string
  serverImage: StaticImageData
  type: string
  activeClass?: boolean | false
  ranks: string[]

  // Server Channels Info
  categories: string[]
  channels: {
    id: number
    category: string
    title: string
  }[]

  // Server Users
  users: {
    id: number
    userName: string
    userRank: string
    userBio: string
    userHash: string
    status: string
    userColor: string
    bgColor: string
    userImg: string
  }[]
}

// export const colors = [
//   "#5d8aa8",
//   "#e52b50",
//   "#9966cc",
//   "#915c83",
//   "#8db600",
//   "#7fffd4",
// ]

export const servers: dataType[] = [
  {
    id: 1,
    serverName: "✅ Jealous Server",
    serverImage: ServerLogo,
    type: "server",
    ranks: ["Owner", "Moderator", "Hero", "Member"],

    categories: ["important", "community", "voice-chat"],
    channels: [
      {
        id: 1,
        category: "important",
        title: "announcements",
      },
      {
        id: 2,
        category: "important",
        title: "info",
      },
      {
        id: 3,
        category: "important",
        title: "rules",
      },
      {
        id: 4,
        category: "important",
        title: "updates",
      },
      {
        id: 5,
        category: "community",
        title: "introduction",
      },
      {
        id: 6,
        category: "community",
        title: "general",
      },
      {
        id: 7,
        category: "community",
        title: "coding-discussion",
      },
      {
        id: 8,
        category: "community",
        title: "gaming",
      },
      {
        id: 9,
        category: "community",
        title: "bot-commands",
      },
      {
        id: 10,
        category: "community",
        title: "off-topic",
      },
      {
        id: 11,
        category: "voice-chat",
        title: "css-talk",
      },
      {
        id: 12,
        category: "voice-chat",
        title: "gaming",
      },
      {
        id: 13,
        category: "voice-chat",
        title: "music",
      },
      {
        id: 14,
        category: "voice-chat",
        title: "general",
      },
      {
        id: 15,
        category: "voice-chat",
        title: "off-topic",
      },
    ],

    users: [
      {
        id: 1,
        userName: "Jealous",
        userRank: "Owner",
        userBio: "Built this discord clone",
        userHash: "0000",
        status: "online",
        userColor: "red",
        bgColor: "bg-[#5d8aa8]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 2,
        userName: "Envy",
        userRank: "Owner",
        userBio: "Built this discord clone",
        userHash: "0001",
        status: "offline",
        userColor: "red",
        bgColor: "bg-[#9966cc]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 3,
        userName: "Spectre",
        userRank: "Moderator",
        userBio: "Fake Account",
        userHash: "0002",
        status: "online",
        userColor: "rgb(254, 215, 170)",
        bgColor: "bg-[#e52b50]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 4,
        userName: "Deo",
        userRank: "Member",
        userBio: "John Deo",
        userHash: "0003",
        status: "online",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#7fffd4]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 5,
        userName: "John",
        userRank: "Member",
        userBio: "John Of CS:GO",
        userHash: "0004",
        status: "online",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#9966cc]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 6,
        userName: "Smith",
        userRank: "Hero",
        userBio: "Profession: Blacksmith",
        userHash: "0005",
        status: "online",
        userColor: "rgb(254, 231, 92)",
        bgColor: "bg-[#e52b50]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 7,
        userName: "Neo",
        userRank: "Hero",
        userBio: "Main Character of Matrix",
        userHash: "0006",
        status: "online",
        userColor: "rgb(254, 231, 92)",
        bgColor: "bg-[#7fffd4]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 8,
        userName: "Naruto",
        userRank: "Member",
        userBio: "Naruto Shippuden",
        userHash: "0007",
        status: "online",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#915c83]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 9,
        userName: "Sasuke",
        userRank: "Member",
        userBio: "Vengeance against Leaf Village",
        userHash: "0008",
        status: "offline",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#9966cc]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 10,
        userName: "Kakashi",
        userRank: "Member",
        userBio: "Sensei of Sasuke & Naruto",
        userHash: "0009",
        status: "offline",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#7fffd4]",
        userImg: "http://placeimg.com/640/480",
      },
    ],
  },

  {
    id: 2,
    serverName: "Web Development Help",
    serverImage: SecondServer,
    type: "server",
    ranks: ["Owner", "Moderator", "Web Development Pro", "Member"],

    categories: ["welcome", "help", "voice-chat"],
    channels: [
      {
        id: 1,
        category: "welcome",
        title: "announcements",
      },
      {
        id: 2,
        category: "help",
        title: "general-help",
      },
      {
        id: 3,
        category: "help",
        title: "debugging",
      },
      {
        id: 4,
        category: "voice-chat",
        title: "live-help",
      },
    ],

    users: [
      {
        id: 1,
        userName: "Jealous",
        userRank: "Owner",
        userBio: "Built this discord clone",
        userHash: "0000",
        status: "online",
        userColor: "red",
        bgColor: "bg-[#5d8aa8]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 2,
        userName: "Envy",
        userRank: "Owner",
        userBio: "Built this discord clone",
        userHash: "0001",
        status: "offline",
        userColor: "red",
        bgColor: "bg-[#9966cc]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 3,
        userName: "Spectre",
        userRank: "Moderator",
        userBio: "Fake Account",
        userHash: "0002",
        status: "online",
        userColor: "rgb(254, 215, 170)",
        bgColor: "bg-[#e52b50]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 4,
        userName: "Deo",
        userRank: "Member",
        userBio: "John Deo",
        userHash: "0003",
        status: "online",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#7fffd4]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 5,
        userName: "John",
        userRank: "Member",
        userBio: "John Of CS:GO",
        userHash: "0004",
        status: "online",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#9966cc]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 6,
        userName: "Smith",
        userRank: "Web Development Pro",
        userBio: "Profession: Blacksmith",
        userHash: "0005",
        status: "online",
        userColor: "rgb(254, 231, 92)",
        bgColor: "bg-[#e52b50]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 7,
        userName: "Neo",
        userRank: "Web Development Pro",
        userBio: "Main Character of Matrix",
        userHash: "0006",
        status: "online",
        userColor: "rgb(254, 231, 92)",
        bgColor: "bg-[#7fffd4]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 8,
        userName: "Naruto",
        userRank: "Member",
        userBio: "Naruto Shippuden",
        userHash: "0007",
        status: "online",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#915c83]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 9,
        userName: "Sasuke",
        userRank: "Member",
        userBio: "Vengeance against Leaf Village",
        userHash: "0008",
        status: "offline",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#9966cc]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 10,
        userName: "Kakashi",
        userRank: "Member",
        userBio: "Sensei of Sasuke & Naruto",
        userHash: "0009",
        status: "offline",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#7fffd4]",
        userImg: "http://placeimg.com/640/480",
      },
    ],
  },

  {
    id: 3,
    serverName: "👋 Football Updates",
    serverImage: ThirdServer,
    type: "server",
    ranks: ["Admin", "Moderator", "Pro", "Member"],

    categories: ["updates", "community", "voice-chat"],
    channels: [
      {
        id: 1,
        category: "updates",
        title: "live-updates",
      },
      {
        id: 2,
        category: "updates",
        title: "upcoming-matches",
      },
      {
        id: 3,
        category: "community",
        title: "chat",
      },
      {
        id: 4,
        category: "voice-chat",
        title: "live-chat",
      },
    ],

    users: [
      {
        id: 1,
        userName: "Jealous",
        userRank: "Admin",
        userBio: "Built this discord clone",
        userHash: "0000",
        status: "online",
        userColor: "red",
        bgColor: "bg-[#5d8aa8]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 2,
        userName: "Envy",
        userRank: "Admin",
        userBio: "Built this discord clone",
        userHash: "0001",
        status: "offline",
        userColor: "red",
        bgColor: "bg-[#9966cc]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 3,
        userName: "Spectre",
        userRank: "Moderator",
        userBio: "Fake Account",
        userHash: "0002",
        status: "online",
        userColor: "rgb(254, 215, 170)",
        bgColor: "bg-[#e52b50]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 4,
        userName: "Deo",
        userRank: "Member",
        userBio: "John Deo",
        userHash: "0003",
        status: "online",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#7fffd4]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 5,
        userName: "John",
        userRank: "Member",
        userBio: "John Of CS:GO",
        userHash: "0004",
        status: "online",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#9966cc]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 6,
        userName: "Smith",
        userRank: "Pro",
        userBio: "Profession: Blacksmith",
        userHash: "0005",
        status: "online",
        userColor: "rgb(254, 231, 92)",
        bgColor: "bg-[#e52b50]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 7,
        userName: "Neo",
        userRank: "Pro",
        userBio: "Main Character of Matrix",
        userHash: "0006",
        status: "online",
        userColor: "rgb(254, 231, 92)",
        bgColor: "bg-[#7fffd4]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 8,
        userName: "Naruto",
        userRank: "Member",
        userBio: "Naruto Shippuden",
        userHash: "0007",
        status: "online",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#915c83]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 9,
        userName: "Sasuke",
        userRank: "Member",
        userBio: "Vengeance against Leaf Village",
        userHash: "0008",
        status: "offline",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#9966cc]",
        userImg: "http://placeimg.com/640/480",
      },
      {
        id: 10,
        userName: "Kakashi",
        userRank: "Member",
        userBio: "Sensei of Sasuke & Naruto",
        userHash: "0009",
        status: "offline",
        userColor: "rgb(2, 132, 199)",
        bgColor: "bg-[#7fffd4]",
        userImg: "http://placeimg.com/640/480",
      },
    ],
  },
]
