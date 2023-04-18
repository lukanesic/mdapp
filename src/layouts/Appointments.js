import React from 'react'
import { motion } from 'framer-motion'
import LatestApp from '../containers/LatestApp'
import AllExams from '../containers/AllExams'

const Appointments = () => {
  return (
    <motion.div
      initial={{ opacity: 0, display: 'none' }}
      animate={{ opacity: 1, display: 'block' }}
      transition={{ duration: 0.7 }}
      exit={{
        opacity: 0,

        transition: { delay: 0.3 },
      }}
      className='appointments'
    >
      <LatestApp />
      <AllExams />
    </motion.div>
  )
}

export default Appointments
