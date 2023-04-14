import React, { useState } from 'react'
import Form from '../../components/Form'
import FormLayout from '../../layouts/FormLayout'

const NewPatient = ({ setOpen, open }) => {
  // stavljam state na veci nivo, zato sto forma ne moze da ima taj state sopstveni
  // jer je reusable
  const [isAdded, setIsAdded] = useState(false)

  const funcForNextStep = () => {
    setOpen(!open)
  }

  return (
    <FormLayout
      loc={''}
      setAppType={''}
      back={false}
      heading2={'Add new patient'}
      paragraph={
        'Fill the form with patient information to create new patient.'
      }
    >
      <Form
        funcForNextStep={funcForNextStep}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
        btnTitle={'Close'}
      />
    </FormLayout>
  )
}

export default NewPatient
