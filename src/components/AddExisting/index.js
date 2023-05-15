import React, { useState } from 'react'
import PatientCard from '../PatientCard'
import Search from '../Seach'
import FormLayout from '../../layouts/FormLayout'

import { useDispatch, useSelector } from 'react-redux'
import { addPatientForAppointment } from '../../redux/slices/patientsSlice'

const AddExisting = ({ setAppType }) => {
  const { patients } = useSelector((state) => state.patients)
  const dispatch = useDispatch()

  const [patName, setPatName] = useState('')

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
      <Search
        cls={'light'}
        placeholder={'Search by name or id'}
        onChange={(e) => setPatName(e.target.value)}
      />

      <div className='existingpatient-list'>
        {patients
          .filter((patient) => {
            if (patName === '') return patient
            else if (patient.name.toLowerCase().includes(patName.toLowerCase()))
              return patient
          })
          .map((patient, index) => (
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
