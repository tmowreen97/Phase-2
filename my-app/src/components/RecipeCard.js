import React from "react";

function RecipeCard({ recipes }){

  return (
    <div className="recipeCard">
      {recipes.map((recipe)=> {
        return (
          <span key={recipe.id}>
            <h2>{recipe.name} </h2>
            <img src={recipe.image} alt={recipe.name}/>
            <ul>
              Ingredients: 
              {recipe.ingredients.map((ing)=> {
                console.log(ing)
                return(
                  <li key={ing}>
                    {ing}
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