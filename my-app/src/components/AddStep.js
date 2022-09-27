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
        placeholder="Steps"
      />
      <button onClick={(e)=>{
        e.preventDefault()
        setStepCounter((stepCounter) => stepCounter+1)
        handleNewStep(e, step)
      }}>Add Step
      </button>  
    </div>
  )
}

export default AddStep;