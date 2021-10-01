import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../ApiServices";

const initialState = {
  postList: [],
  currentRequestId: "",
  loading: "fin",
  error: "",
};

export const fetchPostList = createAsyncThunk(
  "post/fetchList",
  async (_, { rejectWithValue }) => {
    try {
      const list = await getPosts();
      return list;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

const { actions, reducer } = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPostList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.postList = payload;
        state.loading = "fin";
        state.currentRequestId = "";
        console.log('a')
      }
    },
    [fetchPostList.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = "pending";
      console.log('b')
    },
    [fetchPostList.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = "fin";
        state.postList = payload;
        state.error = error;
        console.log('c')
      }
    },
  },
});

export default reducer;