import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const prodFetch = createAsyncThunk(
  "products/prodFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      return res.data;
    } catch (error) {
        return rejectWithValue('ошибка при запросе на Api')
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null,
    error:null,
  },
  reducers: {},
  extraReducers: {
    [prodFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [prodFetch.fulfilled]: (state, action) => {
      state.status = "succes";
      state.items = action.payload;
    },
    [prodFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload
    },
  },
});

export default productSlice.reducer;
