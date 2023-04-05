import React from 'react'

const Heading2 = ({ text, color }) => {
  return (
    <h2 className='heading2' style={{ color: color && color }}>
      {text}
    </h2>
  )
}

export default Heading2
