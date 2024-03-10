import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Audio from "./../../models/Audio";

interface AudiosState {
  audios: Audio[];
}

const initialState: AudiosState = {
  audios: [],
};

const audiosSlice = createSlice({
  name: "audios",
  initialState,
  reducers: {
    add: (state) => {
      // state.audios.push();
      console.log("ADD");
    },
    get: (state) => {
      // state.audios.push();
      console.log("GET");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsync.pending, () => {
        console.log("Pending");
      })
      .addCase(addAsync.fulfilled, (state, action: PayloadAction<any>) => {
        console.log("PAYLOAD", action.payload);
        state.audios = [...state.audios, action.payload];
      })
      .addCase(getAsync.pending, () => {
        console.log("Pending");
      })
      .addCase(getAsync.fulfilled, (state, action: PayloadAction<Audio[]>) => {
        state.audios = action.payload;
      });
  },
});

// function sleep(milliseconds: number) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
//   }

export const getAsync = createAsyncThunk("audios/getAsync", async () => {
  const requestOptions: RequestInit = {
    method: "GET",
    credentials: "include",
  };

  try {
    // sleep(5000);
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
