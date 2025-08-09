import React from 'react'
import Favmoviecard from '../components/Favmoviecard'

const Favourites = ({favmovie}) => {
  return (
    <>
    <section className='all-movies mt-4'>
      {favmovie.length>0?( 
      <ul>
        { favmovie.map((elem)=>(
        <Favmoviecard key={elem.id} movie={elem}/>
        )
      )}

      </ul>):<p className='text-red-700 font-semibold  flex items-center justify-center min-h-screen w-full text-xl'>No Favourite movies</p>}  
    </section>
    </>
  )
}

export default Favourites