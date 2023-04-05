import React from 'react'

const Btn = ({ onClick, title, cls }) => {
  return (
    <button className={`button ${cls}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default Btn
