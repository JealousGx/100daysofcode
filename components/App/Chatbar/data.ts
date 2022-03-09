interface dataType {
  categories: string[]
  channels: {
    id: number
    category: string
    title: string
  }[]
}

export const serverData: dataType = {
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
  categories: ["important", "community", "voice-chat"],
}
