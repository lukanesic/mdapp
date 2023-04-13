import React from 'react'
import Heading2 from '../components/Heading2'
import Paragraph from '../components/Paragraph'
import BackIcon from '../components/BackIcon'

import { motion } from 'framer-motion'

const FormLayout = ({
  children,
  heading2,
  paragraph,
  loc,
  setAppType,
  back,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {back && <BackIcon onClick={() => setAppType(loc)} />}
      <Heading2 text={heading2} />
      <div className='space-div' />
      <Paragraph text={paragraph} />
      {children}
    </motion.div>
  )
}

export default FormLayout
