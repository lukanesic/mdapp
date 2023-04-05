import React from 'react'
import Heading1 from '../Heading1'
import Paragraph from '../Paragraph'

const PatientExams = ({ exams }) => {
  return (
    <div className='patientexams'>
      {/* ako postoji exams,mapiram ih */}
      {/* ako ne postoji, prikazujem placeholder */}
      <Placeholders />
    </div>
  )
}

export default PatientExams

const Placeholders = () => {
  return (
    <div className='placeholders'>
      <img src='./dash-logo.png' alt='Ulnaris' />
      <Heading1 text={'Select Patient'} />
      <Paragraph
        text={
          'Select patient to see their personal information, appointments and examinations.'
        }
      />
      <div className='empty-div' />
      <Paragraph
        text={
          'You can also delete patient and examination that is not valid or you want to change something about it. '
        }
      />
    </div>
  )
}
