import React from 'react'
import { useDispatch } from 'react-redux'
import { interactRightMenu, setOverview } from '../../redux/slices/menuSlice'
import { addSelectedExam } from '../../redux/slices/patientsSlice'

const Exam = ({
  image,
  name,
  email,
  examinations,
  phone,
  patientID,
  birthDate,
}) => {
  const dispatch = useDispatch()
  const handleMenu = (payload) => {
    dispatch(interactRightMenu(true))
    dispatch(setOverview('exam'))
    dispatch(addSelectedExam(payload))
  }

  return (
    <>
      {examinations.map(
        (exam) =>
          exam.isReviewed !== false && (
            <div
              className='exam'
              onClick={() =>
                handleMenu({
                  exam,
                  name,
                  image,
                  email,
                  phone,
                  patientID,
                  birthDate,
                })
              }
            >
              <div className='examid'>
                <span>{exam.examID}</span>
              </div>
              <div className='exampatient'>
                <div className='img'>
                  <img src={image} alt={name} className='exam-profile' />
                </div>
                <div className='info'>
                  <h5>{name}</h5>
                  <h6>{email}</h6>
                </div>
              </div>

              <div className='date'>
                <span>{exam.date}</span>
              </div>
            </div>
          )
      )}
    </>
  )
}

export default Exam
