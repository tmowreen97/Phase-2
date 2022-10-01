import React, { useState } from "react";

function AddStep({ handleNewStep }){
  const [stepCounter, setStepCounter] = useState(1)
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
        setStepCounter((stepCounter) => stepCounter+1)
        handleNewStep(step)
      }}>Add Step
      </button>  
    </div>
  )
}

export default AddStep;