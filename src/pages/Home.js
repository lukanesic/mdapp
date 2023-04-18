import React from 'react'

import Dashboard from './../containers/Dashboard'

import Patients from '../layouts/Patients'
import Appointments from '../layouts/Appointments'

import Overlay from '../components/Overlay'

import { AnimatePresence, motion } from 'framer-motion'
import RMenu from '../menus/RMenu'
import LMenu from '../menus/LMenu'

import { useDispatch, useSelector } from 'react-redux'
import { interactLeftMenu, interactRightMenu } from '../redux/slices/menuSlice'

const Home = () => {
  const dispatch = useDispatch()

  const { dashboard, leftMenu, rightMenu } = useSelector((state) => state.menu)

  return (
    <motion.div
      className='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      <Dashboard />

      <AnimatePresence mode='wait'>
        {dashboard === 'patients' && <Patients key={'patients'} />}

        {dashboard === 'appointments' && <Appointments key={'appointments'} />}
      </AnimatePresence>

      {/* ovde otvaram i zatvaram RMenu */}
      <AnimatePresence>
        {rightMenu && (
          <>
            <Overlay onClick={() => dispatch(interactRightMenu(false))} />
            <RMenu />
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {leftMenu && (
          <>
            <Overlay onClick={() => dispatch(interactLeftMenu(false))} />
            <LMenu />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Home
