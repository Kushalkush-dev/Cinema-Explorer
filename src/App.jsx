import React, { use, useEffect, useState } from 'react'
import Search from './components/Search.jsx'
import Spinnerloader from './components/Spinnerloader.jsx';
import Moviecard from './components/Moviecard.jsx';
import { useDebounce } from 'react-use';
import { trendingmoviesfn, updatedatabase } from './appwrite.js';
import { Route, Routes } from 'react-router-dom';
import Favourites from './pages/Favourites.jsx';
import Home from './pages/Home.jsx';





const App = () => {



 
  return (

    
    
   <main>
      
      <div className='pattern'/>

      <div className='wrapper'>

      <button className='p-2  max-w-max absolute right-[2vw] text-center top-[2vh] rounded-lg bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 font-medium'>Go to Favorites</button>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/fav' element={<Favourites/>}/>
      </Routes>
       

      
      </div>
  
   </main>
   

  
  )


  
}

export default App