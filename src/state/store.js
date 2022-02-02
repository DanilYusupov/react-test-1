import { configureStore } from '@reduxjs/toolkit'
import trophyReducer from './trophySlice'
import overdriveReduces from './overdriveSlice'

export default configureStore({
  reducer: {
    trophy: trophyReducer,
    overdrive: overdriveReduces,
  },
})