import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Success = ({ success, setSuccess }) => {
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false)
    }, 1500)
  }, [])

  return (
    <motion.div
      className='success'
      initial={{ opacity: 0, width: '0vw' }}
      animate={{ opacity: 1, width: '100vw' }}
      exit={{
        opacity: 1,
        width: '400px',
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  )
}

export default Success
