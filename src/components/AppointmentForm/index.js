import React from 'react'
import Btn from '../Btn'
import FormLayout from '../../layouts/FormLayout'

const AppointmentForm = ({ appType, setAppType }) => {
  return (
    <FormLayout
      heading2={'Add new appointment'}
      paragraph={
        'Add new appointment for exisinting patient, or create new pateint and then add appointment'
      }
    >
      <Btn
        cls={'large'}
        title={'Existing patient'}
        onClick={() => setAppType('existing')}
      />
      <Btn
        cls={'large'}
        title={'New patient'}
        onClick={() => setAppType('new')}
      />
    </FormLayout>
  )
}

export default AppointmentForm
