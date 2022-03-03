import ServerLogo from "../../assets/server_logo.png"
import SecondServer from "../../assets/server2.png"
import ThirdServer from "../../assets/server3.png"

interface serversType {
  id: number
  btnText: string
  img: StaticImageData
  type: string
  activeClass?: boolean | false
}

export const servers: serversType[] = [
  {
    id: 1,
    btnText: "✅ Jealous Server",
    img: ServerLogo,
    type: "server",
  },
  {
    id: 2,
    btnText: "Web Development Help",
    img: SecondServer,
    type: "server",
  },
  {
    id: 3,
    btnText: "👋 Football Updates",
    img: ThirdServer,
    type: "server",
  },
]
