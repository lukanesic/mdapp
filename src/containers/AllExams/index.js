import React, { useState } from 'react'
import ExamsHeader from '../../components/ExamsHeader'

import { useSelector } from 'react-redux'
import Exam from '../../components/Exam'
import ExamsInfo from '../../components/ExamInfo'

const AllExams = () => {
  const { patients } = useSelector((state) => state.patients)

  // const [noExams, setNoExams] = useState(false)
  const [patName, setPatName] = useState('')

  // useEffect(() => {
  //   if (
  //     patients.map((patient) => Object.keys(patient.examinations).length === 0)
  //   ) {
  //     setNoExams(true)
  //   }
  // }, [patients])

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
              else if (patient.name.includes(patName)) return patient
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
              />
            ))}

        {/* {patients.map((patient) => (
          // <Exam
          //   name={patient.name}
          //   image={patient.image}
          //   email={patient.email}
          //   phone={patient.phone}
          //   patientID={patient.id}
          //   birthDate={patient.birthDate}
          //   examinations={patient.examinations}
          // />
        ))} */}
      </div>
    </div>
  )
}

export default AllExams
