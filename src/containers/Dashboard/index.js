import React from 'react'
import Heading1 from '../../components/Heading1'
import Paragraph from '../../components/Paragraph'

import { HiUsers, HiUserAdd } from 'react-icons/hi'
import { BsCalendarWeek } from 'react-icons/bs'
import { MdPostAdd } from 'react-icons/md'

const Dashboard = ({ dashboard, setDashboard }) => {
  return (
    <div className='dashboard'>
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
            <HiUserAdd /> <span>Add Patient</span>
          </li>
          <li>
            <MdPostAdd /> <span>Add Appointment</span>
          </li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
