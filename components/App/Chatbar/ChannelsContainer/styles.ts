import styled from "styled-components"

interface Channel {
  type: string
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
  padding: 0.5rem 0.5rem 0 0.5rem;
  display: flex;
  align-items: center;
  background-color: #292b2f;

  @media (min-width: 1660px) {
    left: 4.3rem;
  }
`
