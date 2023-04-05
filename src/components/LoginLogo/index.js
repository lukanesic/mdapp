import React from 'react'
import { motion } from 'framer-motion'

const LoginLogo = () => {
  return (
    <motion.div
      className='login-logo'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, delay: 0.5 }}
      exit={{ opacity: 0, delay: 3 }}
    >
      <motion.img
        src={'./ulnaris-logo.png'}
        alt={'Ulnaris Logo'}
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
          width: '800px',
          height: '800px',
          top: '0rem',
          transition: {
            duration: 1.5,
            type: 'spring',
            stiffness: 70,
            damping: 15,
          },
        }}
        transition={{
          delay: 3,
          duration: 1.5,
          // ease: 'anticipate',
          // ease: [0.1, 0.11, 0.13, 1],
          type: 'spring',
          stiffness: 70,
          damping: 15,
        }}
        // transition={{
        //   delay: 3,
        //   duration: 1,
        // }}
      />
    </motion.div>
  )
}

export default LoginLogo
