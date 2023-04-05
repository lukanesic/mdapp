import React from 'react'
import Patient from '../containers/Patient'
import PatientList from '../containers/PatientList'

const Patients = () => {
  return (
    <div className='patients'>
      <PatientList />
      <Patient />
    </div>
  )
}

export default Patients
