import React, { useState } from "react";

function RecipeCard({ recipes }){
  
  return (
    <div className="recipeCard">
      {recipes.map((recipe)=> {
        return (
          <span key={recipe.id}>
            <h2>{recipe.name} </h2>
            <img className="recipeimg" src={recipe.image} alt={recipe.name}/>
            <ul>
              Ingredients: 
              {recipe.ingredients.map((ing, i)=> {
                return(
                  <li key={i}>
                    {ing}
                  </li>
                )
              })}
            </ul>
            <ul>
              Steps: 
              {recipe.steps.map((step, i)=> {
                return(
                  <li key={i}>
                    Step {i+1}: {step}
                  </li>
                )
                
              })}
            </ul>
          </span>
        )
      })}
    </div>
  )

}

export default RecipeCard;