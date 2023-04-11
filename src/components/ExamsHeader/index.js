import React from 'react'
import Heading2 from '../Heading2'
import Search from '../Seach'

const ExamsHeader = () => {
  return (
    <div className='examsheader'>
      <Heading2 text={'All Examinations'} />
      <Search
        placeholder={'Search by date or id'}
        cls={'dark'}
        onChange={'Stavi funkciju'}
      />
    </div>
  )
}

export default ExamsHeader
