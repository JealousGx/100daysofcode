import styled from 'styled-components';

type Button = {
  btnText: string,
  type: string,
  className?: string | null,
}

export const ServerButton = styled.div<Button>`
  width: 3rem;
  height: 3rem;
  padding: 0.25rem;
  margin-bottom: ${({type}) => ((type === "server") || (type === "discordBtn")) && `0.75rem`};
  background-color: ${({type}) => type === "home" ? `rgb(54, 57, 63)` : type === "server" ? `rgb(246, 246, 246)` : `rgb(54, 57, 63)`};
  border-radius: 9999px;
  color: ${({type}) => type === "discordBtn" ? `rgb(67, 181, 129)` : ``};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 150ms ease;

  ${({btnText}) => btnText !== "Add a server" && `
    &:before {
      position: absolute;
      content: '';
      left: 0;
      padding: 0.6rem 0.13rem;
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      transform: scaleX(0) scaleY(0);
      transition: all 150ms ease;
    }
  `}

  &:after {
    position: absolute;
    content: '${({btnText}) => btnText}';
    left: 5rem;
    z-index: 50;
    padding: 0.35rem 0.75rem;
    background-color: rgb(35, 39, 42);
    border-radius: 0.3rem;
    color: rgb(246, 246, 246);
    font-weight: 700;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    transform: scaleX(0) scaleY(0);
    transition: all 150ms ease;
  }

  &:hover {
    background-color: ${({type}) => type === "home" ? `rgb(88, 101, 242)` : type === "server" ? `rgb(246, 246, 246)` : `rgb(67, 181, 129)`};
    color: ${({type}) => type === "discordBtn" ? `rgb(246, 246, 246)` : ``};
    border-radius: 1rem;

    &:before {
      transform: scaleX(1) scaleY(1);
      background-color: rgb(246, 246, 246);
    }

    &:after {
      transform: scaleX(1) scaleY(1);
    }
  }

  &.active {
    border-radius: 1rem;

    &:before {
      height: 2.5rem;
      transform: scaleX(1) scaleY(1);
      background-color: rgb(246, 246, 246);
    }
  }
`;

