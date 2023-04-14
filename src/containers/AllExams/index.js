import React from 'react'
import ExamsHeader from '../../components/ExamsHeader'

// NAPRAVI POSEBNE FILE-OVE ZA OVE DOLE KOMPONENTE!!!

const AllExams = ({ open, setOpen, overview, setOverview }) => {
  return (
    <div className='allexams'>
      <ExamsHeader />

      <div className='allexams-small-header'>
        <ExamsInfo />
        <ExamsInfo />
      </div>

      <div className='allexams-container'>
        <Exam
          name={'Charles Oliveira'}
          img={'https://a.espncdn.com/i/headshots/mma/players/full/2504169.png'}
          email={'oliveira@gmail.com'}
          EID={'2ate313'}
          date={'03.03.2023'}
          open={open}
          setOpen={setOpen}
          overview={overview}
          setOverview={setOverview}
        />

        <Exam
          name={'Charles Oliveira'}
          img={'https://a.espncdn.com/i/headshots/mma/players/full/2504169.png'}
          email={'oliveira@gmail.com'}
          EID={'2ate313'}
          date={'03.03.2023'}
          open={open}
          setOpen={setOpen}
          overview={overview}
          setOverview={setOverview}
        />

        <Exam
          name={'Charles Oliveira'}
          img={'https://a.espncdn.com/i/headshots/mma/players/full/2504169.png'}
          email={'oliveira@gmail.com'}
          EID={'2ate313'}
          date={'03.03.2023'}
          open={open}
          setOpen={setOpen}
          overview={overview}
          setOverview={setOverview}
        />
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
      <span>EID</span>
      <span>Patient</span>

      <span>Date</span>
    </div>
  )
}

const Exam = ({
  EID,
  img,
  name,
  email,
  date,
  open,
  setOpen,
  overview,
  setOverview,
}) => {
  const handleMenu = () => {
    setOpen(!open)
    setOverview('exam')
  }

  return (
    <div className='exam' onClick={() => handleMenu()}>
      <div className='examid'>
        <span>{EID}</span>
      </div>
      <div className='exampatient'>
        <div className='img'>
          <img src={img} alt={name} className='exam-profile' />
        </div>
        <div className='info'>
          <h5>{name}</h5>
          <h6>{email}</h6>
        </div>
      </div>

      <div className='date'>
        <span>{date}</span>
      </div>
    </div>
  )
}
