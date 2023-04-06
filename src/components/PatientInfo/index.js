import React from 'react'
import Heading2 from './../Heading2'
import Btn from './../Btn'

import { AiOutlineClose } from 'react-icons/ai'

import { motion } from 'framer-motion'

const PatientInfo = ({ patient }) => {
  return (
    <div className='patientinfo'>
      <AiOutlineClose className='icon' />

      {!patient && <Placeholders />}

      {patient && (
        <motion.div
          className='patient-info-box'
          initial={{ y: 10, scale: 0.98, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ delay: 3, duration: 1.5 }}
        >
          <div className='left'>
            <img
              src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
          </div>
          <div className='right'>
            <Heading2 text={'Djinajlou Ali'} color={'#fff'} />
            <ul>
              <li>
                Phone: <span>+5352351433</span>
              </li>
              <li>
                Email: <span>alicemcenze@gmail.com</span>
              </li>
              <li>
                Patient ID: <span>3411351</span>
              </li>
              <li>
                Birth Date: <span>31.12.2011</span>
              </li>
            </ul>
            <Btn
              title={'Delete Patient'}
              onClick={() => console.log('funkcija za brisanja pacijenta')}
              cls={'delete-btn'}
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default PatientInfo

const Placeholders = () => {
  return (
    <div className='placeholders'>
      <div className='left'>
        <div className='img-place' />
      </div>
      <div className='right'>
        <div className='heading-place' />
        <div className='six-box'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
        </div>
        <div className='btn-holder'></div>
      </div>
    </div>
  )
}
