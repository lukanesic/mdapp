import React, { useState } from 'react'
import Form from '../../components/Form'
import FormLayout from '../../layouts/FormLayout'

import { useDispatch } from 'react-redux'
import { interactLeftMenu } from '../../redux/slices/menuSlice'

const NewPatient = () => {
  // stavljam state na veci nivo, zato sto forma ne moze da ima taj state sopstveni
  // jer je reusable
  const [isAdded, setIsAdded] = useState(false)
  const dispatch = useDispatch()

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
        funcForNextStep={() => dispatch(interactLeftMenu(false))}
        isAdded={isAdded}
        setIsAdded={setIsAdded}
        btnTitle={'Close'}
      />
    </FormLayout>
  )
}

export default NewPatient
