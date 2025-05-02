import React from 'react'

function SearchBar({ className = ''}) {
  return (
    <div 
      style={{ gridArea: 'search-bar' }}
      className={`border-2 ${className}`}
    
    >
      <div>
        <img src="/icons/search.svg" alt="" />
        <input type="search" />
      </div>
    </div>
  )
}

export default SearchBar
