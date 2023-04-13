import React from 'react'
import Heading2 from '../../components/Heading2'
import PatientCard from '../../components/PatientCard'

const patients = [
  {
    name: 'Islam Makhachev',
    email: '20.03.2023',
    profile:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3332412.png&w=350&h=254',
    id: '1',
  },
  {
    name: 'Djinajlou Ali',
    email: '21.03.2023',
    profile:
      'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    id: '2',
  },
  {
    name: 'Charles Oliveira',
    email: '22.03.2023',
    profile: 'https://a.espncdn.com/i/headshots/mma/players/full/2504169.png',
    id: '3',
  },
]

const LatestApp = () => {
  return (
    <div className='latest-app'>
      <Heading2 text={'New Appointments'} />
      <div className='latest'>
        {patients.map((patient, index) => (
          <div className='add-margin-on-card'>
            <PatientCard
              key={patient.id}
              name={patient.name}
              subtitle={patient.email}
              profile={patient.profile}
              index={index}
              btnText={'Start Appointment'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestApp
