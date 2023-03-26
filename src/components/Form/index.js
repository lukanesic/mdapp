import React from 'react'
import { motion } from 'framer-motion'

const Form = ({ setForward, setSuccess }) => {
  const handleTransition = () => {
    setSuccess(true)
    setForward(true)
  }

  return (
    <motion.form
      onSubmit={(e) => e.preventDefault()}
      className='form'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.8,
        },
      }}
      transition={{ duration: 0.8, delay: 3.5 }}
    >
      <h3>Sign in</h3>
      <input type='text' placeholder='Username' />
      <button className='empty'>Next</button>

      <span>Or continue as Visitor to test the application</span>
      <button className='full' onClick={() => handleTransition()}>
        Test App
      </button>
    </motion.form>
  )
}

export default Form
