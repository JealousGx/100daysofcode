import styled from "styled-components"

export const ChatbarComponent = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 0.25rem 1rem; */
  position: relative;
`

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const Form = styled.form`
  width: 100%;
  height: 9rem;
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
