import React from 'react'
import PatientCard from '../../components/PatientCard'

import Heading2 from './../../components/Heading2'
import Search from './../../components/Seach'

import { motion } from 'framer-motion'

// test data
const patients = [
  {
    name: 'Islam Makhachev',
    email: 'islam@gmail.com',
    profile:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3332412.png&w=350&h=254',
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
    name: 'Charles Oliveira',
    email: 'oliveira@gmail.com',
    profile: 'https://a.espncdn.com/i/headshots/mma/players/full/2504169.png',
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
    name: 'Conor McGregor',
    email: 'conor@gmail.com',
    profile: 'https://a.espncdn.com/i/headshots/mma/players/full/3022677.png',
    id: '5',
  },
  {
    name: 'Khabib Nurmagomedov',
    email: 'khabib@gmail.com',
    profile:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2611557.png&w=350&h=254',
    id: '5',
  },
]

const container = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
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
}

const PatientList = ({ setPatient }) => {
  return (
    <motion.div className='patientlist'>
      <motion.div className='patientlist-top'>
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
              btnText={'View patient'}
              onClick={() => setPatient(true)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default PatientList
