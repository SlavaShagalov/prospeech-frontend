import { configureStore } from "@reduxjs/toolkit";
import audiosReducer from "./audios/audiosSlice";
import audioReducer from "./audio/audioSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    audios: audiosReducer,
    audio: audioReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
