import React, { useEffect, useState } from "react";
import AddIngredient from "./AddIngredient";
import AddStep from "./AddStep";

export default function AddRecipe(){
  const [recipeName, setRecipeName]= useState('')
  const [imageURL, setImageURL] = useState('')
  const [ingredients, setIngredients]= useState(['placeholder'])
  const [stepList, setStepList]= useState(['placeholder'])

  function handleAddIngredient(e, newIngredient){
    e.preventDefault()
    setIngredients([...ingredients,newIngredient])
  }

  function handleNewStep(e, newStep){
    e.preventDefault()
    setStepList([...stepList, newStep])
  }

  function handleSubmit(e){
    e.preventDefault()
    let newIngList = ingredients.filter((ing)=> {
      return ing !== "placeholder"
    })
    let newStepList = stepList.filter((step)=> {
      return step !== "placeholder"
    })
    const recipeData= {
      name: recipeName,
      image:imageURL,
      ingredients:newIngList,
      steps:newStepList
    }
    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData)
    })
    .then(res=> res.json())
    .then(data => console.log(data))
  }

  return(
    <div className="addRecipe">
      <h3 className="recipeTitle">Add a Recipe!</h3>
      <form>
        <ul>
          <input 
            type='text'
            placeholder="Name"
            value={recipeName}
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
              <AddIngredient ingredients={ingredients} setIngredients={setIngredients} handleAddIngredient={handleAddIngredient}/>
            )
          })
        }
        <ul>
        {
          stepList.map((x, i)=> {
            console.log(x)
            return (
              <span>
                <label>Step {i+1}</label>
                <AddStep setStepList={setStepList} stepList={stepList} handleNewStep={handleNewStep}/>
              </span>
              
            )
          })
        }
        </ul>

        <button onClick={(e)=> {handleSubmit(e)}}>Submit New Recipe</button>


      </form>
    </div>
    
  )
}