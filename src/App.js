import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Transition from './components/Transition'

import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  const [isEntered, setIsEntered] = useState(false)

  return (
    <>
      <AnimatePresence mode='wait'>
        {!isEntered && <Login setIsEntered={setIsEntered} key={'login'} />}

        {isEntered && (
          <>
            <Transition key={'transition'} />
            <Home key={'transition'} />
          </>
        )}
      </AnimatePresence>

      <h6 className='credits'>
        Design & Development <span>Luka Nešić</span>
      </h6>
    </>
  )
}

export default App
