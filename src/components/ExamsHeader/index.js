import React from 'react'
import Heading2 from '../Heading2'
import Search from '../Seach'
import { useSelector } from 'react-redux'

const ExamsHeader = ({ setPatName }) => {
  const { patients } = useSelector((state) => state.patients)

  return (
    <div className='examsheader'>
      <Heading2 text={'All Examinations'} />
      {Object.keys(patients).length !== 0 && (
        <Search
          cls={'light'}
          placeholder={'Search by name'}
          onChange={(e) => setPatName(e.target.value)}
        />
      )}
    </div>
  )
}

export default ExamsHeader
