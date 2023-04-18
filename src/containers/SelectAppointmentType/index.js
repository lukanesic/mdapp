import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import AddExisting from '../../components/AddExisting'
import AppointmentForm from '../../components/AppointmentForm'
import SelectedPatient from '../../components/SelectedPatient'
import AddNew from '../../components/AddNew'

const SelectAppointmentType = () => {
  const [appType, setAppType] = useState('appointmentform')

  return (
    <AnimatePresence>
      {/* top */}
      {appType === 'appointmentform' && (
        <AppointmentForm appType={appType} setAppType={setAppType} />
      )}
      {/* mid */}
      {appType === 'existing' && <AddExisting setAppType={setAppType} />}
      {appType === 'new' && <AddNew setAppType={setAppType} />}
      {/* bot */}
      {/* setOpen i openMenu je na success message kada ubace novi appointment */}
      {/* To zatvara ceo LMenu */}
      {appType === 'patient' && <SelectedPatient setAppType={setAppType} />}
    </AnimatePresence>
  )
}

export default SelectAppointmentType
