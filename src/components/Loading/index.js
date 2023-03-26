import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div
      className='loading'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5 }}
      exit={{ opacity: 0, delay: 0 }}
    >
      <motion.img
        className='logo'
        initial={{
          width: '800px',
          height: '800px',
          left: '0',
          right: '0',
          marginLeft: 'auto',
          marginRight: 'auto',
          top: '0',
        }}
        animate={{
          width: '550px',
          height: '550px',
          top: '-5rem',
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.5,
          },
        }}
        transition={{
          delay: 3,
          duration: 0.5,
        }}
        src={'./ulnaris-logo.png'}
        alt={'Ulnaris Logo'}
      />
    </motion.div>
  )
}

export default Loading
