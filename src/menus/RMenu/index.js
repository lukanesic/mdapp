import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PatientFromAppointment from '../../containers/PatientFromAppointment'
import { useSelector } from 'react-redux'
import StartAppointment from '../../containers/StartAppointment'

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
      {/* ukolikoo je latest, drugacija komponenta treba da bude. Gde moze da se pise, prepravlja itd. Ovo je bilo samo
      za test pa zato stoje iste. Promeni to. */}
      <AnimatePresence>
        {overview === 'latest' && (
          <>
            <StartAppointment />
          </>
        )}
        {overview === 'exam' && (
          <>
            <PatientFromAppointment />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default RMenu
