import styled from "styled-components"

export const ChatbarComponent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const Messages = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 4rem;
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

export const MessageContainer = styled.div`
  width: 100%;
  height: 3rem;
  padding: 0.75rem 1.25rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  color: black;

  &:hover {
    background-color: #32353b;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const UserMessage = styled.div`
  display: flex;
  flex-direction: column;
`

export const MessageDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.65rem;
`

export const Form = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  padding: 0 1rem;
  background-color: rgb(54, 57, 63);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  &[type="text"] {
    width: 100%;
    padding: 0.75rem 1.25rem;
    background-color: #40444b;
    /* color: rgb(246 246 246); */
    color: #d1d0b4;
    border-radius: 0.5rem;
    outline: none;

    &::placeholder {
      font-style: italic;
      opacity: 0.5;
      letter-spacing: 0.035rem;
    }
  }
`
