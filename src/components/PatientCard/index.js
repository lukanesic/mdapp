import React from 'react'
import Btn from './../Btn'

const PatientCard = ({ name, subtitle, btnText, profile }) => {
  return (
    <div className='patientcard'>
      <div className='profile-container'>
        <img src={profile} alt={name} className='profile' />
        <div className='circle' />
      </div>

      <div className='info'>
        <h3>{name}</h3>
        <h6>{subtitle}</h6>
      </div>
      <Btn onClick={'hey'} title={'View Patient'} cls={'patient-btn'} />
    </div>
  )
}

export default PatientCard
