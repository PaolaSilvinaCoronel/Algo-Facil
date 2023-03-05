import React,{useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

const apiURL ='https://api.giphy.com/v1/gifs/search?api_key=dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa&q=panda&limit=10&offset=0&rating=G&lang=en'

function App() {
  
  const [gifs, setGifs]= useState([])
  
  useEffect(function (){
   fetch(apiURL)
   .then(res => res.json())
   .then(response => {
    const {data}= response
    const gifs = data.map(image => image.images.downsized_medium.url)
    setGifs(gifs)
   })
  },[])

  return (
    <div className="App">
     <section className='App-content'> 
     {
      gifs.map(singleGif => <img src={singleGif}/>)
     }
     <button onClick= {()=> setGifs(DIFERENTE_GIFS)}>Cambiar el gifs</button>
     </section>
    </div>
  );
}

export default App;
