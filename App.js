import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipie'

const app = () => {
  const APP_ID = "9e1185fe";
  const APP_KEY = "6a40f62a601f633de9f64d8c864b3c04"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('chicken')
  useEffect(() => {
    getData();
  }, [query])

  const getData = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  }

  const onchangeHandler = e =>{
    setSearch(e.target.value)
  }

  const onSubmitHandler = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    
    <div className="app">
      <h1 className="header">Recipe App :)</h1>
      <form onSubmit={onSubmitHandler} className="form">
          <input value={search} className="input" type="text" onChange={onchangeHandler}></input>
          <button className = "button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.image} label={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
      ))}
      </div>
      
    </div>
  );
}

export default app;
