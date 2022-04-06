import styled from "styled-components"

export const ChatbarContainer = styled.div`
  width: 80vw;
  height: 100vh;
  padding-right: 1.7rem;
  background-color: rgb(54, 57, 63);
  display: flex;
  flex-direction: row;
  overflow: hidden;

  /* &::-webkit-scrollbar {
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
  } */

  @media (min-width: 1610px) {
    padding-right: 15rem;
    width: 100vw;
  }
`
