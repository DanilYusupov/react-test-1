import { createSlice } from '@reduxjs/toolkit'

export const trophySlice = createSlice({
  name: 'trophy',
  initialState: {
    value: false,
  },
  reducers: {
    giveTrophy: (state) => {
        state.value = true;
    },
    clearTrophy: (state) => {
        state.value = false;
    },
  },
})

export const { giveTrophy, clearTrophy } = trophySlice.actions

export default trophySlice.reducer