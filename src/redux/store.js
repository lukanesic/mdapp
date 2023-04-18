import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './slices/menuSlice'
import patientsSlice from './slices/patientsSlice'

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    patients: patientsSlice,
  },
})
