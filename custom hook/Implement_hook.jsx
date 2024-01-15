import React from 'react'
import UseCustom from './useCustom'

export default function Implement_hook() {
  const [counter, Increment, Decrement] = UseCustom()
  return (
    <div>
      <h1>Custom hook</h1>
      <h2>Counter vaue: {counter}</h2>
        <button onClick={Increment}>Incremnet</button>
        <button onClick={Decrement}>Decrement</button>
    </div>
  )
}
