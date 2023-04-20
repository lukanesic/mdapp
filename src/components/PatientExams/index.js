import React from 'react'
import Heading1 from '../Heading1'
import Paragraph from '../Paragraph'

import { AnimatePresence, motion } from 'framer-motion'
import Heading2 from '../Heading2'
import Btn from '../Btn'
import ExamMenu from '../../menus/ExamMenu'
import { useDispatch } from 'react-redux'
import { addSelectedExam } from '../../redux/slices/patientsSlice'

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
      {Object.keys(patient).length > 0 && (
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
            {patient &&
              Object.keys(patient.examinations).length !== 0 &&
              patient.examinations.map((exam, index) => (
                <motion.div variants={item} key={index}>
                  <AllPatientExaminations
                    openExam={openExam}
                    setOpenExam={setOpenExam}
                    exam={exam}
                    patient={patient.name}
                  />
                </motion.div>
              ))}

            {patient && Object.keys(patient.examinations).length === 0 && (
              <div>
                <Heading2 text={'Patient doesnt have examinations!'} />
                <Paragraph
                  text={
                    'Start by adding new examination in the menu on the left.'
                  }
                />
              </div>
            )}
          </motion.div>
          {/* ako ne postoji, prikazujem placeholder */}
        </motion.div>
      )}

      {Object.keys(patient).length === 0 && <Placeholders key={'place'} />}
    </AnimatePresence>
  )
}

export default PatientExams

const AllPatientExaminations = ({ openExam, setOpenExam, exam, patient }) => {
  const dispatch = useDispatch()

  const handleOpenExam = () => {
    setOpenExam(!openExam)
    dispatch(addSelectedExam(exam))
  }

  return (
    <>
      {exam.isReviewed !== false && (
        <motion.div
          className='all-patient-exams'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          exit={{ opacity: 0 }}
        >
          <div className='info-cont'>
            <span>{patient}</span>
            <Heading2 text={exam.date} />
            <span>ExamID: {exam.examID}</span>
          </div>
          <Btn
            cls={'patient-btn'}
            title={'View Examination'}
            onClick={() => handleOpenExam()}
          />
        </motion.div>
      )}
    </>
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
