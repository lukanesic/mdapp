import React from 'react'
import Heading1 from '../Heading1'
import Paragraph from '../Paragraph'

import { motion } from 'framer-motion'

const PatientExams = ({ exams }) => {
  return (
    <div className='patientexams'>
      {/* ako postoji exams,mapiram ih */}
      {/* ako ne postoji, prikazujem placeholder */}
      <Placeholders />
    </div>
  )
}

export default PatientExams

const Placeholders = () => {
  return (
    <motion.div
      className='placeholders'
      initial={{ y: 10, scale: 0.98, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ delay: 3, duration: 1.5 }}
    >
      <img src='./dash-logo.png' alt='Ulnaris' />
      <Heading1 text={'Select Patient'} />
      <Paragraph
        text={
          'Select patient to see their personal information, appointments and examinations.'
        }
      />
      <div className='empty-div' />
      <Paragraph
        text={
          'You can also delete patient and examination that is not valid or you want to change something about it. '
        }
      />
    </motion.div>
  )
}
