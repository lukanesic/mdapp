import React from 'react'
import Btn from '../Btn'
import SuccessMsg from '../SuccessMsg'

const Form = ({ funcForNextStep, isAdded, setIsAdded, btnTitle }) => {
  return (
    <>
      {!isAdded && (
        <>
          <div className='form'>
            <label>Full Name</label>
            <input type='text' />
            <label>E-mail</label>
            <input type='text' />
            <label>Gender</label>
            <input type='text' />
            <label>Birth Date</label>
            <input type='text' />
            <label>Phone</label>
            <input type='text' />
            <label>Personal ID Number</label>
            <input type='text' />
          </div>
        </>
      )}

      {isAdded && <SuccessMsg text={'Patient Added!'} />}

      <Btn
        title={`${!isAdded ? 'Add Patient' : btnTitle}`}
        onClick={
          !isAdded ? () => setIsAdded(!isAdded) : () => funcForNextStep()
        }
        cls={'full'}
      />
    </>
  )
}

export default Form
