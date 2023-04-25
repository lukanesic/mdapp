import React, { useState } from 'react'
import PatientCard from '../../components/PatientCard'

import Heading2 from './../../components/Heading2'
import Search from './../../components/Seach'

import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { addPatient } from '../../redux/slices/patientsSlice'

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
}

const item = {
  initial: { scale: 0.98, y: 10, opacity: 0 },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: { scale: 0.98, y: 10, opacity: 0, transition: { duration: 1 } },
}

const PatientList = () => {
  const { patients } = useSelector((state) => state.patients)
  const [patName, setPatName] = useState('')

  // test
  const dispatch = useDispatch()

  return (
    <motion.div className='patientlist'>
      <motion.div className='patientlist-top'>
        <Heading2 text={'Patients'} />
        {Object.keys(patients).length !== 0 && (
          <Search
            cls={'light'}
            placeholder={'Search by name'}
            onChange={(e) => setPatName(e.target.value)}
          />
        )}
      </motion.div>

      <motion.div
        className='patientlist-list'
        variants={container}
        initial='initial'
        animate='animate'
      >
        <>
          {Object.keys(patients).length === 0 ? (
            <>
              {[0, 1, 2, 3, 4].map((item, index) => (
                <PatientListPlaceholder key={'place'} />
              ))}
              {/* <h1>Nema pacijenata</h1> */}
            </>
          ) : (
            <>
              {Object.keys(patients).length !== 0 &&
                patients
                  .filter((patient) => {
                    if (patName === '') return patient
                    else if (patient.name.includes(patName)) return patient
                  })
                  .map((patient, index) => (
                    <motion.div variants={item} key={'patients'}>
                      <PatientCard
                        key={patient.id}
                        name={patient.name}
                        subtitle={patient.email}
                        image={patient.image}
                        index={index}
                        btnText={'View patient'}
                        onClick={() => dispatch(addPatient(patient.id))}
                      />
                    </motion.div>
                  ))}
            </>
          )}
        </>
      </motion.div>
    </motion.div>
  )
}

export default PatientList

const PatientListPlaceholder = () => {
  return (
    <div className='patient-list-placeholder'>
      <div className='placeholder-container-img' />

      <div>
        <div className='placeholder-info'></div>
        <div className='placeholder-info'></div>
        <div className='placeholder-info'></div>
      </div>
    </div>
  )
}
