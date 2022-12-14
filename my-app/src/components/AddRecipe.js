import React, { useState } from "react";
import AddIngredient from "./AddIngredient";
import AddStep from "./AddStep";

export default function AddRecipe({ handleAddRecipe }){
  const [recipeName, setRecipeName]= useState('')
  const [imageURL, setImageURL] = useState('')
  const [ingredients, setIngredients]= useState(['placeholder'])
  const [stepList, setStepList]= useState(['placeholder'])

  function handleAddIngredient(newIngredient){
    setIngredients([...ingredients,newIngredient])
  }

  function handleNewStep(newStep){
    setStepList([...stepList, newStep])
  }

  function handleSubmit(e){
    e.preventDefault()
    const newIngList = ingredients.filter((ing)=> {
      return ing !== "placeholder"
    })
    const newStepList = stepList.filter((step)=> {
      return step !== "placeholder"
    })
    const recipeData= {
      name: recipeName,
      image:imageURL,
      ingredients: newIngList,
      steps: newStepList
    }
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData)
    })
    .then(res=> res.json())
    .then(newRecipe => handleAddRecipe(newRecipe))
  }

  return(
    <div className="addRecipe">
      <h3 className="recipeTitle">Add a Recipe!</h3>
      <form onSubmit={handleSubmit}>
        <ul>
          <input 
            type='text'
            placeholder="Name"
            onChange={(e)=> {
              setRecipeName(e.target.value)
            }}
          />
        </ul>
        <ul>
          <input
            type="text"
            placeholder="Image URL" 
            onChange={(e)=>{
              setImageURL(e.target.value)
            }}
          />
        </ul>
        {
          ingredients.map((x, i)=> {
            return(
              <span key={x}>
                <AddIngredient ingredients={ingredients} setIngredients={setIngredients} handleAddIngredient={handleAddIngredient}/>
              </span>
            )
          })
        }
        <ul>
        {
          stepList.map((x, i)=> {
            return (
              <span key={x}>
                <label>Step {i+1}</label>
                <AddStep setStepList={setStepList} stepList={stepList} handleNewStep={handleNewStep}/>
              </span>
            )
          })
        }
        </ul>
        <button type="submit">Submit New Recipe</button>
      </form>
    </div>
  )
}