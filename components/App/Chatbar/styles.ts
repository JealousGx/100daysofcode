import styled from "styled-components"

// Width = 78.5% because 17% is for statusbar and 4.5(rem) is for sidebar
export const ChatbarContainer = styled.div`
  width: 80%;
  height: 100%;
  padding-right: 3rem;
  background-color: rgb(54, 57, 63);

  @media (min-width: 1610px) {
    padding-right: 17%;
    width: 100%;
  }
`
