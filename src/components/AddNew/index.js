import React, { useState } from 'react'
import FormLayout from '../../layouts/FormLayout'
import Form from '../Form'

const AddNew = ({ setAppType }) => {
  // stavljam state na veci nivo, zato sto forma ne moze da ima taj state sopstveni
  // jer je reusable
  const [isAdded, setIsAdded] = useState(false)

  // takodje samo prosledjujem vec gotovu funkciju, ne prosledjujem
  // da forma menja state

  const funcForNextStep = () => {
    setAppType('existing')
  }

  return (
    <FormLayout
      loc={'appointmentform'}
      setAppType={setAppType}
      back={!isAdded}
      heading2={'Add new patient'}
      paragraph={
        'Fill the form with patient information to create new patient.'
      }
    >
      <Form
        funcForNextStep={funcForNextStep}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
        btnTitle={'Continue'}
      />
    </FormLayout>
  )
}

export default AddNew
