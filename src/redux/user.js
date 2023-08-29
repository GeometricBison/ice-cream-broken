import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loginStatus: false,
    username: "",
    password: "",
    firstflavor: "",
    firstflavornote: "",
    secondflavor: "",
    secondflavornote: "",
    thirdflavor: "",
    thirdflavornote: ""
  },
  reducers: {
    login: (state, action) => {
      state.loginStatus = true;
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.firstflavor = action.payload.firstflavor;
      state.firstflavornote = action.payload.firstflavornote;
      state.secondflavor = action.payload.secondflavor;
      state.secondflavornote = action.payload.secondflavornote;
      state.thirdflavor = action.payload.thirdflavor;
      state.thirdflavornote = action.payload.thirdflavornote;
    },
    logout: (state, action) => {
      state.loginStatus = false;
      state.username = "";
      state.password = "";
      state.firstflavor = "";
      state.firstflavornote = "";
      state.secondflavor = "";
      state.secondflavornote = "";
      state.thirdflavor = "";
      state.thirdflavornote = "";
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export default loginSlice.reducer