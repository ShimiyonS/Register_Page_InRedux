import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from '../reducer/authSlice'

const store = configureStore({
  reducer: {
    user : userSliceReducer,
  },
});
export default store