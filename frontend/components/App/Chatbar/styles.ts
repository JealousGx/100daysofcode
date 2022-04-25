import styled from "styled-components"

interface AvatarBG {
  bgColor: string
}

interface ChatbarType {
  activeServer: string
}

export const ChatbarContainer = styled.div<ChatbarType>`
  ${({ activeServer }) =>
    activeServer === "Home" ? "width: 100%;" : "width: 79.5vw;"}
  height: 100vh;
  padding-right: 1.7rem;
  background-color: rgb(54, 57, 63);
  display: flex;
  flex-direction: row;
  overflow: hidden;

  @media (min-width: 1610px) {
    padding-right: 15rem;
    width: 100vw;
  }
`

export const AvatarContainer = styled.div<AvatarBG>`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: ${({ bgColor }) => bgColor};
`
