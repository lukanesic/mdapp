import React from 'react'
import { motion } from 'framer-motion'
import Btn from '../Btn'
import { useDispatch } from 'react-redux'
import { fetchPatientsFromDB } from '../../redux/slices/patientsSlice'

const LoginForm = ({ setIsEntered }) => {
  const dispatch = useDispatch()

  const handleEntered = () => {
    setIsEntered(true)
    dispatch(fetchPatientsFromDB())
  }

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
      <Btn title={'Test app'} cls={'full'} onClick={() => handleEntered()} />
    </motion.form>
  )
}

export default LoginForm
