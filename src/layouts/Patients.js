import React from 'react'
import Patient from '../containers/Patient'
import PatientList from '../containers/PatientList'
import { motion } from 'framer-motion'

const Patients = () => {
  return (
    <motion.div className='patients'>
      <PatientList />
      <Patient />
    </motion.div>
  )
}

export default Patients
