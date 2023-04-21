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
  selectExam: {},
  // samo testiram nista posebno
  testing: {},
  newExam: {},
}

export const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    addPatient: (state, { payload }) => {
      state.patient = state.patients.find((selected) => selected.id === payload)
    },
    removePatient: (state) => {
      state.patient = {}
    },
    addSelectedExam: (state, { payload }) => {
      state.selectExam = payload
    },
    addNewExam: (state, { payload }) => {
      state.newExam = payload
      // ta examinacija postoji. Ja ne trebam da pravim novu oid nje. SAmo trebam da je pronadjem kroz id, examID
      // i da ubacim review i da stavim isReviewed na true

      const newArray = [...state.patients]

      const patientToUpdate = newArray.find(
        (patient) => patient.id === payload.id
      )

      const examinationtoupdate = patientToUpdate.examinations.filter(
        (exam) => exam.examID !== payload.examID
      )

      patientToUpdate.examinations = [...examinationtoupdate, payload]

      state.patients = newArray

      // sad trebas da nadjes tu examinaciju na bazi i da je izbrises. Pomocu id-a
    },
    deleteExamination: (state, { payload }) => {
      // redux i trenutni pokazatelj state-a
      const newArray = [...state.patients]

      const patientToUpdate = newArray.find(
        (patient) => patient.id === payload.id
      )

      const updateExaminations = patientToUpdate.examinations.filter(
        (exam) => exam.examID !== payload.examID
      )

      patientToUpdate.examinations = updateExaminations

      state.patients = newArray

      // sad trebas da nadjes tu examinaciju na bazi i da je izbrises. Pomocu id-a
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

export const {
  addPatient,
  removePatient,
  addSelectedExam,
  addNewExam,
  deleteExamination,
} = patientsSlice.actions
export default patientsSlice.reducer
