import React, { use, useEffect, useState } from 'react'
import Search from './components/Search.jsx'
import Spinnerloader from './components/Spinnerloader.jsx';
import Moviecard from './components/Moviecard.jsx';
import { useDebounce } from 'react-use';
import { trendingmoviesfn, updatedatabase } from './appwrite.js';




const API_BASE_URL= 'https://api.themoviedb.org/3';
const API_KEY=import.meta.env.VITE_TMDB_API_KEY;

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

  const [debouncedTerm, setdebouncedTerm] = useState('')

  const [trendingmovies, settrendingmovies] = useState([])

  useDebounce(() => setdebouncedTerm(searchvalue), 700, [searchvalue]);


  const fetchtrendingmovielist=async ()=>{

    try {
      const  trendmovies=await trendingmoviesfn()
      settrendingmovies(trendmovies)
    } catch (error) {
      console.log("Error fetching trending movies", error);     
    }
    
  }

  const fetchmoviedata=async (query='')=>{
    setisloading(true)
    try {
      const endpoint = query?`${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`: `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if(!response.ok){
        throw new Error('Error fetching movies');
      }
      const data = await response.json();
      seterrormessage('')
      if(!data.results || data.results.length===0){
        seterrormessage('No movies found.');
        setmoviedata([])
        return;
      }
      setmoviedata(data.results || [])
      console.log(data);

      if(query && data.results.length>0 ){
        await updatedatabase(searchvalue,data.results[0])
      }
      
    } catch (error) {
      seterrormessage('Error fetching movies. Try again');
      console.error('Error fetching movies:', error);
    }finally{
      setisloading(false)
    }
  }
  
  useEffect(()=>{

    fetchmoviedata(debouncedTerm)

  },[debouncedTerm])
  
  useEffect(()=>{
    fetchtrendingmovielist()
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


       {trendingmovies.length>0 && (
        <section className='trending'>
          <h2>Trending Movies</h2>
          <ul>
            {trendingmovies.map((movie,index)=>(
              <li key={movie.$id}>
                <p>{index+1}</p>
                <img src={movie.poster_url} alt="./No-Poster.png" />
                
              </li>
            ))}
          </ul>
          
        </section>
       )}

       <section className='all-movies'>
        <h2 className='mb-4'>All Movies</h2>

       {isloading?<Spinnerloader/>:errormessage?<p className='text-red-500'>{errormessage}</p>:(
        <ul>
         { moviedata.map((movie)=>(
          <Moviecard key={movie.id} movie={movie}/>
        ))}
        </ul>
         
       )}

       </section>


       

      
      </div>

   </main>
   

    
  )
}

export default App