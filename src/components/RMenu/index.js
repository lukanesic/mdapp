import React from 'react'
import { motion } from 'framer-motion'

const RMenu = () => {
  return (
    <motion.div
      className='rmenu'
      initial={{ opacity: 0, right: -500 }}
      animate={{ opacity: 1, right: 0 }}
      exit={{
        opacity: 0,
        right: -500,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      RMenu
    </motion.div>
  )
}

export default RMenu
