import React, { useState } from 'react'

import Dashboard from './../containers/Dashboard'
import Patients from '../layouts/Patients'
import Appointments from '../layouts/Appointments'

const Home = () => {
  const [dashboard, setDashboard] = useState('patients')

  return (
    <div className='home'>
      <Dashboard dashboard={dashboard} setDashboard={setDashboard} />

      {dashboard === 'patients' && <Patients />}

      {dashboard === 'appointments' && <Appointments />}
    </div>
  )
}

export default Home
