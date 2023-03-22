import React, { useState } from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import {Link, Route} from "wouter"

export default function App() {
  const [keryword, setKeyword] = useState('pandas')
   return (
    <div className="App">
     <section className='App-content'>
      <h1>App</h1>
      <Link to='/gif/panda'>Gifs de panda</Link>
      <Link to='/gif/mortin'>Gifs de Mortin</Link>
      <Link to='/gif/ricky'>Gifs de Ricky</Link>
     <Route 
     component={ListOfGifs}
     path='/gif/:keyword' />
    
     </section>
    </div>
  );
}


