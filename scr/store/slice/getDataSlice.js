import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  repos: [],
};
export const getDataSlice = createSlice({
  name: 'getdata',
  initialState,
  reducers: {
    getData: (state, action) => {
      state.repos = action.payload;
    },
    loadMore: (state, action) => {
      state.repos = state.repos.push(action.payload);
    },
  },
});
export const {getData, loadMore} = getDataSlice.actions;
export default getDataSlice.reducer;
