import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Audio from "../../models/Audio";

interface AudioState {
  audio: Audio | null;
}

const initialState: AudioState = {
  audio: null,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsync.pending, () => {
        console.log("Pending");
      })
      .addCase(getAsync.fulfilled, (state, action: PayloadAction<Audio | undefined>) => {
        state.audio = action.payload!;
      });
  },
});

export const getAsync = createAsyncThunk(
  "audio/getAsync",
  async (id: number) => {
    const requestOptions: RequestInit = {
      method: "GET",
      credentials: "include",
    };

    try {
      // sleep(5000);
      const response = await fetch(
        `http://127.0.0.1/api/v1/audios/${id}`,
        requestOptions
      );
      if (response.ok) {
        const data: Audio = await response.json();
        return data;
      } else {
        console.error("Failed to fetch audio list");
      }
    } catch (error) {
      console.error("Error fetching audio list:", error);
    }
  }
);

export default audioSlice.reducer;
