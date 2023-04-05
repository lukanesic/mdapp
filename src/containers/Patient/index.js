import React from 'react'
import PatientExams from '../../components/PatientExams'
import PatientInfo from '../../components/PatientInfo'

const Patient = () => {
  return (
    <div className='patient'>
      <PatientInfo patient />
      <PatientExams />
    </div>
  )
}

export default Patient
