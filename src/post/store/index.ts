import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slice/index";

export const store = configureStore({
  reducer: {
    postsState: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
