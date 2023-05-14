import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PatientFromAppointmentInfo from '../../components/PatientFromAppointmentInfo'
import Heading2 from '../../components/Heading2'
import Btn from './../../components/Btn'
import {
  addNewAppointmentToDB,
  addNewExam,
} from '../../redux/slices/patientsSlice'
import { interactRightMenu } from '../../redux/slices/menuSlice'

import { AnimatePresence, motion } from 'framer-motion'
import SuccessMsg from '../../components/SuccessMsg'
import { db } from '../../firebase'

import { doc, updateDoc, arrayRemove } from '@firebase/firestore'

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

  const { appointmentToDelete } = useSelector((state) => state.patients)

  const handleSaveExam = async (payload) => {
    const newAppointmentObj = {
      review: payload.review,
      examID: payload.examID,
      isReviewed: payload.isReviewed,
      date: payload.date,
      time: payload.time,
    }

    const oldAppointmentObj = {
      review: appointmentToDelete.review,
      examID: appointmentToDelete.examID,
      isReviewed: appointmentToDelete.isReviewed,
      date: appointmentToDelete.date,
      time: appointmentToDelete.time,
    }

    console.log(oldAppointmentObj)

    if (newExam !== '') {
      dispatch(addNewExam(payload))
      // dispatch(updateAppointmentToExamDB({ oldAppointmentOb, id: payload.id }))
      try {
        const patientRef = doc(db, 'patients', payload.id)

        await updateDoc(patientRef, {
          examinations: arrayRemove(oldAppointmentObj),
        })
        dispatch(addNewAppointmentToDB({ newAppointmentObj, id: payload.id }))
        setSuccess(true)
      } catch (error) {
        console.log(error)
      }
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
                  time: exam.time,
                })
        }
        title={success ? 'Close' : 'Save'}
      />{' '}
    </div>
  )
}
