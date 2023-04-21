import React from 'react'
import Heading2 from '../../components/Heading2'
import PatientCard from '../../components/PatientCard'

import { useDispatch, useSelector } from 'react-redux'
import { interactRightMenu, setOverview } from '../../redux/slices/menuSlice'
import { addSelectedExam } from '../../redux/slices/patientsSlice'
import Paragraph from './../../components/Paragraph'

const LatestApp = () => {
  const dispatch = useDispatch()
  const { patients } = useSelector((state) => state.patients)

  const handleStartExamination = (payload) => {
    dispatch(interactRightMenu(true))
    dispatch(setOverview('latest'))
    dispatch(addSelectedExam(payload))
  }

  return (
    <div className='latest-app'>
      <Heading2 text={'New Appointments'} />
      <div className='latest'>
        {Object.keys(patients).length !== 0 &&
          patients.map((patient, index) =>
            patient.examinations.map(
              (exam) =>
                exam.isReviewed === false && (
                  <div className='add-margin-on-card'>
                    <PatientCard
                      key={patient.id}
                      name={exam.date}
                      subtitle={patient.name}
                      image={patient.image}
                      index={index}
                      btnText={'Start Appointment'}
                      onClick={() =>
                        handleStartExamination({
                          name: patient.name,
                          image: patient.image,
                          email: patient.email,
                          phone: patient.phone,
                          patientID: patient.id,
                          birthDate: patient.birthDate,
                          date: exam.date,
                          examID: exam.examID,
                        })
                      }
                    />
                  </div>
                )
            )
          )}
      </div>
    </div>
  )
}

export default LatestApp
