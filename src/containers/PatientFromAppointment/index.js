import React from 'react'
import Btn from '../../components/Btn'
import CloseIcon from '../../components/CloseIcon'
import Heading2 from '../../components/Heading2'
import { motion } from 'framer-motion'

import Paragraph from './../../components/Paragraph'

import { useDispatch, useSelector } from 'react-redux'
import { interactRightMenu } from '../../redux/slices/menuSlice'

const PatientFromAppointment = () => {
  const { selectExam } = useSelector((state) => state.patients)

  return (
    <motion.div
      className='patient-from-appointment'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <PatientFromAppointmentCard patient={selectExam} />
      <PatientFromAppointmentExam exam={selectExam.exam} />
    </motion.div>
  )
}

export default PatientFromAppointment

// Componente koje saljem posle u posebne fileove
const PatientFromAppointmentCard = ({ patient }) => {
  const dispatch = useDispatch()

  return (
    <div className='patient-from-appointment-info'>
      <CloseIcon onClick={() => dispatch(interactRightMenu(false))} />
      {!patient && <Placeholders />}
      {patient && (
        <div className='patient-from-appointment-box'>
          <div className='left'>
            <img src={patient.image} alt={patient.name} />
          </div>
          <div className='right'>
            <Heading2 text={patient.name} color={' rgba(26, 128, 179, 1)'} />
            <ul>
              <li>
                Phone: <span>{patient.phone}</span>
              </li>
              <li>
                Email: <span>{patient.email}</span>
              </li>
              <li>
                ID: <span>{patient.patientID}</span>
              </li>
              <li>
                Birth Date: <span>{patient.birthDate}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

const PatientFromAppointmentExam = ({ exam }) => {
  return (
    <div className='patient-from-appointment-exam'>
      {!exam && <Placeholders />}
      {exam && (
        <>
          <Heading2 text={`Examination: ${exam.date}`} />
          <div className='space-div' />
          <div className='exam-text'>
            <Paragraph text={exam.review} />
          </div>
        </>
      )}
    </div>
  )
}

const Placeholders = () => {
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
