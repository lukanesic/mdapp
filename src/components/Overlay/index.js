import React from 'react'
import { motion } from 'framer-motion'

const Overlay = ({ open, setOpen }) => {
  return (
    <motion.div
      className='overlay'
      onClick={() => setOpen(!open)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
  )
}

export default Overlay
