import React, { useState } from 'react'
import Btn from '../Btn'
import FormLayout from '../../layouts/FormLayout'

import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { interactLeftMenu } from '../../redux/slices/menuSlice'

import { useSelector } from 'react-redux'
import {
  addNewAppointment,
  addNewAppointmentToDB,
} from '../../redux/slices/patientsSlice'

const SelectedPatient = ({ setAppType, disable }) => {
  const [success, setSuccess] = useState(false)

  let generatedIds = []

  function generateRandomId() {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    do {
      for (let i = 0; i < 5; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length)
        id += chars[randomIndex]
      }
    } while (generatedIds.includes(id))
    generatedIds.push(id)
    return id
  }

  const [newAppointment, setNewAppointment] = useState({
    day: { value: '', isValid: true },
    month: { value: '', isValid: true },
    year: { value: '', isValid: true },
    hour: { value: '', isValid: true },
  })

  const dispatch = useDispatch()

  const { patientForAppointment } = useSelector((state) => state.patients)

  const handleAddNewAppointment = async () => {
    const dayIsValid = newAppointment.day.value.trim().length > 0
    const monthIsValid = newAppointment.month.value.trim().length > 0
    const yearIsValid = newAppointment.year.value.trim().length > 0
    const hourIsValid = newAppointment.hour.value.trim().length > 0

    if (!dayIsValid || !monthIsValid || !yearIsValid || !hourIsValid) {
      setNewAppointment((current) => {
        return {
          day: { value: current.day.value, isValid: dayIsValid },
          month: { value: current.month.value, isValid: monthIsValid },
          year: {
            value: current.year.value,
            isValid: yearIsValid,
          },

          hour: { value: current.hour.value, isValid: hourIsValid },
        }
      })
      return
    }

    const newAppointmentObj = {
      date: `${newAppointment.day.value}.${newAppointment.month.value}.${newAppointment.year.value}`,
      time: newAppointment.hour.value,
      isReviewed: false,
      review: '',
      examID: generateRandomId(),
    }

    dispatch(
      addNewAppointmentToDB({ newAppointmentObj, id: patientForAppointment.id })
    )

    dispatch(
      addNewAppointment({
        patientID: patientForAppointment.id,
        appointment: newAppointmentObj,
      })
    )
    setSuccess(true)
  }

  const inputHandler = (identifier, value) => {
    const val = value.target.value

    setNewAppointment((current) => {
      return {
        ...current,
        [identifier]: { value: val, isValid: true },
      }
    })
  }

  return (
    <FormLayout
      back={!success}
      loc={'existing'}
      setAppType={setAppType}
      heading2={'Selected Patient'}
      paragraph={
        'Fill the form with the information to create new appointment.'
      }
    >
      {/* <div className='space-div' /> */}

      {/* Ovi podaci dolaze iz redux-a, sad su static */}
      <div className='selected-info'>
        <img
          src={patientForAppointment.image}
          alt={patientForAppointment.name}
        />{' '}
        <h2>{patientForAppointment.name}</h2>
        <p>{patientForAppointment.email}</p>
        <h4>
          PatientID: <span>{patientForAppointment.id}</span>
        </h4>
      </div>

      <AnimatePresence>
        {!success && (
          <div className='fill-form'>
            {/* <Heading2 text={'Date:'} /> */}
            <div className='inputs'>
              <input
                type='text'
                placeholder='12:00 (Hr)'
                maxlength='5'
                onChange={inputHandler.bind(this, 'hour')}
                className={`${!newAppointment.hour.isValid && 'input-wrong'}`}
              />
              <input
                type='text'
                placeholder='02 (DD)'
                maxlength='2'
                onChange={inputHandler.bind(this, 'day')}
                className={`${!newAppointment.day.isValid && 'input-wrong'}`}
              />
              <input
                type='text'
                placeholder='05 (MM)'
                maxlength='2'
                onChange={inputHandler.bind(this, 'month')}
                className={`${!newAppointment.month.isValid && 'input-wrong'}`}
              />
              <input
                type='text'
                placeholder='2023 (YY)'
                maxlength='4'
                onChange={inputHandler.bind(this, 'year')}
                className={`${!newAppointment.year.isValid && 'input-wrong'}`}
              />
            </div>
          </div>
        )}

        {success && (
          <div className='fill-form'>
            <motion.div
              className='success'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <img
                src='./success.png'
                alt='success'
                width='70px'
                height='70px'
              />
              <span>Appointment added!</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Btn
        title={`${!success ? 'Confirm schedule' : 'Close'}`}
        cls={'full'}
        onClick={
          !success
            ? () => handleAddNewAppointment()
            : () => dispatch(interactLeftMenu(false))
        }
      />
    </FormLayout>
  )
}

export default SelectedPatient
