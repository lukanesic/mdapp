import React from 'react'
import PatientCard from '../PatientCard'
import Search from '../Seach'
import FormLayout from '../../layouts/FormLayout'

const patients = [
  {
    name: 'Islam Makhachev',
    email: 'islam@gmail.com',
    profile:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/3332412.png&w=350&h=254',
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
    name: 'Charles Oliveira',
    email: 'oliveira@gmail.com',
    profile: 'https://a.espncdn.com/i/headshots/mma/players/full/2504169.png',
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
    name: 'Conor McGregor',
    email: 'conor@gmail.com',
    profile: 'https://a.espncdn.com/i/headshots/mma/players/full/3022677.png',
    id: '5',
  },
  {
    name: 'Khabib Nurmagomedov',
    email: 'khabib@gmail.com',
    profile:
      'https://a.espncdn.com/combiner/i?img=/i/headshots/mma/players/full/2611557.png&w=350&h=254',
    id: '5',
  },
]

const AddExisting = ({ setAppType }) => {
  return (
    <FormLayout
      loc={'appointmentform'}
      back
      setAppType={setAppType}
      heading2={'Select Patient'}
      paragraph={
        'Search for existing patient and select them to add new appointment for selected patient.'
      }
    >
      <div className='space-div' />
      <Search cls={'light'} placeholder={'Search by name or id'} />

      <div className='existingpatient-list'>
        {patients.map((patient, index) => (
          <PatientCard
            key={patient.id}
            name={patient.name}
            subtitle={patient.email}
            profile={patient.profile}
            cls={'small-card'}
            btnText={'Select patient'}
            onClick={() => setAppType('patient')}
          />
        ))}
      </div>
    </FormLayout>
  )
}

export default AddExisting
