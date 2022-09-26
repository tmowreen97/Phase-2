import React, { useState } from "react"

function AddIngredient( {ingredients, setIngredients, handleAddIngredient}){
  const [ingQuantity, setIngQuantity] = useState('')
  const [ingUnit, setIngUnit] = useState('each ')
  const [ingName, setIngName] = useState('')

  const ingredientList = []

  return (
    <ul>
      <input onChange={(e) => {
        e.preventDefault()
        setIngQuantity(`${e.target.value} `)
      }}
      type="text" placeholder="1"/>
      <select onChange={(e)=>{
        e.preventDefault()
        setIngUnit(`${e.target.value} `)
        
      }}>
        <option>each</option>
        <option>oz(s)</option>
        <option>lb(s)</option>
        <option>cup(s)</option>
        <option>tbsp(s)</option>
        <option>tsp(s)</option>
      </select>
      <input 
        onChange={(e)=> {
          e.preventDefault()
          setIngName(`${e.target.value}`)
          console.log(ingName)
        }}
        type='text' 
        placeholder="cheese"
      />
      <button onClick={(e)=> {
        e.preventDefault()
        ingredientList.push(ingQuantity, ingUnit, ingName)
        let newIngredient = ingredientList.join('')
        handleAddIngredient(e, newIngredient)
      }}>Add Ingredient</button>
     </ul>
  )
}

export default AddIngredient