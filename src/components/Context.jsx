import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
const TestContext = createContext()

const Context = () => {
    const [value, setValue] = useState("Random Value")

  return (
    <TestContext.Provider value="Random">
        <h2>{`This is value stored in context file: ${value}`}</h2>
        <Form />
    </TestContext.Provider>
  )
}

const Form = () => {
    const value = useContext(TestContext);
    return(
        <div>
            <h1>This is useContext Example: {value}</h1>
        </div>
    )
}

export default Context