import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { db } from '../../firebase'
import { collection, getDocs } from '@firebase/firestore'

export const fetchPatientsFromDB = createAsyncThunk(
  'patientsSlice/fetchPatientsFromDB',
  async () => {
    try {
      const patientsRef = collection(db, 'patients')
      const data = await getDocs(patientsRef)
      return data.docs.map((patient) => ({ ...patient.data(), id: patient.id }))
    } catch (err) {
      console.log(err)
    }
  }
)

const initialState = {
  patients: [],
  patient: {},
  loading: false,
  error: false,
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
  extraReducers: {
    [fetchPatientsFromDB.pending]: (state, { payload }) => {
      console.log(payload)
      state.loading = true
    },
    [fetchPatientsFromDB.fulfilled]: (state, { payload }) => {
      state.patients = payload
      state.loading = false
    },
    [fetchPatientsFromDB.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
  },
})

export const { fetchPatients, addPatient, removePatient } =
  patientsSlice.actions
export default patientsSlice.reducer
