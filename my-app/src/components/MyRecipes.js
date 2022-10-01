import React, { useEffect } from "react";
import RecipeList from "./RecipeCard";

function MyRecipes( {setRecipes, myRecipes} ){

  useEffect(()=> {
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    .then((data)=> {
      setRecipes(data)
    })
  }, [setRecipes])

  return(
    <div className="myRecipes">
      {myRecipes && <RecipeList recipes={myRecipes}/>}
    </div>
  ) 
}

export default MyRecipes