import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userToken: '' },
  reducers: {
    login(state, action) {
      state.userToken = action.payload;
      
      localStorage.setItem('token',action.payload)
    },
    logout(state) {
      state.userToken = null;
      
      localStorage.removeItem('token')
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
