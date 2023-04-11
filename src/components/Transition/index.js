import React from 'react'
import { motion } from 'framer-motion'

const Transition = () => {
  return (
    <motion.div
      className='transition'
      initial={{ backgroundColor: '#01a1c8', right: '-100vw', top: 0 }}
      animate={{ backgroundColor: '#01a1c8', right: '110vw' }}
      transition={{
        delay: 2,
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: 3,
      }}
    />
  )
}

export default Transition
