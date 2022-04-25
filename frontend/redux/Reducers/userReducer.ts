import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

// Type definitions for initalState & PayloadAction
interface userType {
  userName?: string
  email?: string
  loggedIn: boolean
}

const initialState: userType = {
  userName: "",
  email: "",
  loggedIn: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userType>) => {
      state.loggedIn = action.payload.loggedIn
    },

    register: (state, action: PayloadAction<userType>) => {
      state.userName = action.payload.userName
      state.email = action.payload.email
      state.loggedIn = action.payload.loggedIn
    },
  },
})

export const { login, register } = userSlice.actions

export const selectUserName = (state: RootState) => state.user.userName
export const selectUserEmail = (state: RootState) => state.user.email
export const selectUserLogged = (state: RootState) => state.user.email

export default userSlice.reducer
