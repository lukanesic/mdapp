import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Form from '../components/Form'

import Loading from '../components/Loading'
import Sidemenu from '../components/Sidemenu'
import Success from '../components/Success'

const Login = () => {
  const [forward, setForward] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  console.log(forward)

  return (
    <div className='login'>
      <AnimatePresence>
        {!forward && (
          <>
            <Loading />
            <Form
              forward={forward}
              setForward={setForward}
              setSuccess={setIsSuccess}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSuccess && (
          <>
            <Success success={isSuccess} setSuccess={setIsSuccess} />
          </>
        )}
      </AnimatePresence>

      {forward && <Sidemenu />}
    </div>
  )
}

export default Login
