import React, { useState } from 'react'
import { useRef } from 'react'

export default function UseRef() {
    const refElement = useRef('Shivam')
    console.log(refElement)    //let see what is the value of refElement in console   //here the initial(current) value is 'Shivam'

    // changeRefElement = () => {
    //     refElement.current = "Shende"
    //     console.log(refElement.current)
    // }
    // changeRefElement()       refElement will be 'Shende in console

    const [Name, setName] = useState('Tony')

    const changeName = () => {
        setName('Neha')
    }

    const changeColor = () => {
        refElement.current.style.color = "orange"
    }

  return (
    <div>
        <h1>useRef</h1>
        <input type="text" value={Name} ref= {refElement}/>
        <button onClick={changeName}>Change Name</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}
