import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tokens: null,
}

export const authSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.tokens = payload;
    }
  },
})

export const { add } = authSlice.actions;

export default authSlice.reducer;
