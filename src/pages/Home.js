import React, { useState } from 'react'

import Dashboard from './../containers/Dashboard'
import Patients from '../layouts/Patients'
import Appointments from '../layouts/Appointments'
import { AnimatePresence } from 'framer-motion'

const Home = () => {
  const [dashboard, setDashboard] = useState('patients')

  return (
    <div className='home'>
      <Dashboard dashboard={dashboard} setDashboard={setDashboard} />

      <AnimatePresence>
        {dashboard === 'patients' && <Patients />}
      </AnimatePresence>

      <AnimatePresence>
        {dashboard === 'appointments' && <Appointments />}
      </AnimatePresence>
    </div>
  )
}

export default Home
