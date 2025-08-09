import React, { use, useEffect, useState } from 'react'
import Search from './components/Search.jsx'
import Spinnerloader from './components/Spinnerloader.jsx';
import Moviecard from './components/Moviecard.jsx';
import { useDebounce } from 'react-use';
import { trendingmoviesfn, updatedatabase } from './appwrite.js';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Favourites from './pages/Favourites.jsx';
import Home from './pages/Home.jsx';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';








const App = () => {

  const location=useLocation()
  const navigate=useNavigate()

  const isfavpage=location.pathname==="/fav"

  const handleNavigation=()=>{
    if(isfavpage){
      navigate('/')
    }else{
      navigate('/fav')
    }
  }
  
  



  const [favouritemovies, setfavouritemovies] = useState([])

  const [initialload, setinitialload] = useState(false)





 useEffect(()=>{
  if(initialload){
     localStorage.setItem("favouritemovies",JSON.stringify(favouritemovies))
  }
  
},[favouritemovies])

useEffect(()=>{
 const storedFavs = localStorage.getItem("favouritemovies");
  if (storedFavs) {
    setfavouritemovies(JSON.parse(storedFavs));
  }
  setinitialload(true)
},[])


const favouritemoviesfn=async (movie)=>{
if(favouritemovies.some(fav=>fav.id===movie.id))return

setfavouritemovies(prev=>[...prev,movie])
 
  
}


const deleteFavMovie=(id)=>{
 setfavouritemovies(favouritemovies.filter((movie)=>movie.id!==id)
)


}


  return (

    
    
   <main>
      
      <div className='pattern'/>

      <div className='wrapper'>

      <button onClick={handleNavigation} className={`p-2 max-w-max fixed z-50  ${isfavpage?`left-[2vw]`:`right-[2vw]`} transition-all duration-300 text-center top-[2vh] rounded-lg bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 font-medium`}>
       <span className='sm:hidden '>{isfavpage? <ArrowLeftCircleIcon className="size-6 text-white" />:"Favourites"}</span> 
       <span className='hidden sm:block'>{isfavpage?"GoBack":"Go to Favourites"}</span>
       </button>
       <Routes>
          <Route path='/' element={<Home favmoviefn={favouritemoviesfn}/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/fav' element={<Favourites favmovie={favouritemovies} setfavmovie={setfavouritemovies} deletefn={deleteFavMovie}/>}/>
      </Routes>
       

      
      </div>
  
   </main>
   

  
  )


  
}

export default App