import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseHookstoUpdate = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json, "useEffect gets triggered when state is changed"))
    }, [state])
    
  return (
    <div>
        <h1>2) use hooks to get update regarding any state value into function component.</h1>
        <span>check console</span>
        <button onClick={() => setState(!state)}>Change State</button>
    </div>
  )
}

export default UseHookstoUpdate