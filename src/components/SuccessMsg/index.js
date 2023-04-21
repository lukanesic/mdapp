import React from 'react'
import { motion } from 'framer-motion'

const SuccessMsg = ({ text }) => {
  return (
    <div className='fill-form'>
      <motion.div
        className='success'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <img src='./success.png' alt='success' width='70px' height='70px' />
        <span>{text}</span>
      </motion.div>
    </div>
  )
}

export default SuccessMsg
