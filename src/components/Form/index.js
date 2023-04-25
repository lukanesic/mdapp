import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  addNewPatient,
  addNewPatientToDB,
} from '../../redux/slices/patientsSlice'
import Btn from '../Btn'
import SuccessMsg from '../SuccessMsg'

const Form = ({ funcForNextStep, isAdded, setIsAdded, btnTitle }) => {
  const [newPatient, setNewPatient] = useState({
    name: { value: '', isValid: true },
    email: { value: '', isValid: true },
    phone: { value: '', isValid: true },
    birthDate: { value: '', isValid: true },
    personalID: { value: '', isValid: true },
    image: { value: '', isValid: true },
  })

  const inputHandler = (identifier, value) => {
    const val = value.target.value

    setNewPatient((current) => {
      return {
        ...current,
        [identifier]: { value: val, isValid: true },
      }
    })
  }

  const dispatch = useDispatch()

  const submitPatient = async () => {
    const nameIsValid = newPatient.name.value.trim().length > 0
    const emailIsValid = newPatient.email.value.trim().length > 0
    const phoneIsValid = newPatient.phone.value.trim().length > 0
    const birthDateIsValid = newPatient.birthDate.value.trim().length > 0
    const personalIDIsValid = newPatient.personalID.value.trim().length > 0
    const imageIsValid = newPatient.image.value.trim().length > 0

    if (
      !nameIsValid ||
      !emailIsValid ||
      !birthDateIsValid ||
      !phoneIsValid ||
      !personalIDIsValid ||
      !imageIsValid
    ) {
      setNewPatient((current) => {
        return {
          name: { value: current.name.value, isValid: nameIsValid },
          email: { value: current.email.value, isValid: emailIsValid },
          birthDate: {
            value: current.birthDate.value,
            isValid: birthDateIsValid,
          },
          personalID: {
            value: current.personalID.value,
            isValid: personalIDIsValid,
          },
          phone: { value: current.phone.value, isValid: phoneIsValid },
          image: { value: current.image.value, isValid: imageIsValid },
        }
      })
      return
    }

    const newPatientObj = {
      name: newPatient.name.value,
      email: newPatient.email.value,
      birthDate: newPatient.birthDate.value,
      phone: newPatient.phone.value,
      personalID: newPatient.personalID.value,
      image: newPatient.image.value,
      examinations: [],
    }

    dispatch(addNewPatient(newPatientObj))
    dispatch(addNewPatientToDB(newPatientObj))
    setIsAdded(!isAdded)

    // u reduxu
    // try {
    //   const patientRef = collection(db, 'patients')
    //   const response = await addDoc(patientRef, newPatientObj)
    //   const id = response.id
    //   dispatch(addNewPatientSuccess({ ...newPatientObj, id: id }))
    // } catch (error) {
    //   console.log(error)
    //   dispatch(addNewPatientFail())
    // }

    // setOpen(!open)
  }

  return (
    <>
      {!isAdded && (
        <>
          <div className='form'>
            <Input
              label={'Full Name'}
              type={'text'}
              onChange={inputHandler.bind(this, 'name')}
              validation={newPatient.name.isValid}
            />
            <Input
              label={'Email'}
              type={'email'}
              onChange={inputHandler.bind(this, 'email')}
              validation={newPatient.email.isValid}
            />
            <Input
              label={'Birth Date'}
              type={'text'}
              onChange={inputHandler.bind(this, 'birthDate')}
              validation={newPatient.birthDate.isValid}
            />
            <Input
              label={'Phone'}
              type={'text'}
              onChange={inputHandler.bind(this, 'phone')}
              validation={newPatient.phone.isValid}
            />
            <Input
              label={'Personal ID'}
              type={'text'}
              onChange={inputHandler.bind(this, 'personalID')}
              validation={newPatient.personalID.isValid}
            />
            <Input
              label={'Image'}
              type={'text'}
              onChange={inputHandler.bind(this, 'image')}
              validation={newPatient.image.isValid}
            />
          </div>
        </>
      )}

      {isAdded && <SuccessMsg text={'Patient Added!'} />}

      <Btn
        title={`${!isAdded ? 'Add Patient' : btnTitle}`}
        onClick={!isAdded ? () => submitPatient() : () => funcForNextStep()}
        cls={'full'}
      />
    </>
  )
}

export default Form

const Input = ({ label, type, placeholder, onChange, validation }) => {
  return (
    <>
      {label && (
        <label className={`${!validation && 'label-wrong'}`}>{label}</label>
      )}

      <input
        type={type}
        onChange={onChange}
        className={`${!validation && 'input-wrong'}`}
      />
    </>
  )
}
