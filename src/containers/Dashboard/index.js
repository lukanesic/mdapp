import React from 'react'
import Heading1 from '../../components/Heading1'
import Paragraph from '../../components/Paragraph'

import { HiUsers, HiUserAdd } from 'react-icons/hi'
import { BsCalendarWeek } from 'react-icons/bs'
import { MdPostAdd } from 'react-icons/md'

import { motion } from 'framer-motion'

const Dashboard = ({
  dashboard,
  setDashboard,
  openLMenu,
  setOpenLMenu,
  setAddForm,
}) => {
  return (
    <motion.div
      className='dashboard'
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.8, duration: 1.2 }}
    >
      <img src='./dash-logo.png' alt='Ulnaris Logo' />
      <div className='welcome-message'>
        <Heading1 title={'Welcome Visitor'} />
        <Paragraph
          text={`This is test application. Main task of this application is to add,
          monitor and delete patients as a type of medical records.`}
        />

        <ul>
          <li onClick={() => setDashboard('patients')}>
            <HiUsers />
            <span>Patients</span>
          </li>
          <li>
            <BsCalendarWeek />{' '}
            <span onClick={() => setDashboard('appointments')}>
              Appointments
            </span>
          </li>
          <li>
            <HiUserAdd />{' '}
            <span
              onClick={() => {
                setOpenLMenu(!openLMenu)
                setAddForm('patient')
              }}
            >
              Add Patient
            </span>
          </li>
          <li>
            <MdPostAdd />{' '}
            <span
              onClick={() => {
                setOpenLMenu(!openLMenu)
                setAddForm('appointment')
              }}
            >
              Add Appointment
            </span>
          </li>
          <li>Logout</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Dashboard
