import React from 'react'
import { motion } from 'framer-motion'

import CloseIcon from '../../components/CloseIcon'
import SelectAppointmentType from '../../containers/SelectAppointmentType'
import NewPatient from './../../containers/NewPatient'

const LMenu = ({ form, openMenu, setOpen }) => {
  return (
    <motion.div
      className='lmenu'
      initial={{ opacity: 0, left: -500 }}
      animate={{ opacity: 1, left: 0 }}
      exit={{
        opacity: 0,
        left: -500,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <CloseIcon onClick={() => setOpen(!openMenu)} color={'#01a1c8'} />

      {form === 'patient' && <NewPatient setOpen={setOpen} open={openMenu} />}
      {form === 'appointment' && (
        <SelectAppointmentType setOpen={setOpen} open={openMenu} />
      )}
    </motion.div>
  )
}

export default LMenu
