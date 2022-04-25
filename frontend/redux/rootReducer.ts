import { combineReducers, createSlice } from "@reduxjs/toolkit"
import serverReducer from "./Reducers/serverReducer"
import channelReducer from "./Reducers/channelReducer"
import userReducer from "./Reducers/userReducer"

const rootReducer = combineReducers({
  server: serverReducer,
  channel: channelReducer,
  user: userReducer,
})

export default rootReducer
