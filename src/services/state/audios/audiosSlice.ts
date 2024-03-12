import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Audio from "./../../../models/Audio";

interface AudiosState {
  audios: Audio[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AudiosState = {
  audios: [],
  status: "idle",
  error: null,
};

const audiosSlice = createSlice({
  name: "audios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsync.pending, (state) => {
        state.status = "loading";
        console.log("Pending audios");
      })
      .addCase(getAsync.fulfilled, (state, action: PayloadAction<Audio[]>) => {
        state.audios = action.payload;
        state.status = "succeeded";
        console.log("Audios loaded");
      })
      .addCase(getAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
        console.log("Audios failed");
      });
    builder
      .addCase(addAsync.pending, () => {
        console.log("Pending");
      })
      .addCase(addAsync.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("PAYLOAD", action.payload);
        state.audios = [...state.audios, action.payload];
        console.log("Audio added");
      });
  },
});

export const getAsync = createAsyncThunk("audios/getAsync", async () => {
  console.log("Start loading audios...");
  const requestOptions: RequestInit = {
    method: "GET",
    credentials: "include",
  };

  try {
    const response = await fetch(
      "http://127.0.0.1/api/v1/audios",
      requestOptions
    );
    if (response.ok) {
      const data = await response.json();
      return data.audios;
    } else {
      console.error("Failed to fetch audio list");
    }
  } catch (error) {
    console.error("Error fetching audio list:", error);
  }
});

export const addAsync = createAsyncThunk(
  "audios/addAsync",
  async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    const requestOptions: RequestInit = {
      method: "POST",
      credentials: "include",
      body: formData,
    };

    try {
      const response = await fetch(
        "http://127.0.0.1/api/v1/audios",
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Failed to fetch audio list");
      }
    } catch (error) {
      console.error("Error fetching audio list:", error);
    }
  }
);

export default audiosSlice.reducer;
