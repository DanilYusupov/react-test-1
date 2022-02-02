import { configureStore } from '@reduxjs/toolkit'
import trophyReducer from './trophySlice'

export default configureStore({
  reducer: {
    trophy: trophyReducer,
  },
})