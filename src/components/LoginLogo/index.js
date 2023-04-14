import React from 'react'
import { motion } from 'framer-motion'

const LoginLogo = () => {
  return (
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
        top: '0rem',
      }}
      animate={{
        width: '550px',
        height: '550px',
        top: '-7rem',
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
  )
}

export default LoginLogo
