import React from 'react'
import { useDispatch } from 'react-redux'

import { Placeholders } from '../../containers/PatientFromAppointment'
import CloseIcon from '../CloseIcon'
import Heading2 from '../Heading2'
import { interactRightMenu } from '../../redux/slices/menuSlice'

const PatientFromAppointmentInfo = ({ patient }) => {
  const dispatch = useDispatch()

  return (
    <div className='patient-from-appointment-info'>
      <CloseIcon onClick={() => dispatch(interactRightMenu(false))} />
      {!patient && <Placeholders />}
      {patient && (
        <div className='patient-from-appointment-box'>
          <div className='left'>
            <img src={patient.image} alt={patient.name} />
          </div>
          <div className='right'>
            <Heading2 text={patient.name} color={' rgba(26, 128, 179, 1)'} />
            <ul>
              <li>
                Phone: <span>{patient.phone}</span>
              </li>
              <li>
                Email: <span>{patient.email}</span>
              </li>
              <li>
                ID: <span>{patient.patientID}</span>
              </li>
              <li>
                Birth Date: <span>{patient.birthDate}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default PatientFromAppointmentInfo
