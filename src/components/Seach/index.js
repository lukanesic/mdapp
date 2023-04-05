import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({ placeholder, cls, onChange }) => {
  return (
    <div className={`search ${cls}`}>
      <input
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        className={`${cls}`}
      />
      <BsSearch style={{ cursor: 'pointer' }} />
    </div>
  )
}

export default Search
