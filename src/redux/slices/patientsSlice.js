import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { db } from '../../firebase'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from '@firebase/firestore'

export const fetchPatientsFromDB = createAsyncThunk(
  'patientsSlice/fetchPatientsFromDB',
  async () => {
    try {
      const patientsRef = collection(db, 'patients')
      const data = await getDocs(patientsRef)
      return data.docs.map((patient) => ({ ...patient.data(), id: patient.id }))
    } catch (error) {
      return error
    }
  }
)

export const addNewPatientToDB = createAsyncThunk(
  'patientsSlice/addNewPatientToDB',
  async (patient) => {
    try {
      const patientRef = collection(db, 'patients')
      await addDoc(patientRef, patient)
    } catch (error) {
      return error
    }
  }
)

// Ovo imam samo sve sto vec radim u app, da prebacim na bazu.
export const addNewAppointmentToDB = createAsyncThunk(
  'patientsSlice/addNewAppointmentToDB',
  async () => {
    try {
    } catch (error) {
      return error
    }
  }
)

export const addNewExamToDB = createAsyncThunk(
  'patientsSlice/addNewExamToDb',
  async () => {
    try {
    } catch (error) {
      console.log(error)
    }
  }
)

export const deleteExamFromDB = createAsyncThunk(
  'patients/deleteExamFromDB',
  async () => {
    try {
    } catch (error) {
      console.log(error)
    }
  }
)

export const deletePatientFromDB = createAsyncThunk(
  'patientsSlice/deletePatientFromDB',
  async (id) => {
    try {
      await deleteDoc(doc, (db, 'patients', id))
    } catch (error) {
      return error
    }
  }
)

const initialState = {
  patients: [],
  patient: {},
  patientForAppointment: {},
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
    addPatientForAppointment: (state, { payload }) => {
      state.patientForAppointment = state.patients.find(
        (selected) => selected.id === payload
      )
    },
    deletePatient: (state, { payload }) => {
      state.patients = state.patients.filter(
        (patient) => patient.id !== payload
      )

      state.patient = {}
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
    addNewPatient: (state, { payload }) => {
      state.patients = state.patients.concat(payload)
    },
    addNewAppointment: (state, { payload }) => {
      const newArray = [...state.patients]

      const patientToUpdate = newArray.find(
        (patient) => patient.id === payload.patientID
      )

      const addAppointment = patientToUpdate.examinations.concat(
        payload.appointment
      )

      patientToUpdate.examinations = [...addAppointment]

      state.patients = newArray
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
    [addNewPatientToDB.pending]: (state, { payload }) => {
      console.log(payload)
      state.loading = true
    },
    [addNewPatientToDB.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.loading = false
    },
    [addNewPatientToDB.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [addNewAppointmentToDB.pending]: (state, { payload }) => {
      console.log(payload)
      state.loading = true
    },
    [addNewAppointmentToDB.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.loading = false
    },
    [addNewAppointmentToDB.rejected]: (state, { payload }) => {
      state.error = payload
      state.loading = false
    },
    [deletePatientFromDB.pending]: (state, { payload }) => {
      console.log(payload)
      state.loading = true
    },
    [deletePatientFromDB.fulfilled]: (state, { payload }) => {
      console.log(payload)
      state.loading = false
    },
    [deletePatientFromDB.rejected]: (state, { payload }) => {
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
  addNewPatient,
  addPatientForAppointment,
  addNewAppointment,
  deletePatient,
} = patientsSlice.actions

export default patientsSlice.reducer
