import React, { useEffect, useState } from "react";
import AddIngredient from "./AddIngredient";

export default function AddRecipe(){
  const [recipeName, setRecipeName]= useState('')
  const [ingredients, setIngredients]= useState(['placeholder'])
  console.log(ingredients)

  // useEffect(()=> {
  //   fetch("http://localhost:3000/recipes")
  //   .then( resp => resp.json())
  //   .then( (data) => {
  //     console.log(data)
  //     const newIngredients=[]
  //     data.map((recipe)=> {
  //       console.log('recipe', recipe)
  //       newIngredients.push(recipe.ingredients)
  //       })
  //       setIngredients(newIngredients)
  //   })
  // },[])
  function handleAddIngredient(e, newIngredient){
    e.preventDefault()
    setIngredients([...ingredients,newIngredient])
  }
  return(
    <div className="addRecipe">
      <p>Add a Recipe!</p>
      <form>
        <ul>
          <input 
            type='text'
            placeholder="Name"
            value={recipeName}
            onChange={(e)=> {
              console.log(e.target.value)
              setRecipeName(e.target.value)} }
          />
        </ul>
        <ul>
          <input
            type="text"
            placeholder="Image URL" 
          />
        </ul>
        {
          ingredients.map((x, i)=> {
            console.log(ingredients)

            return(
              <AddIngredient ingredients={ingredients} setIngredients={setIngredients} handleAddIngredient={handleAddIngredient}/>
            )
          })
        }

        <ul>
        <label>Steps:</label>
        <input 
          type='text'
        />
        <button onClick={(e)=>{
          e.preventDefault()
          console.log('step')}}>Add Step</button>
        </ul>


        <button>Submit New Recipe</button>


      </form>
    </div>
    
  )
}