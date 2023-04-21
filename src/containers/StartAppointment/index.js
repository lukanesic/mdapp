import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PatientFromAppointmentInfo from '../../components/PatientFromAppointmentInfo'
import Heading2 from '../../components/Heading2'
import Btn from './../../components/Btn'
import { addNewExam } from '../../redux/slices/patientsSlice'
import { interactRightMenu } from '../../redux/slices/menuSlice'

import { AnimatePresence, motion } from 'framer-motion'
import SuccessMsg from '../../components/SuccessMsg'

const StartAppointment = () => {
  const { selectExam } = useSelector((state) => state.patients)
  return (
    <>
      <PatientFromAppointmentInfo patient={selectExam} />
      <StartAppointmentForm exam={selectExam} />
    </>
  )
}

export default StartAppointment

const StartAppointmentForm = ({ exam }) => {
  const [newExam, setNewExam] = useState('')
  const [success, setSuccess] = useState(false)

  const dispatch = useDispatch()

  const handleSaveExam = (payload) => {
    if (newExam !== '') {
      dispatch(addNewExam(payload))
      setSuccess(true)
    }
  }

  return (
    <div className='start-appointment-form'>
      <AnimatePresence mode='wait'>
        {!success && (
          <motion.div
            key={'textarea'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <Heading2 text={`Start Examination: ${exam.date}`} />
            <div className='start-app-text'>
              <textarea
                placeholder='Start typing...'
                onChange={(e) => setNewExam(e.target.value)}
              />
            </div>
          </motion.div>
        )}
        {success && <SuccessMsg text={'Examination Added!'} key={'msg'} />}
      </AnimatePresence>
      <Btn
        cls={'full'}
        onClick={
          success
            ? () => dispatch(interactRightMenu(false))
            : () =>
                handleSaveExam({
                  review: newExam,
                  examID: exam.examID,
                  id: exam.patientID,
                  isReviewed: true,
                  date: exam.date,
                })
        }
        title={success ? 'Close' : 'Save'}
      />{' '}
    </div>
  )
}
