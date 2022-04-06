import React from "react"
import { ChatbarComponent, FormContainer, Form, Input } from "./styles"

const Index = () => {
  return (
    <ChatbarComponent>
      Index
      <FormContainer>
        <Form action="">
          {/* TODO: Change the placeholder below dynamically */}
          <Input type="text" placeholder="Message #general" />
        </Form>
      </FormContainer>
    </ChatbarComponent>
  )
}

export default Index
