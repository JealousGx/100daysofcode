import React from "react"
import {
  ChatbarComponent,
  Messages,
  MessageContainer,
  FormContainer,
  UserMessage,
  MessageDetails,
  Form,
  Input,
} from "./styles"
import UserAvatar from "../UserAvatar"
import { chat } from "./data"

const Index = () => {
  return (
    <ChatbarComponent>
      <Messages>
        {chat.map((message) => {
          return (
            <MessageContainer key={message.id}>
              <UserAvatar bgColor={message.senderColor} />
              <UserMessage>
                <MessageDetails>
                  <h4
                    className={`font-extrabold hover:underline cursor-pointer`}
                    style={{ color: message.senderColor }}
                  >
                    {message.sender}
                  </h4>
                  <p className="text-[0.75rem] text-gray-text font-bold cursor-default">
                    {message.sentAt}
                  </p>
                </MessageDetails>
                <p className="text-white">{message.msg}</p>
              </UserMessage>
            </MessageContainer>
          )
        })}
      </Messages>
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
