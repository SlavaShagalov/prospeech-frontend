import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Audio from "./../../../models/Audio";

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
      .addCase(
        getAsync.fulfilled,
        (state, action: PayloadAction<Audio | undefined>) => {
          state.audio = action.payload!;
        }
      );
    builder
      .addCase(deleteAsync.pending, () => {
        console.log("Pending");
      })
      .addCase(deleteAsync.fulfilled, (state) => {
        state.audio = null;
      })
      .addCase(deleteAsync.rejected, () => {
        console.log("Delete FAILED");
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
      const response = await fetch(`/api/v1/audios/${id}`, requestOptions);
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

export const deleteAsync = createAsyncThunk(
  "audio/deleteAsync",
  async (id: number) => {
    const requestOptions: RequestInit = {
      method: "DELETE",
      credentials: "include",
    };

    try {
      // sleep(5000);
      const response = await fetch(`/api/v1/audios/${id}`, requestOptions);
      if (response.ok) {
        return;
      } else {
        console.error("Failed to fetch audio list");
      }
    } catch (error) {
      console.error("Error fetching audio list:", error);
    }
  }
);

export default audioSlice.reducer;
