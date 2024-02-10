import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setcounter] = useState(4)
  // let counter = 4
  function addValue() {
    console.log(counter, "value increased!")
    // counter = counter + 1
    setcounter(counter + 1)   //'setcounter' use to update the value  //'useSate(4)' means 4 is initial value
  }

  function removeValue() {
    if (counter > 0) {
      console.log(counter, "value decreased")
      setcounter(counter - 1)
    }
  }

  useEffect(function () {
    console.log("useEffect also called after component or dom update")
  }, [addValue])        //'[addValue]' is dependancy means whenever addValue update then that useEffect will run

  return (
    <>
      <h1>useSate</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Increase({counter})</button>
      <button onClick={removeValue}>Decrease({counter})</button>
    </>
  )
}

export default App