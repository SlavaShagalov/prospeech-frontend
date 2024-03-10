import { configureStore } from "@reduxjs/toolkit";
import audiosReducer from "./audios/audiosSlice";
import audioReducer from "./audio/audioSlice";

export const store = configureStore({
  reducer: {
    audios: audiosReducer,
    audio: audioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
