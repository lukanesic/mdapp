import React, { useState } from 'react'

import Dashboard from './../containers/Dashboard'
import RMenu from '../containers/RMenu'
import LMenu from '../containers/LMenu'

import Patients from '../layouts/Patients'
import Appointments from '../layouts/Appointments'

import Overlay from '../components/Overlay'

import { AnimatePresence } from 'framer-motion'

const Home = () => {
  const [dashboard, setDashboard] = useState('patients')
  const [openRMenu, setOpenRMenu] = useState(false)
  const [openLMenu, setOpenLMenu] = useState(false)
  const [addForm, setAddForm] = useState('')

  return (
    <div className='home'>
      <Dashboard
        dashboard={dashboard}
        setDashboard={setDashboard}
        openLMenu={openLMenu}
        setOpenLMenu={setOpenLMenu}
        setAddForm={setAddForm}
      />

      <AnimatePresence>
        {dashboard === 'patients' && <Patients />}
      </AnimatePresence>

      <AnimatePresence>
        {dashboard === 'appointments' && (
          <Appointments open={openRMenu} setOpen={setOpenRMenu} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openRMenu && (
          <>
            <Overlay open={openRMenu} setOpen={setOpenRMenu} />
            <RMenu />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openLMenu && (
          <>
            <Overlay open={openLMenu} setOpen={setOpenLMenu} />
            <LMenu form={addForm} openMenu={openLMenu} setOpen={setOpenLMenu} />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
