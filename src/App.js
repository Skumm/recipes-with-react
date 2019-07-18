import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
const APP_ID = '78a2b4a0';
const APP_KEY = 'f66f146add7888a43cc42063ccf8d0fe';
const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect( () => {
    console.log('Effect entra en funcionamiento');
  })

  return(
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text" />
          <button className="search-button" type="submit">Buscar</button>
        </form>
        <h1 onClick={() => setCounter(counter +1)}>{counter}</h1>
      </div>
  );
}

export default App;
