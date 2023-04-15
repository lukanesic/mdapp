import React from 'react'
import Heading2 from './../Heading2'
import Btn from './../Btn'

import { AnimatePresence, motion } from 'framer-motion'
import CloseIcon from '../CloseIcon'

const PatientInfo = ({ patient, setPatient }) => {
  return (
    <div className='patientinfo'>
      {patient && (
        <CloseIcon onClick={() => setPatient(false)} color={'#fff'} />
      )}

      <AnimatePresence mode='wait'>
        {!patient && <Placeholders key={'placeholders'} />}

        {patient && (
          <>
            <PatientInfoBox key={'patient'} />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PatientInfo

const PatientInfoBox = () => {
  return (
    <motion.div
      className='patient-info-box'
      initial={{ y: 5, scale: 0.99, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      exit={{ y: 5, scale: 0.99, opacity: 0 }}
    >
      <div className='left'>
        <img
          src='https://a.espncdn.com/i/headshots/mma/players/full/3022677.png'
          alt=''
        />
      </div>
      <div className='right'>
        <Heading2 text={'Conor McGregor'} color={'#fff'} />
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
        <Btn
          title={'Delete Patient'}
          onClick={() => console.log('funkcija za brisanja pacijenta')}
          cls={'delete-btn'}
        />
      </div>
    </motion.div>
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
