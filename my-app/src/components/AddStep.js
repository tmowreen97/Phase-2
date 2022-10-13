import React, { useState } from "react";

export default function AddStep({ handleNewStep }){
  const [step, setStep]=useState('')

  return(
    <div>
      <input 
        onChange={(e)=> {
          setStep(e.target.value)
        }}
        type='add'
        placeholder="Add a Step"
      />
      <button onClick={(e)=>{
        e.preventDefault()
        handleNewStep(step)
      }}>Add Step
      </button>  
    </div>
  )
}
