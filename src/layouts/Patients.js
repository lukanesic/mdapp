import React, { useState } from 'react'
import Patient from '../containers/Patient'
import PatientList from '../containers/PatientList'

import { motion } from 'framer-motion'

// State koji je fiktivan ali oponasa realno stanje
// Odavde se vuce info da li je patient selektovan ili nije.

const Patients = () => {
  const [patient, setPatient] = useState(false)
  return (
    <motion.div
      className='patients'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      exit={{ opacity: 0, transition: { delay: 0.3 } }}
    >
      <PatientList patient={patient} setPatient={setPatient} />
      <Patient patient={patient} setPatient={setPatient} />
    </motion.div>
  )
}

export default Patients
