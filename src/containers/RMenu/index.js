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
      <p>
        Nadji neko resenje koje podrazumeva re-usable komponentu. Ako ne mozes
        da iskoristis PatientInfo komponentu, napravi novu. Na kraju krajeva
        ovde se pregleda samo sta pise u examinaciji. Mozes to i na drugaciji
        nacin da napravis u odnosu na PatientInfo.
      </p>
    </motion.div>
  )
}

export default RMenu
