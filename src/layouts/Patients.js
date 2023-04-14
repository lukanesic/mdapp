import React from 'react'
import Patient from '../containers/Patient'
import PatientList from '../containers/PatientList'

import { motion } from 'framer-motion'

const Patients = () => {
  return (
    <motion.div
      className='patients'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      exit={{ opacity: 0, transition: { delay: 0.3 } }}
    >
      <PatientList />
      <Patient />
    </motion.div>
  )
}

export default Patients
