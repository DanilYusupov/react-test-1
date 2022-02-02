import { createSlice } from '@reduxjs/toolkit'

export const overdriveSlice = createSlice({
  name: 'overdrive',
  initialState: {
    value: false,
  },
  reducers: {
    setOverdrive: (state, action) => {
        state.value = action.payload;
    },
  },
})

export const { setOverdrive } = overdriveSlice.actions

export default overdriveSlice.reducer