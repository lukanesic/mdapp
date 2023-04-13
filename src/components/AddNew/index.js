import React from 'react'
import FormLayout from '../../layouts/FormLayout'
import Form from '../Form'

const AddNew = ({ setAppType }) => {
  return (
    <FormLayout
      loc={'appointmentform'}
      setAppType={setAppType}
      back
      heading2={'Add new patient'}
      paragraph={
        'Fill the form with patient information to create new patient.'
      }
    >
      <Form funcForNextStep={setAppType} nextStep={'existing'} />
    </FormLayout>
  )
}

export default AddNew
