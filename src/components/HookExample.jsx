import React from 'react'
import { useContext } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import Context from './Context';

const HookExample = () => {
     const [data, setData] = useState([]);
     const [count, setCount] = useState(0)
     const value = useContext(Context)

     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setData(json.title,"This is useEffect Example"))
     }, [])

     const increment = useCallback(() => {
        setCount(count + 1)
     }, [count])

     const decrement = useCallback(() => {
        setCount(count - 1)
     }, [count])
     
  return (
    <div>
        <h1>3) useState UseEffect UseCallback useContext </h1>
        <h2>{data}, This is useState example</h2>
        <h2>Count: {count}, This is useCallback example</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default HookExample