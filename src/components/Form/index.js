import React, { useState } from 'react'
import Btn from '../Btn'
import { motion } from 'framer-motion'

const Form = ({ funcForNextStep, nextStep }) => {
  const [isAdded, setIsAdded] = useState(false)

  const funcToContinue = () => {
    setIsAdded(!isAdded)
    setTimeout(() => {
      funcForNextStep(nextStep)
    }, 3000)
  }

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
          <Btn
            title={'Add Patient'}
            onClick={() => funcToContinue()}
            cls={'full'}
          />
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
    </>
  )
}

export default Form
