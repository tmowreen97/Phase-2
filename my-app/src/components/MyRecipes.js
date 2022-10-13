import React, { useEffect } from "react";
import RecipeList from "./RecipeList";

export default function MyRecipes( {setRecipes, myRecipes} ){

  useEffect(()=> {
    fetch("http://localhost:3000/recipes")
    .then(resp => resp.json())
    .then((data)=> {
      setRecipes(data)
    })
  }, [])
  console.log(myRecipes)

  return(
    <div className="myRecipes">
      {myRecipes && <RecipeList recipes={myRecipes}/>}
    </div>
  ) 
}