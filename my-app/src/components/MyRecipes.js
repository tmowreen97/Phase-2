import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

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
    <div className="myRecipes">
{      myRecipes && <RecipeCard recipes={myRecipes}/>
}    </div>

  )
    
}

export default MyRecipes