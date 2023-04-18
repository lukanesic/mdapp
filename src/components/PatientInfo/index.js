import React from 'react'
import Heading2 from './../Heading2'
import Btn from './../Btn'

import { AnimatePresence, motion } from 'framer-motion'
import CloseIcon from '../CloseIcon'

const PatientInfo = ({ patient, onClick }) => {
  return (
    <div className='patientinfo'>
      {Object.keys(patient).length !== 0 && (
        <CloseIcon onClick={() => onClick()} color={'#fff'} />
      )}

      <AnimatePresence mode='wait'>
        {Object.keys(patient).length === 0 && (
          <Placeholders key={'placeholders'} />
        )}

        {Object.keys(patient).length > 0 && (
          <motion.div
            key={'patient'}
            exit={{
              y: 5,
              scale: 0.99,
              opacity: 0,
              transition: { delay: 0.2, duration: 0.4 },
            }}
          >
            <PatientInfoBox patient={patient} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PatientInfo

const PatientInfoBox = ({ patient }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={patient.id}
        className='patient-info-box'
        initial={{ y: 5, scale: 0.99, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        exit={{ y: 5, scale: 0.99, opacity: 0 }}
      >
        <div className='left'>
          <img src={patient.profile} alt='' />
        </div>
        <div className='right'>
          <Heading2 text={patient.name} color={'#fff'} />
          <ul>
            <li>
              Phone: <span>+5352351433</span>
            </li>
            <li>
              Email: <span>{patient.email}</span>
            </li>
            <li>
              Patient ID: <span>3411351</span>
            </li>
            <li>
              Birth Date: <span>31.12.1988</span>
            </li>
          </ul>
          <Btn
            title={'Delete Patient'}
            onClick={() => console.log('funkcija za brisanja pacijenta')}
            cls={'delete-btn'}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

const Placeholders = () => {
  return (
    <motion.div
      className='placeholders-info'
      initial={{ y: 5, scale: 0.99, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      exit={{ y: 5, scale: 0.99, opacity: 0 }}
    >
      <div className='left animate'></div>
      <div className='right'>
        <div className='animate' />
        <ul>
          <li className='animate'></li>
          <li className='animate'></li>
          <li className='animate'></li>
          <li className='animate'></li>
        </ul>
        <div className='btn-placeholder animate' />
      </div>
    </motion.div>
  )
}
