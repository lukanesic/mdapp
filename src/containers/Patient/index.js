import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import PatientExams from '../../components/PatientExams'
import PatientInfo from '../../components/PatientInfo'

import Overlay from './../../components/Overlay'

const Patient = ({ patient, setPatient }) => {
  const [openExam, setOpenExam] = useState(false)

  const handleState = () => {
    setOpenExam(false)
    setPatient(!patient)
  }

  return (
    <>
      <AnimatePresence>
        {patient && <Overlay onClick={() => handleState()} />}
      </AnimatePresence>
      <div className='patient'>
        <PatientInfo patient={patient} setPatient={setPatient} />
        <PatientExams
          patient={patient}
          setPatient={setPatient}
          openExam={openExam}
          setOpenExam={setOpenExam}
        />{' '}
      </div>
    </>
  )
}

export default Patient
