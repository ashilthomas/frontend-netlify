import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};
const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState,
  reducers: {
     authUserSuccess: (state,action) => {
      state.user = action.payload.user;
     
      state.isAuthenticated = true;
    },
  },
});

export const {  authUserSuccess } = userAuthSlice.actions;

export default userAuthSlice.reducer;
