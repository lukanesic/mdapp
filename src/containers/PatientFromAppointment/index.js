import React from 'react'
import Btn from '../../components/Btn'
import CloseIcon from '../../components/CloseIcon'
import Heading2 from '../../components/Heading2'
import { motion } from 'framer-motion'

import Paragraph from './../../components/Paragraph'

import { useDispatch } from 'react-redux'
import { interactRightMenu } from '../../redux/slices/menuSlice'

const PatientFromAppointment = () => {
  return (
    <motion.div
      className='patient-from-appointment'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <PatientFromAppointmentCard patient />
      <PatientFromAppointmentExam exam />
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
            <img
              src='https://a.espncdn.com/i/headshots/mma/players/full/3022677.png'
              alt=''
            />
          </div>
          <div className='right'>
            <Heading2
              text={'Conor McGregor'}
              color={' rgba(26, 128, 179, 1)'}
            />
            <ul>
              <li>
                Phone: <span>+5352351433</span>
              </li>
              <li>
                Email: <span>conor@gmail.com</span>
              </li>
              <li>
                Patient ID: <span>3411351</span>
              </li>
              <li>
                Birth Date: <span>31.12.1988</span>
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
          <Heading2 text={'Examination: 20.03.2023'} />
          <div className='space-div' />
          <div className='exam-text'>
            <Paragraph
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            />
            <Paragraph
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            />
            <Paragraph
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            />
            <Paragraph
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            />
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
