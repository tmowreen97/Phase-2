import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

function MyRecipes(){
  const [myRecipes, setRecipes] = useState(null)
  useEffect(()=> {
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    .then((data)=> {
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