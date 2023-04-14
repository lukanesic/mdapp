import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PatientFromAppointment from '../../containers/PatientFromAppointment'

const RMenu = ({ overview }) => {
  // ovaj menu ima svoj state. Jer ja moram da znam da li dolazi vec
  // postojeca examinacija, ili otvaram novi start examination.
  // zato moram da pratim sta dolazi u komponentu kako bi je ucionio re-usable.
  // zapravo to ce da bude kao i na LMenu, sa parent komponente, ali ovo
  // nek stoji ovde da me podseti ako se pogubim

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
