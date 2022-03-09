import styled from "styled-components"

export const ChatbarContainer = styled.div`
  width: 80vw;
  height: 100vh;
  padding-right: 1.7rem;
  background-color: rgb(54, 57, 63);
  display: flex;
  flex-direction: row;
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

  @media (min-width: 1610px) {
    padding-right: 15rem;
    width: 100vw;
  }
`

export const ChannelContainer = styled.section`
  height: 100vh;
  min-width: 210px;
  background-color: #2f3136;
  overflow: auto;
  scroll-behavior: smooth;
`

export const ChannelInfo = styled.div`
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
  margin-top: 2rem;
`
