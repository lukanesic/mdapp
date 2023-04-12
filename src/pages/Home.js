import React, { useState } from 'react'

import Dashboard from './../containers/Dashboard'
import Patients from '../layouts/Patients'
import Appointments from '../layouts/Appointments'
import { AnimatePresence } from 'framer-motion'
import Overlay from '../components/Overlay'
import RMenu from '../components/RMenu'

const Home = () => {
  const [dashboard, setDashboard] = useState('patients')
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='home'>
      <Dashboard dashboard={dashboard} setDashboard={setDashboard} />

      <AnimatePresence>
        {dashboard === 'patients' && <Patients />}
      </AnimatePresence>

      <AnimatePresence>
        {dashboard === 'appointments' && (
          <Appointments open={openMenu} setOpen={setOpenMenu} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openMenu && (
          <>
            <Overlay open={openMenu} setOpen={setOpenMenu} />
            <RMenu />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
