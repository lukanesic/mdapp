import React from 'react'
import Heading1 from '../Heading1'
import Paragraph from '../Paragraph'

import { AnimatePresence, motion } from 'framer-motion'
import Heading2 from '../Heading2'
import Btn from '../Btn'
import ExamMenu from '../../menus/ExamMenu'

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

const PatientExams = ({ patient, openExam, setOpenExam }) => {
  return (
    <AnimatePresence mode='wait'>
      {patient && (
        <motion.div
          className='patientexams'
          key={'patient'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {openExam && (
              <ExamMenu openExam={openExam} setOpenExam={setOpenExam} />
            )}
          </AnimatePresence>
          {/* ako postoji exams,mapiram ih */}
          <motion.div
            className='patientexams-container'
            variants={container}
            initial='initial'
            animate='animate'
          >
            {[0, 1, 2, 3, 4, 5, 6].map((exam, index) => (
              <motion.div variants={item}>
                <AllPatientExaminations
                  openExam={openExam}
                  setOpenExam={setOpenExam}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* ako ne postoji, prikazujem placeholder */}
        </motion.div>
      )}

      {!patient && <Placeholders key={'place'} />}
    </AnimatePresence>
  )
}

export default PatientExams

const AllPatientExaminations = ({ openExam, setOpenExam }) => {
  return (
    <motion.div
      className='all-patient-exams'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      exit={{ opacity: 0 }}
    >
      <div className='info-cont'>
        <span>Conor McGregor</span>
        <Heading2 text={'20.03.2023'} />
        <span>ExaminationID: 4124143</span>
      </div>
      <Btn
        cls={'patient-btn'}
        title={'View Examination'}
        onClick={() => setOpenExam(!openExam)}
      />
    </motion.div>
  )
}

const Placeholders = () => {
  return (
    <motion.div
      className='placeholders'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      exit={{ opacity: 0 }}
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
