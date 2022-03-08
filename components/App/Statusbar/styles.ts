import styled from "styled-components"

interface ProfileType {
  key: number
  userColor: string
  className?: string
  isActive: boolean
}
interface ProfileCardType {
  isActive: boolean
}

export const StatusContainer = styled.div`
  width: 17%;
  height: 100%;
  background-color: #2f3136;
  padding: 1rem 0.3rem 1rem 0.5rem;
  overflow: auto;
  position: fixed;
  right: 0;
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

  @media (min-width: 1610px) {
    width: 15rem;
  }
`

export const Profile = styled.div<ProfileType>`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  margin-bottom: 0.15rem;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ userColor }) => userColor};
  border-radius: 0.3rem;
  background-color: ${({ isActive }) => (isActive ? "#34373c" : "")};

  &:hover {
    background-color: #34373c;
  }
`

export const ProfileCard = styled.div<ProfileCardType>`
  position: fixed;
  top: 10rem;
  right: 18%;
  width: 15rem;
  height: 17rem;
  padding: 1rem;
  background: #18191c;
  transform: ${({ isActive }) => (isActive === true ? "scale(1)" : "scale(0)")};
  border-radius: 0.5rem;
  box-shadow: 2px 4px 10px -3px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 2px 4px 10px -3px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 2px 4px 10px -3px rgba(0, 0, 0, 0.66);
  overflow: auto;
  cursor: auto;
  transition: transform 150ms ease;

  @media (max-width: 640px) {
    width: 100%;
    height: 50%;
    top: 74%;
    right: 0;
  }

  @media (min-width: 1610px) {
    right: 15.5rem;
  }
`

export const Input = styled.input`
  width: 100%;
  margin-top: 0.8rem;
  padding: 0.4rem 0.6rem;
  background-color: #303339;
  color: #f6f6f6;
  outline: none;
  border-radius: 0.125rem;
  border: 1px solid transparent;
  transition: all 150ms ease;
  overflow: hidden;

  &:hover {
    border-color: #000000;
  }

  &:focus {
    border-color: #00aff4;
  }
`
