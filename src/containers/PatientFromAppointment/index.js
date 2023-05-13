import React from 'react'
import Heading2 from '../../components/Heading2'
import { AnimatePresence, motion } from 'framer-motion'

import PatientFromAppointmentInfo from '../../components/PatientFromAppointmentInfo'

import Paragraph from './../../components/Paragraph'

import { useDispatch, useSelector } from 'react-redux'

import { AiFillDelete } from 'react-icons/ai'
import { useState } from 'react'
import SuccessMsg from '../../components/SuccessMsg'
import {
  deleteExamFromDB,
  deleteExamination,
} from '../../redux/slices/patientsSlice'

const PatientFromAppointment = () => {
  const { selectExam } = useSelector((state) => state.patients)

  return (
    <motion.div
      className='patient-from-appointment'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <PatientFromAppointmentInfo patient={selectExam} />
      <PatientFromAppointmentExam patient={selectExam} />
    </motion.div>
  )
}

export default PatientFromAppointment

const PatientFromAppointmentExam = ({ patient }) => {
  const [deleteExam, setDeleteExam] = useState(false)
  const dispatch = useDispatch()

  console.log(patient.exam.examID)

  const handleDeleteExam = (payload) => {
    console.log(payload)
    setDeleteExam(true)
    dispatch(deleteExamination(payload))

    dispatch(
      deleteExamFromDB({
        examID: payload.examID,
        date: payload.date,
        review: payload.review,
        isReviewed: payload.isReviewed,
        time: payload.time,
        id: payload.id,
      })
    )
  }

  return (
    <div className='patient-from-appointment-exam'>
      {!patient.exam && <Placeholders />}
      {patient.exam && (
        <AnimatePresence>
          {!deleteExam && (
            <>
              <AiFillDelete
                className='delete'
                onClick={() =>
                  handleDeleteExam({
                    id: patient.patientID,
                    examID: patient.exam.examID,
                    date: patient.exam.date,
                    review: patient.exam.review,
                    isReviewed: patient.exam.isReviewed,
                    time: patient.exam.time,
                  })
                }
              />
              <Heading2 text={`Examination: ${patient.exam.date}`} />
              <div className='space-div' />
              <div className='exam-text'>
                <Paragraph text={patient.exam.review} />
              </div>
            </>
          )}
          {deleteExam && <SuccessMsg text={'Exam Deleted!'} />}
        </AnimatePresence>
      )}
    </div>
  )
}

export const Placeholders = () => {
  return (
    <div className='placeholders'>
      <div className='left'>
        <div className='img-place' />
      </div>
      <div className='right'>
        <div className='heading-place' />
        <div className='six-box'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
        </div>
        <div className='btn-holder'></div>
      </div>
    </div>
  )
}
