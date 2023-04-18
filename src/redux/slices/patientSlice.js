import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  patient: {},
}

export const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    addPatient: (state) => {
      state.patient = true
    },
    removePatient: (state) => {
      state.patient = false
    },
  },
})

export const { addPatient, removePatient } = patientSlice.actions
export default patientSlice.reducer
