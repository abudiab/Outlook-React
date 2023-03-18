import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='display'>
        <div className='search-field'>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" placeholder='Search' />
        </div>
    </div>
  )
}

export default Search