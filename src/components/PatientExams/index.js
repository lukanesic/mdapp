import React from 'react'
import Heading1 from '../Heading1'
import Paragraph from '../Paragraph'

import { motion } from 'framer-motion'
import Heading2 from '../Heading2'
import Btn from '../Btn'

const PatientExams = ({ exams }) => {
  return (
    <>
      {exams && (
        <div className='patientexams'>
          <Heading2 text={'Examinations'} />
          <div className='space-div' />

          {/* ako postoji exams,mapiram ih */}
          <div className='patientexams-container'>
            {[0, 1, 2, 3, 4, 5, 6].map((exam, index) => (
              <AllPatientExaminations />
            ))}
          </div>

          {/* ako ne postoji, prikazujem placeholder */}
        </div>
      )}

      {!exams && <Placeholders />}
    </>
  )
}

export default PatientExams

const AllPatientExaminations = () => {
  return (
    <div className='all-patient-exams'>
      <div className='info-cont'>
        <span>Conor McGregor</span>
        <Heading2 text={'20.03.2023'} />
        <span>ExaminationID: 4124143</span>
      </div>
      <Btn cls={'patient-btn'} title={'View Examination'} />
    </div>
  )
}

const Placeholders = () => {
  return (
    <motion.div
      className='placeholders'
      initial={{ y: 10, scale: 0.98, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <img src='./dash-logo.png' alt='Ulnaris' />
      <Heading1 title={'Select Patient'} />
      <Paragraph
        text={
          'Select patient to see their personal information, appointments and examinations.'
        }
      />
      <div className='empty-div' />
      <Paragraph
        text={
          'You cann also delete patient and examination that is not valid or you want to change something about it. '
        }
      />
    </motion.div>
  )
}
