import React from 'react'
import { motion } from 'framer-motion'
import Heading2 from '../../components/Heading2'
import Paragraph from '../../components/Paragraph'
import Btn from '../../components/Btn'

import CloseIcon from './../../components/CloseIcon'

const LMenu = ({ form, openMenu, setOpen }) => {
  return (
    <motion.div
      className='lmenu'
      initial={{ opacity: 0, left: -500 }}
      animate={{ opacity: 1, left: 0 }}
      exit={{
        opacity: 0,
        left: -500,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <CloseIcon onClick={() => setOpen(!openMenu)} color={'#01a1c8'} />

      {form === 'patient' && (
        <>
          <h1>Patient</h1>
        </>
      )}
      {form === 'appointment' && <AppointmentForm />}
    </motion.div>
  )
}

export default LMenu

const AppointmentForm = () => {
  return (
    <div className='appointment-form'>
      <Heading2 text={'Add new appointment'} />
      <div className='space-div' />
      <Paragraph
        text={
          'Add new appointment for exisinting patient, or create new pateint and then add appointment'
        }
      />

      <Btn cls={'large'} title={'Existing patient'} />
      <Btn cls={'large'} title={'New patient'} />
    </div>
  )
}
