import React from 'react'

const Search = ({searchvalue,setsearchvalue}) => {
  return (
    <div className='search'>

      <div>
        <img src="./search.svg" alt="search-svg" />
        <input type="text"placeholder='Find your loved movies'
        value={searchvalue}
        onChange={(e)=>{setsearchvalue(e.target.value)}} />
      </div>
      
    </div>
  )
}

export default Search