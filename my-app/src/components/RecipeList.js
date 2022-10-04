import React from "react";

export default function RecipeList({ recipes }){
  
  return (
    <div className="recipeList">
      {recipes.map((recipe)=> {
        return (
          <div key={recipe.id}>
            <h2>{recipe.name} </h2>
            <img className="recipeimg" src={recipe.image} alt={recipe.name}/>
            <ul>
              Ingredients: 
              {recipe.ingredients.map((ing, i)=> {
                return(
                  <li key={ing}>
                    {ing}
                  </li>
                )
              })}
            </ul>
            <ul>
              Steps: 
              {recipe.steps.map((step, i)=> {
                return(
                  <li key={step}>
                    Step {i+1}: {step}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )

}
