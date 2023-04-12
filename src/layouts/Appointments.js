import React from 'react'
import { motion } from 'framer-motion'
import LatestApp from '../containers/LatestApp'
import AllExams from '../containers/AllExams'

const Appointments = ({ open, setOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, display: 'none' }}
      animate={{ opacity: 1, display: 'block' }}
      transition={{ delay: 1.5, duration: 1 }}
      exit={{
        display: 'none',
        opacity: 0,
        transition: { duration: 1 },
      }}
      className='appointments'
    >
      <LatestApp />
      <AllExams open={open} setOpen={setOpen} />
    </motion.div>
  )
}

export default Appointments
