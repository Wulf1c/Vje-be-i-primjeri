import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});
