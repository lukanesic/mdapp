import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const CloseIcon = ({ onClick, color }) => {
  return (
    <AiOutlineClose
      className='icon'
      onClick={onClick}
      style={{ color: color && color }}
    />
  )
}

export default CloseIcon
