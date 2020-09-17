import React from 'react';
import './recipe.module.css';
// import './component.css'

const Recipe = (props) => {
    return (
        <div className="recipe">
            <h3 className="head">{props.label}</h3>
            <ol>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={props.image}></img>
        </div>
    );
}

export default Recipe;