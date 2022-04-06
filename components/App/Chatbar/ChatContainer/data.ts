interface chatType {
  id: number
  sender: string
  msg: string
  sentAt: string
}

export const chat: chatType[] = [
  {
    id: 0,
    sender: "Jealous",
    msg: "Hello world!",
    sentAt: "Today at 3:06 PM",
  },
]
