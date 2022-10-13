import React, { useState } from "react"

export default function AddIngredient( { handleAddIngredient }){
  const [ingQuantity, setIngQuantity] = useState(null)
  const [ingUnit, setIngUnit] = useState('each ')
  const [ingName, setIngName] = useState(null)
  const ingredientList = []

  return (
    <ul>
      <input onChange={(e) => {
        setIngQuantity(`${e.target.value} `)
      }}
      type="text" placeholder="Quantity"/>
      <select onChange={(e)=>{
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
          setIngName(`${e.target.value}`)
        }}
        type='text' 
        placeholder="Item"
      />
      <button onClick={(e)=> {
        e.preventDefault()
        ingredientList.push(ingQuantity, ingUnit, ingName)
        let newIngredient = ingredientList.join('')
        handleAddIngredient(newIngredient)
      }}>Add Ingredient</button>
     </ul> 
  )
}