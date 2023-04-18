import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PatientFromAppointment from '../../containers/PatientFromAppointment'
import { useSelector } from 'react-redux'

const RMenu = () => {
  const { overview } = useSelector((state) => state.menu)

  return (
    <motion.div
      className='rmenu'
      initial={{ opacity: 0, right: -500 }}
      animate={{ opacity: 1, right: 0 }}
      exit={{
        opacity: 0,
        right: -500,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <AnimatePresence>
        {overview === 'latest' && (
          <>
            <PatientFromAppointment test={'Latest'} />
          </>
        )}
        {overview === 'exam' && (
          <>
            <PatientFromAppointment test={'Exam'} />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default RMenu
