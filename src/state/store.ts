import { configureStore } from "@reduxjs/toolkit";
import audiosReducer from "./audios/audiosSlice";

export const store = configureStore({
  reducer: {
    audios: audiosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
