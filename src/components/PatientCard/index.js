import React from 'react'
import Heading3 from '../Heading3'
import Heading6 from '../Heading6'
import Btn from './../Btn'

const PatientCard = ({ name, subtitle, btnText, profile }) => {
  return (
    <div className='patientcard'>
      <div className='profile-container'>
        <img src={profile} alt={name} className='profile' />
        <div className='circle' />
      </div>

      <div className='info'>
        <Heading3 text={name} />
        <Heading6 text={subtitle} />
      </div>
      <Btn onClick={'hey'} title={'View Patient'} cls={'patient-btn'} />
    </div>
  )
}

export default PatientCard
