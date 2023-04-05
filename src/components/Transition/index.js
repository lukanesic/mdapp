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
        type: 'spring',
        stiffness: 10,
      }}
    />
  )
}

export default Transition
