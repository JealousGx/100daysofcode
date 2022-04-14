import styled from "styled-components"

interface Channel {
  type: string
}

interface ButtonType {
  saveProfile: boolean
}

export const ChannelContainer = styled.section`
  height: 100vh;
  min-width: 210px;
  background-color: #2f3136;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0.35rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #23272a;
    }
  }
`

export const ChannelInfo = styled.div`
  margin: 0;
  width: 100%;
  height: 9rem;
  border: none;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(43, 45, 48, 0.75);
  cursor: pointer;
  transition: all 150ms ease;

  &:hover {
    background-color: rgba(55, 55, 55, 0.5);
  }
`

export const Channels = styled.div`
  padding: 0.5rem 0.25rem;
  padding-bottom: 5rem;
  color: rgb(114 118 125);
`

export const Channel = styled.div<Channel>`
  width: 100%;
  margin-bottom: 0.15rem;
  padding: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  /* position: relative; */
  border-radius: 0.3rem;

  ${({ type }) =>
    type !== "voice-chat" &&
    `&:before {
    content: '';
    position: absolute;
    top: 0.8rem;
    left: -0.25rem;
    width: 0.25rem;
    height: 0.4rem;
    background: whitesmoke;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: none;
  }`}

  &:hover {
    background-color: #34373c;
    color: #dcddde;
  }

  &.active {
    background-color: #34373c;
    color: #dcddde;

    &:before {
      display: block;
    }
  }
`

export const UserControls = styled.div`
  position: absolute;
  left: 4.5rem;
  bottom: 0;
  width: 210px;
  height: 3.5rem;
  padding: 0.5rem 0.75rem 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #292b2f;

  @media (min-width: 1660px) {
    left: 4.3rem;
  }
`

// Settings Styling starts:

export const SettingsContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000000000;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SettingsWrapper = styled.div`
  position: relative;
  width: 35rem;
  height: 35rem;
  background: #36393f;
  padding: 2rem 1.5rem;
  border-radius: 0.5rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.35rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #23272a;
    }
  }
`

export const ProfilePictureContainer = styled.div`
  width: 100%;
  height: 10rem;
  margin: 1rem 0;
  background: #202225;
  border-radius: 0.5rem;
`

export const Button = styled.button<ButtonType>`
  padding: 0.35rem 1.5rem;
  color: white;
  font-weight: 550;

  ${({ saveProfile }) =>
    saveProfile
      ? "background: #5865f2;"
      : "background: transparent; border: 1px solid rgb(237 66 69);"}

  border-radius: 0.25rem;
  transition: background-color 200ms ease;

  &:hover {
    ${({ saveProfile }) =>
      saveProfile ? "background: #4752C4;" : "background: rgb(237 66 69);"}
  }
`
