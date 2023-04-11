import React from 'react'
import Heading2 from '../../components/Heading2'
import PatientCard from '../../components/PatientCard'

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
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '4',
  },
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '5',
  },
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '6',
  },
  {
    name: 'Jovana Jeremic',
    email: 'debil@gmail.com',
    profile:
      'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    id: '7',
  },
]

const LatestApp = () => {
  return (
    <div className='latest-app'>
      <Heading2 text={'Latest Appointments'} />
      <div className='latest'>
        {patients.map((patient, index) => (
          <div className='add-margin-on-card'>
            <PatientCard
              key={patient.id}
              name={patient.name}
              subtitle={patient.email}
              profile={patient.profile}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestApp
