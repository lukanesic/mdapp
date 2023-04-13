import React, { useState } from 'react'
import Btn from '../Btn'
import FormLayout from '../../layouts/FormLayout'

import { AnimatePresence, motion } from 'framer-motion'

const SelectedPatient = ({ setAppType, setOpen, disable }) => {
  const [success, setSuccess] = useState(false)

  return (
    <FormLayout
      back={!success}
      loc={'existing'}
      setAppType={setAppType}
      heading2={'Selected Patient'}
      paragraph={
        'Fill the form with the information to create new appointment.'
      }
    >
      <div className='space-div' />

      {/* Ovi podaci dolaze iz redux-a, sad su static */}
      <div className='selected-info'>
        {' '}
        <h2>Islam Makhachev</h2>
        <p>islam@gmail.com</p>
        <h4>
          PatientID: <span>0134014153</span>
        </h4>
      </div>

      <AnimatePresence>
        {!success && (
          <div className='fill-form'>
            {/* <Heading2 text={'Date:'} /> */}
            <div className='inputs'>
              <input type='text' placeholder='DD' maxlength='2' />
              <input type='text' placeholder='MM' maxlength='2' />
              <input type='text' placeholder='YY' maxlength='4' />
            </div>
          </div>
        )}

        {success && (
          <div className='fill-form'>
            <motion.div
              className='success'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <img
                src='./success.png'
                alt='success'
                width='70px'
                height='70px'
              />
              <span>Appointment added!</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Btn
        title={`${!success ? 'Confirm schedule' : 'Close'}`}
        cls={'full'}
        onClick={!success ? () => setSuccess(true) : () => setOpen(false)}
      />
    </FormLayout>
  )
}

export default SelectedPatient
