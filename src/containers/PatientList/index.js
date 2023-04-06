import React from 'react'
import PatientCard from '../../components/PatientCard'

import Heading2 from './../../components/Heading2'
import Search from './../../components/Seach'

import { motion } from 'framer-motion'

// test data
const patients = [
  {
    name: 'Alcie McKenzie',
    email: 'mcenzie@gmail.com',
    profile:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    id: '1',
  },
  {
    name: 'Djinajlou Ali',
    email: 'djinajlou@gmail.com',
    profile:
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    id: '2',
  },
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '3',
  },
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '4',
  },
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '5',
  },
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '6',
  },
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '7',
  },
]

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 3.5, staggerChildren: 0.4 },
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
}

const PatientList = () => {
  return (
    <motion.div
      className='patientlist'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1.5 }}
    >
      <motion.div
        className='patientlist-top'
        initial={{ y: 10, scale: 0.98, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 3.2, duration: 1.5 }}
      >
        <Heading2 text={'Patients'} />
        <Search cls={'light'} placeholder={'Search by name'} />
      </motion.div>

      <motion.div
        className='patientlist-list'
        variants={container}
        initial='initial'
        animate='animate'
      >
        {patients.map((patient, index) => (
          <motion.div variants={item}>
            <PatientCard
              key={patient.id}
              name={patient.name}
              subtitle={patient.email}
              profile={patient.profile}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default PatientList
