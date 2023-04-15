import React from 'react'
import { motion } from 'framer-motion'

const Overlay = ({ onClick }) => {
  return (
    <motion.div
      className='overlay'
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
  )
}

export default Overlay
