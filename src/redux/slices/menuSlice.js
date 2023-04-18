import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  leftMenu: false,
  rightMenu: false,
  dashboard: 'patients',
  overview: '',
  form: '',
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    interactLeftMenu: (state, { payload }) => {
      state.leftMenu = payload
    },
    interactRightMenu: (state, { payload }) => {
      state.rightMenu = payload
    },
    interactDashboard: (state, { payload }) => {
      state.dashboard = payload
    },
    setOverview: (state, { payload }) => {
      state.overview = payload
    },
    setForm: (state, { payload }) => {
      state.form = payload
    },
  },
})

export const {
  interactLeftMenu,
  interactRightMenu,
  interactDashboard,
  setOverview,
  setForm,
} = menuSlice.actions
export default menuSlice.reducer
