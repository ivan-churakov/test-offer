import {createSlice} from '@reduxjs/toolkit'
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {KEY, URL_SEARCH} from "../../../envvariable";
import {IState} from "../../../types";

let initialState: IState = {
  status: "null",
  error: null,
  data: {
    has_more: true,
    items: [],
    quota_max: 0,
    quota_remaining: 0,
  },
};

export const fetchSearch: any = createAsyncThunk(
  'api/fetchSearch',
  async (question) => {
    let urlSearch = `${URL_SEARCH}?key=${KEY}&order=desc&sort=activity&q=${question}&filter=withbody&site=stackoverflow`;
    const response = await axios.get(urlSearch);
    return response.data;
  }
)

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearch.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchSearch.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.data = action.payload;
    },
    [fetchSearch.rejected]: (state, action) => {
    },
  }
})

export const {} = apiSlice.actions

export default apiSlice.reducer