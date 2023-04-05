import React from 'react'
import PatientCard from '../../components/PatientCard'

import Heading2 from './../../components/Heading2'
import Search from './../../components/Seach'

// test data
const patients = [
  {
    name: 'Alcie McKenzie',
    email: 'mcenzie@gmail.com',
    profile:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    id: '1',
  },
  {
    name: 'Djinajlou Ali',
    email: 'djinajlou@gmail.com',
    profile:
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    id: '2',
  },
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '3',
  },
]

const PatientList = () => {
  return (
    <div className='patientlist'>
      <div className='patientlist-top'>
        <Heading2 text={'Patients'} />
        <Search cls={'light'} placeholder={'Search by name'} />
      </div>
      <div className='patientlist-list'>
        {patients.map((patient, index) => (
          <PatientCard
            key={patient.id}
            name={patient.name}
            subtitle={patient.email}
            profile={patient.profile}
          />
        ))}
      </div>
    </div>
  )
}

export default PatientList
