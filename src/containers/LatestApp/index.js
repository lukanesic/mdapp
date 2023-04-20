import React from 'react'
import Heading2 from '../../components/Heading2'
import PatientCard from '../../components/PatientCard'

import { useDispatch, useSelector } from 'react-redux'
import { interactRightMenu, setOverview } from '../../redux/slices/menuSlice'

const LatestApp = () => {
  const dispatch = useDispatch()
  const { patients } = useSelector((state) => state.patients)

  const handleStartExamination = (patient) => {
    dispatch(interactRightMenu(true))
    dispatch(setOverview('latest'))
  }

  return (
    <div className='latest-app'>
      <Heading2 text={'New Appointments'} />
      <div className='latest'>
        {patients.map((patient, index) =>
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
                    onClick={() => handleStartExamination()}
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
