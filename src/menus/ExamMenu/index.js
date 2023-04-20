import React from 'react'
import { motion } from 'framer-motion'
import Heading2 from '../../components/Heading2'
import Paragraph from '../../components/Paragraph'
import BackIcon from '../../components/BackIcon'

import { useSelector } from 'react-redux'

const ExamMenu = ({ setOpenExam }) => {
  const { selectExam } = useSelector((state) => state.patients)

  const handleCloseExam = () => {
    setOpenExam(false)
  }

  return (
    <motion.div
      className='exam-menu'
      initial={{ opacity: 0, right: -500 }}
      animate={{ opacity: 1, right: 0 }}
      exit={{
        opacity: 0,
        right: -500,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className='exam-h'>
        <BackIcon onClick={() => handleCloseExam()} />

        <Heading2 text={`Examination: ${selectExam.date}`} />
      </div>

      <div className='space-div' />
      <div className='exam-text'>
        <Paragraph text={selectExam.review} />
      </div>
    </motion.div>
  )
}

export default ExamMenu
