import React, { useState } from 'react'
import ExamsHeader from '../../components/ExamsHeader'

import { useSelector } from 'react-redux'
import Exam from '../../components/Exam'
import ExamsInfo from '../../components/ExamInfo'

const AllExams = () => {
  const { patients } = useSelector((state) => state.patients)

  const [patName, setPatName] = useState('')

  return (
    <div className='allexams'>
      <ExamsHeader setPatName={setPatName} />

      <div className='allexams-small-header'>
        <ExamsInfo />
        <ExamsInfo />
      </div>

      <div className='allexams-container'>
        {Object.keys(patients).length !== 0 &&
          patients
            .filter((patient) => {
              if (patName === '') return patient
              else if (
                patient.name.toLowerCase().includes(patName.toLowerCase())
              )
                return patient
            })
            .map((patient, index) => (
              <Exam
                name={patient.name}
                image={patient.image}
                email={patient.email}
                phone={patient.phone}
                patientID={patient.id}
                birthDate={patient.birthDate}
                examinations={patient.examinations}
                key={patient.id}
              />
            ))}
      </div>
    </div>
  )
}

export default AllExams
