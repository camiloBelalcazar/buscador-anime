import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Anime from './components/Anime';


function App() {  
  const [animes, setAnimes] = useState(null)

const handleSubmit = (e) => {
  e.preventDefault()
  const name = e.target.name.value
  if(name === "") return setAnimes(null)
  axios.get(`https://api.jikan.moe/v4/anime?q=${name}`)
    .then(res => setAnimes(res.data.data))
    .catch(err => console.log(err))
}

  return (
    <main className='bg-imagen1 bg-cover bg-center text-white min-h-screen font-["Roboto"] '>
      <h2 className='text-center py-4 text-3xl font-bold'>Search  Anime</h2>

    <form onSubmit={handleSubmit} className='max-w-max mx-auto '> 
      <div className='flex rounded-md overflow-hidden'>
        <input id='name' type="text" placeholder='Search...' className='text-black outline-none px-3'/>
        <button className='bg-red-500 text-white p-2  '>Search</button>
      </div>      
    </form>


    <section className=' p-4 py-6 flex justify-center items-center flex-wrap  gap-4 max-w-[1000px] mx-auto  ' >


      { animes?.[0] && <Anime animeInfo={animes[0]} /> }

      { animes?.[1] && <Anime animeInfo={animes[1]} /> }

      { animes?.[2] && <Anime animeInfo={animes[2]} /> }

      { animes?.[3] && <Anime animeInfo={animes[3]} /> }

      { animes?.[4] && <Anime animeInfo={animes[4]} /> }

      { animes?.[5] && <Anime animeInfo={animes[5]} /> }


    
    
    </section>
    </main>
  );
}

export default App
