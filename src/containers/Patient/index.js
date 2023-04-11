import React from 'react'
import PatientExams from '../../components/PatientExams'
import PatientInfo from '../../components/PatientInfo'

import { motion } from 'framer-motion'

const Patient = () => {
  return (
    <motion.div
      className='patient'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      <PatientInfo patient />
      <PatientExams />
    </motion.div>
  )
}

export default Patient
