import React from 'react'
import LoginForm from '../components/LoginForm'
import LoginLogo from '../components/LoginLogo'

const Login = ({ setIsEntered }) => {
  return (
    <div className='login'>
      <LoginLogo />
      <LoginForm setIsEntered={setIsEntered} />
    </div>
  )
}

export default Login
