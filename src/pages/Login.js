import React from 'react'
import LoginForm from '../components/LoginForm'
import LoginLogo from '../components/LoginLogo'
import { motion } from 'framer-motion'

const Login = ({ setIsEntered }) => {
  return (
    <motion.div
      className='login'
      key={'login'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5 }}
      exit={{ opacity: 0, delay: 3 }}
    >
      <LoginLogo />
      <LoginForm setIsEntered={setIsEntered} />
    </motion.div>
  )
}

export default Login
