import React from 'react';
import style from './recipe.module.css';

const Recipe = ({titulo, calorias, imagen, ingredientes}) => {
    return(
        <div className={style.recipe}>
          <h1>{titulo}</h1>
          <ol>
            {ingredientes.map((ingrediente) =>(
              <li>{ingrediente.text}</li>
            ))}
          </ol>
          <p>{calorias}</p>
          <img  className={style.image} alt={titulo} src={imagen} title={titulo}></img>
        </div>
    );
}

export default Recipe;