import React, { useState } from 'react'
import Heading2 from './../Heading2'
import Btn from './../Btn'

import { deleteDoc, doc } from '@firebase/firestore'
import { db } from '../../firebase'

import { AnimatePresence, motion } from 'framer-motion'
import CloseIcon from '../CloseIcon'
import { deletePatient } from '../../redux/slices/patientsSlice'
import { useDispatch } from 'react-redux'

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
  const [deleteQ, setDeleteQ] = useState(false)
  const dispatch = useDispatch()

  const handleDeletePatient = async (id) => {
    dispatch(deletePatient(id))
    // nece preko redux-a
    // dispatch(deletePatientFromDB(id))
    await deleteDoc(doc(db, 'patients', id))
  }

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
          <img src={patient.image} alt={patient.name} />
        </div>
        <div className='right'>
          <Heading2 text={patient.name} color={'#fff'} />
          <ul>
            <li>
              Phone: <span>{patient.phone}</span>
            </li>
            <li>
              Email: <span>{patient.email}</span>
            </li>
            <li>
              ID: <span>{patient.id}</span>
            </li>
            <li>
              Birth Date: <span>{patient.birthDate}</span>
            </li>
          </ul>

          <AnimatePresence>
            {!deleteQ && (
              <Btn
                title={'Delete Patient'}
                onClick={() => setDeleteQ(true)}
                cls={'delete-btn'}
              />
            )}

            {deleteQ && (
              <Btn
                title={'Confirm deletion'}
                onClick={() => handleDeletePatient(patient.id)}
                cls={'delete-red-btn'}
              />
            )}
          </AnimatePresence>
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
