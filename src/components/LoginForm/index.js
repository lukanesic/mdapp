import React from 'react'
import { motion } from 'framer-motion'
import Btn from '../Btn'

const LoginForm = ({ setIsEntered }) => {
  return (
    <motion.form
      onSubmit={(e) => e.preventDefault()}
      className='login-form'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0,
        },
      }}
      transition={{ duration: 1, delay: 3.8 }}
    >
      <h3>Sign in</h3>
      <input type='text' placeholder='Username' />
      <div className='err'>
        <Btn title={'Next'} cls={'empty'} onClick={() => console.log('next')} />
      </div>

      <span>Or continue as Visitor to test the application</span>
      <Btn title={'Test app'} cls={'full'} onClick={() => setIsEntered(true)} />
    </motion.form>
  )
}

export default LoginForm
