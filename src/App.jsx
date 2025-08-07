import React, { useState } from 'react'
import Search from './components/Search.jsx'

const App = () => {

  const [searchvalue, setsearchvalue] = useState('')

  

  return (
   <main>
      
      <div className='pattern'/>

      <div className='wrapper'>
       
       <header>
        <img src="./logo3.png" alt="logo" className='absolute w-[15vw] left-[44vw]  sm:left-[46vw] sm:w-[100px] sm:h-[100px] rotate-0 opacity-100'/>
        <img src="./hero-img.png" alt="hero-image" />
        <h1>Discover <span className='text-gradient'>Movies</span> You’ll Love Instantly</h1>

       </header>
       <Search searchvalue={searchvalue} setsearchvalue={setsearchvalue}/>
        <h1>{searchvalue}</h1>
      </div>

   </main>
   

    
  )
}

export default App