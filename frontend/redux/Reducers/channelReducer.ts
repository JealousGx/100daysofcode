import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

// Type definitions for initalState & PayloadAction
interface channelType {
  channelID: number
  channelName: string
}

const initialState: channelType = {
  channelID: 0,
  channelName: "",
}

const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannel: (state, action: PayloadAction<channelType>) => {
      state.channelID = action.payload.channelID
      state.channelName = action.payload.channelName
    },
  },
})

export const { setChannel } = channelSlice.actions

export const selectChannelID = (state: RootState) => state.channel.channelID
export const selectChannelName = (state: RootState) => state.channel.channelName

export default channelSlice.reducer
