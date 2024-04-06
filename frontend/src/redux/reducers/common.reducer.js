import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'currTheme',
  initialState: {
    value: "light",
  },
  reducers: {
    someAction: function() {

    },
    darkTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = "dark"
    },
    lightTheme: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes.
        // Also, no return statement is required from these functions.
        state.value = "light"
      },
  },
})

// Action creators are generated for each case reducer function
export const { darkTheme, lightTheme } = themeSlice.actions

export default themeSlice.reducer