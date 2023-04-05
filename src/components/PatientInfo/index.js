import React from 'react'
import Heading2 from './../Heading2'
import Btn from './../Btn'

import { AiOutlineClose } from 'react-icons/ai'

const PatientInfo = ({ patient }) => {
  return (
    <div className='patientinfo'>
      <AiOutlineClose className='icon' />

      {!patient && <Placeholders />}

      {patient && (
        <div className='patient-info-box'>
          <div className='left'>
            <img
              src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
            />
          </div>
          <div className='right'>
            <Heading2 text={'Pacijent'} color={'#fff'} />
            <ul>
              <li>
                phone: <span>+5352351</span>
              </li>
              <li>
                email: <span>alicemcenze@gmail.com</span>
              </li>
              <li>
                patientID: <span>3411351</span>
              </li>
              <li>
                birthdate: <span>31.12.2011</span>
              </li>
              <li>
                next app: <span>20.12.2022</span>
              </li>
              <li>
                lastt app: <span>19.12.2022</span>
              </li>
            </ul>
            <Btn
              title={'Delete Patient'}
              onClick={() => console.log('funkcija za brisanja pacijenta')}
              cls={'delete-btn'}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PatientInfo

const Placeholders = () => {
  return (
    <div className='placeholders'>
      <div className='left'>
        <div className='img-place' />
      </div>
      <div className='right'>
        <div className='heading-place' />
        <div className='six-box'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
        </div>
        <div className='btn-holder'></div>
      </div>
    </div>
  )
}
