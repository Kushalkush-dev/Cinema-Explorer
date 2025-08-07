import React, { use, useEffect, useState } from 'react'
import Search from './components/Search.jsx'
import Spinnerloader from './components/Spinnerloader.jsx';


const API_BASE_URL= 'https://api.themoviedb.org/3';
const API_KEY=import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {

  const [searchvalue, setsearchvalue] = useState('')
  const [errormessage, seterrormessage] = useState('')
  const [moviedata, setmoviedata] = useState([])
  const [isloading, setisloading] = useState(false)

  const fetchmoviedata=async ()=>{
    setisloading(true)
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
     if(!response.ok){
      throw new Error('Error fetching movies');
     }
      const data = await response.json();

      if(data.results==='false' || data.results.length===0){
        seterrormessage('No movies found.');
        setmoviedata([])
        return;
      }
      setmoviedata(data.results || [])
      console.log(data);
      setisloading(false)



    } catch (error) {
      seterrormessage('Error fetching movies. Try again');
      console.error('Error fetching movies:', error);
    }finally{
      setisloading(false)
    }
  }
  
  useEffect(()=>{

    fetchmoviedata()

  },[])
  

  return (
   <main>
      
      <div className='pattern'/>

      <div className='wrapper'>
       
       <header>
        <img src="./logo3.png" alt="logo" className='absolute w-[15vw] left-[44vw]  sm:left-[46vw] sm:w-[100px] sm:h-[100px] rotate-0 opacity-100'/>
        <img src="./hero-img.png" alt="hero-image" />
        <h1>Discover <span className='text-gradient'>Movies</span> You’ll Love Instantly</h1>

       <Search searchvalue={searchvalue} setsearchvalue={setsearchvalue}/>
       </header>

        <h2>All Movies</h2>
       <section className='all-movies'>

       {isloading?<Spinnerloader/>:errormessage?<p className='text-red-500'>{errormessage}</p>:(
        <ul>
         { moviedata.map((movie,idx)=>(
          <p key={idx} className='text-xl text-teal-200'>{movie.title}</p>
        ))}
        </ul>
         
       )}

       </section>


       

      
      </div>

   </main>
   

    
  )
}

export default App