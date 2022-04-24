import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

// Type definitions for initalState & PayloadAction
interface serverType {
  serverID: number
  serverName: string
}

const initialState: serverType = {
  serverID: 4,
  serverName: "Home",
}

const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    setServer: (state, action: PayloadAction<serverType>) => {
      state.serverID = action.payload.serverID
      state.serverName = action.payload.serverName
    },
  },
})

export const { setServer } = serverSlice.actions

export const selectServerID = (state: RootState) => state.server.serverID
export const selectServerName = (state: RootState) => state.server.serverName

export default serverSlice.reducer
