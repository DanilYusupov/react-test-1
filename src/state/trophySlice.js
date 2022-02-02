import { createSlice } from '@reduxjs/toolkit'

export const trophySlice = createSlice({
  name: 'trophy',
  initialState: {
    value: [],
  },
  reducers: {
    giveTrophy: (state) => {
        let array = state.value
        array.push(1);
        state.value = array;
    },
    clearTrophy: (state) => {
        state.value = [];
    },
  },
})

export const { giveTrophy, clearTrophy } = trophySlice.actions

export default trophySlice.reducer