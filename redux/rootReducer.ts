import { combineReducers, createSlice } from "@reduxjs/toolkit"
import serverReducer from "./Reducers/serverReducer"
import channelReducer from "./Reducers/channelReducer"

const rootReducer = combineReducers({
  server: serverReducer,
  channel: channelReducer,
})

export default rootReducer
