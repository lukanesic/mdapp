import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  patients: [],
  patient: {},
}

export const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    fetchPatients: (state, { payload }) => {
      state.patients = payload
    },
    addPatient: (state, { payload }) => {
      state.patient = state.patients.find((selected) => selected.id === payload)
    },
    removePatient: (state) => {
      state.patient = {}
    },
  },
})

export const { fetchPatients, addPatient, removePatient } =
  patientsSlice.actions
export default patientsSlice.reducer
