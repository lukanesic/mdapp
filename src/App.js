import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Transition from './components/Transition'

import Login from './pages/Login'
import Home from './pages/Home'

const App = () => {
  const [isEntered, setIsEntered] = useState(false)
  const isLogged = localStorage.getItem('user')

  return (
    <>
      {/* Message that is for the larger viewports */}

      <div className='viewport-msg'>
        <h5>Not responsive</h5>
        <h1>Only for larger than 1400px screens </h1>
        <span>Windows: ctrl - || </span>
        <span>Mac: command -</span>
      </div>

      <AnimatePresence mode='wait'>
        {!isLogged && (
          <Login
            setIsEntered={setIsEntered}
            isEntered={isEntered}
            key={'login'}
          />
        )}

        {isLogged && (
          <div key={'transition'}>
            <Transition />
            <Home />
          </div>
        )}
      </AnimatePresence>

      <h6 className='credits'>
        Design & Development <span>Luka Nešić</span>
      </h6>
    </>
  )
}

export default App
