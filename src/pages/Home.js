import React, { useState } from 'react'

import Dashboard from './../containers/Dashboard'

import Patients from '../layouts/Patients'
import Appointments from '../layouts/Appointments'

import Overlay from '../components/Overlay'

import { AnimatePresence } from 'framer-motion'
import RMenu from '../menus/RMenu'
import LMenu from '../menus/LMenu'

const Home = () => {
  const [dashboard, setDashboard] = useState('patients')

  // LMenu i sta ga otvara
  const [openLMenu, setOpenLMenu] = useState(false)
  const [addForm, setAddForm] = useState('')

  // RMenu i sta ga otvara
  const [openRMenu, setOpenRMenu] = useState(false)
  const [overview, setOverview] = useState('')

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

      {/* Ovde saljem state u druge komponente kako bi otvarao na click */}
      <AnimatePresence>
        {dashboard === 'appointments' && (
          <Appointments
            open={openRMenu}
            setOpen={setOpenRMenu}
            overview={overview}
            setOverview={setOverview}
          />
        )}
      </AnimatePresence>

      {/* ovde otvaram i zatvaram RMenu */}
      <AnimatePresence>
        {openRMenu && (
          <>
            <Overlay open={openRMenu} setOpen={setOpenRMenu} />
            <RMenu
              overview={overview}
              setOverview={setOverview}
              open={openRMenu}
              setOpen={setOpenRMenu}
            />
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
