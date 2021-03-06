import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '78a2b4a0';
  const APP_KEY = 'f66f146add7888a43cc42063ccf8d0fe';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
      getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return(
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">Buscar</button>
        </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
             key={recipe.recipe.label}
             titulo={recipe.recipe.label}
             ingredientes={recipe.recipe.ingredients}
             calorias={recipe.recipe.calories} 
             imagen={recipe.recipe.image}/>
          ))}
        </div>
      </div>
  );
}

export default App;
