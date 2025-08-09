import React from 'react'

const Moviecard = ({movie,favmoviefn}) => {
  const {title,poster_path,release_date,original_language,vote_average}=movie;
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
            favmoviefn(movie)

          }} className='bg-[#ce55d4cb] text-[#ffffff] text-sm font-medium p-1 rounded-lg hover:bg-[#ce55d47c] active:scale-85'>Add to List</button>
        </div>
      </div>
    </div>
  )
}
  
export default Moviecard