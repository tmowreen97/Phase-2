import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import AddRecipe from "./AddRecipe";

function MyRecipes(){
  const [myRecipes, setRecipes] = useState(null)

  useEffect(()=> {
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    .then((data)=> {
      console.log(data)
      setRecipes(data)
    })
  }, [])

  return(
    <div>
{      myRecipes && <RecipeCard recipes={myRecipes}/>
}    </div>

  )
    
}

export default MyRecipes