import React, { useEffect } from 'react'
import { socket } from '../socket'

const Socket = () => {
    useEffect(() => {
        socket.on('connect', console.log("Connected"))
        socket.on('disconnect', console.log("Disconnected"))

        return() => {
            socket.off('connect', console.log("Connected"))
            socket.off('disconnect', console.log("Disconnected"))
        }
    }, [])
    
  return (
    <div>
        <h1>This is Socket example</h1>
        <span>Check console, connection wont work as theres no backend for it</span>
    </div>
  )
}

export default Socket