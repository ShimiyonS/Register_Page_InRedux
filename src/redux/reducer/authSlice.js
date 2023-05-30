import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password :""
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerRedux: (state, action) => {
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.password = action.payload.password
    },
    loginRedux:(state,action)=>{
        state.email ='';
        state.name      =''
        state.password  =''
    },
    logoutRedux: (state, action) => {
        state.email     = "";
        state.name      = "";
        state.password  ="";
    },
  },
});

export const { loginRedux ,logoutRedux, registerRedux} = userSlice.actions;

export default userSlice.reducer;
