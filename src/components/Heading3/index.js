import React from 'react'

const Heading3 = ({ text, color }) => {
  return (
    <h3 className='heading3' style={{ color: color && color }}>
      {text}
    </h3>
  )
}

export default Heading3
