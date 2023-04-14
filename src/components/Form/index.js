import React from 'react'
import Btn from '../Btn'
import { motion } from 'framer-motion'

const Form = ({ funcForNextStep, isAdded, setIsAdded, btnTitle }) => {
  return (
    <>
      {!isAdded && (
        <>
          <div className='form'>
            <label>Full Name</label>
            <input type='text' />
            <label>E-mail</label>
            <input type='text' />
            <label>Gender</label>
            <input type='text' />
            <label>Birth Date</label>
            <input type='text' />
            <label>Phone</label>
            <input type='text' />
            <label>Personal ID Number</label>
            <input type='text' />
          </div>
        </>
      )}

      {isAdded && (
        <div className='fill-form'>
          <motion.div
            className='success'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <img src='./success.png' alt='success' width='70px' height='70px' />
            <span>Patient added!</span>
          </motion.div>
        </div>
      )}

      <Btn
        title={`${!isAdded ? 'Add Patient' : btnTitle}`}
        onClick={
          !isAdded ? () => setIsAdded(!isAdded) : () => funcForNextStep()
        }
        cls={'full'}
      />
    </>
  )
}

export default Form
