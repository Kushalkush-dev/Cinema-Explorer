import React from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'

const Favmoviecard = ({movie,deletefn}) => {
  const {title,vote_average,poster_path,original_language,release_date,id}=movie
  return (
    <div className='movie-card relative'>
      <img src={poster_path? `https://image.tmdb.org/t/p/w500/${poster_path}`:`./No-Poster.png`} alt="poster" />

      <div className='mt-4'>
        <h3>{title}</h3>
        <div className='content'>
          <div className='rating'>
            <img src="star.svg" alt="star" />
            <p>{vote_average?vote_average.toFixed(1):'N/A'}</p>
          </div>
          <span>•</span>
          <p className='lang'>{original_language}</p>
          <span>•</span>
          <p className='year'>{release_date?release_date.split('-')[0]:'N/A'}</p>

          <button onClick={()=>{
            
            deletefn(id)
            
          }}>
            <span className='sm:hidden'><TrashIcon className='size-5 text-red-600   '/></span>
            <span className='hidden sm:inline sm:sm:bg-[#A90000]  sm:text-[#ffffff]  sm:text-sm sm:font-medium sm:p-1 sm:rounded-lg sm:hover:bg-[#a90000be]'>Remove</span>
          </button>
          
        </div>
      </div>
    </div>
  )
  
}

export default Favmoviecard
