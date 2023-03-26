import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Sidemenu = () => {
  const [intro, setIntro] = useState(true)

  return (
    <motion.div
      className='sidemenu'
      initial={{ opacity: 0, width: '0vw' }}
      animate={{ opacity: 1, width: '400px' }}
      transition={{ delay: 3 }}
    >
      <motion.img
        src={'./ulnaris-logo.png'}
        alt={'Ulnaris Logo'}
        initial={{ opacity: 0, width: '350px', height: '350px' }}
        animate={{ opacity: 1, width: '350px', height: '350px' }}
        transition={{ delay: 4, duration: 1 }}
        style={{ margin: '0 auto', display: 'block' }}
      />

      <motion.div
        className='sidemenu-content'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 0.5 }}
      >
        <h3>
          Welcome <span>John Doe</span>
        </h3>

        <AnimatePresence>
          {intro && <Intro intro={intro} setIntro={setIntro} />}
        </AnimatePresence>

        {!intro && <AddPatient />}
      </motion.div>
    </motion.div>
  )
}

export default Sidemenu

const Intro = ({ intro, setIntro }) => {
  return (
    <motion.div
      className='intro'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.5,
          duration: 0.5,
        },
      }}
    >
      <p>
        This is test application. Main task of this application is to add,
        monitor and delete patients as a type of medical records.
      </p>

      <p>
        Patient, with his examinations are send to database where the files are
        kept. You can add new patient, add new exam and delete them at any time.
      </p>

      <p>
        This app is developed for real client, which is same in every way except
        he have real medical records and patients.
      </p>

      <button onClick={() => setIntro(!intro)}>Close intro</button>
    </motion.div>
  )
}

const AddPatient = () => {
  return (
    <motion.div
      className='patient-form'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <h5>Enter patient information</h5>
      <input type='text' placeholder='Name' />
      <input type='text' placeholder='Surname' />
      <input type='text' placeholder='Gender' />
      <input type='text' placeholder='Birth Date (DD MM YY)' />
      <input type='text' placeholder='Phone' />

      <button>Add Patient</button>
    </motion.div>
  )
}
