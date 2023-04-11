import React from 'react'
import ExamsHeader from '../../components/ExamsHeader'

const AllExams = () => {
  return (
    <div className='allexams'>
      <ExamsHeader />

      <div className='allexams-small-header'>
        <ExamsInfo />
        <ExamsInfo />
      </div>

      <div className='allexams-container'>
        <Exam />
        <Exam />
        <Exam />
        <Exam />
        <Exam />
        <Exam />
        <Exam />
        <Exam />
        <Exam />
        {/* <ExamsInfo /> */}
      </div>
    </div>
  )
}

export default AllExams

// Test

const ExamsInfo = () => {
  return (
    <div className='examsinfo'>
      <div className='left'>
        <span>ExaminationID</span>
        <span>Patient</span>
      </div>
      <div className='right'>
        <span>Date</span>
        <span>Details</span>
      </div>
    </div>
  )
}

const Exam = () => {
  return (
    <div className='exam'>
      <div className='left'>
        <div className='examid'>124124124</div>
        <div className='exampatient'>
          <div className='img'></div>
          <div className='info'>
            <h5>Alice Mcenzie</h5>
            <h6>@gmail.com</h6>
          </div>
        </div>
      </div>

      <div className='right'>
        <div className='date'>2.2.2032</div>
        <button>Dick whistler</button>
      </div>
    </div>
  )
}
