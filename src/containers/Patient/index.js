import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import PatientExams from '../../components/PatientExams'
import PatientInfo from '../../components/PatientInfo'

import Overlay from './../../components/Overlay'
import {
  removePatient,
  removeSelectedExam,
} from '../../redux/slices/patientsSlice'
import { useDispatch, useSelector } from 'react-redux'

const Patient = () => {
  const [openExam, setOpenExam] = useState(false)
  const dispatch = useDispatch()

  const { patient } = useSelector((state) => state.patients)

  const handleState = () => {
    setOpenExam(false)
    dispatch(removePatient())

    // dispatch(removeSelectedExam())
  }

  return (
    <>
      <AnimatePresence>
        {Object.keys(patient).length > 0 && (
          <Overlay onClick={() => handleState()} />
        )}
      </AnimatePresence>
      <div className='patient'>
        <PatientInfo patient={patient} onClick={handleState} />
        <PatientExams
          patient={patient}
          openExam={openExam}
          setOpenExam={setOpenExam}
        />{' '}
      </div>
    </>
  )
}

export default Patient
