import { configureStore } from '@reduxjs/toolkit';
import getDataSlice from '../store/slice/getDataSlice';

export default configureStore({
  reducer: {
    getdata: getDataSlice,
  },
})
