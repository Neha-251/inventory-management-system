import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './redux/reducers/common.reducer'

export const store =  configureStore({
  reducer: {
    theme: themeSlice.reducer
  },
})