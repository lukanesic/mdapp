import React from 'react'
import PatientCard from '../PatientCard'
import Search from '../Seach'
import FormLayout from '../../layouts/FormLayout'

import { useDispatch, useSelector } from 'react-redux'
import { addPatientForAppointment } from '../../redux/slices/patientsSlice'

const AddExisting = ({ setAppType }) => {
  const { patients } = useSelector((state) => state.patients)
  const dispatch = useDispatch()

  const handleSelectedPatient = (id) => {
    setAppType('patient')
    dispatch(addPatientForAppointment(id))
  }

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
            image={patient.image}
            cls={'small-card'}
            btnText={'Select patient'}
            onClick={() => handleSelectedPatient(patient.id)}
          />
        ))}
      </div>
    </FormLayout>
  )
}

export default AddExisting
