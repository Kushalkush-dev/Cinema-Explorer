import React from 'react'

const Favmoviecard = ({movie,deletefn}) => {
  const {title,vote_average,poster_path,original_language,release_date,id}=movie
  return (
    <div className='movie-card'>
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
            
          }} className='bg-[#A90000] text-[#ffffff] text-sm font-medium p-1 rounded-lg hover:bg-[#a90000be]'>Remove</button>
          
        </div>
      </div>
    </div>
  )
  
}

export default Favmoviecard
