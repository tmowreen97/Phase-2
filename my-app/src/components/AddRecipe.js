import React, { useEffect, useState } from "react";
import AddIngredient from "./AddIngredient";
import AddStep from "./AddStep";

export default function AddRecipe(){
  const [recipeName, setRecipeName]= useState('')
  const [ingredients, setIngredients]= useState(['placeholder'])
  const [stepList, setStepList]= useState(['placeholder'])


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

  function handleNewStep(e, newStep){
    e.preventDefault()
    setStepList([...stepList, newStep])


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
              setRecipeName(e.target.value)
            }}
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
            return(
              <AddIngredient ingredients={ingredients} setIngredients={setIngredients} handleAddIngredient={handleAddIngredient}/>
            )
          })
        }
        <ul>
        {/* <label>Step 1</label> */}
        {
          stepList.map((x, i)=> {
            return (
              <span>
                <label>Step {i+1}</label>
                <AddStep setStepList={setStepList} stepList={stepList} handleNewStep={handleNewStep}/>
              </span>
              
            )
          })
        }
        </ul>



        <button>Submit New Recipe</button>


      </form>
    </div>
    
  )
}