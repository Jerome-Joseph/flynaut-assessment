import React from 'react'
import { useState } from 'react'

const FunctionComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Function Component Example counter:</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Add +</button>
    </div>
  )
}

export default FunctionComponent