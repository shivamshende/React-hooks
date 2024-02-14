import React, {useCallback, useState} from 'react'
import Child from './child';

export default function Parent() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const buttonOne = () => {
    setCounterOne(counterOne + 1);
  }

  const learning = useCallback(() => {
    
  }, [counterTwo])          //'[counterTwo]' is dependancy that only work that function when cunterTwo will be update

  const buttonTwo = () => {
    setCounterTwo(counterTwo + 2)
  }

  return (
    <div>
      <h1>useCallback</h1>
      <Child Learning = {learning}/>
      <button onClick={buttonOne}>CounterOne - {counterOne}</button>
      <button onClick={buttonTwo}>CounterOne - {counterTwo}</button>
    </div>
  )
}



//we make usecase to render child component only if there is a changes

//here child component running(see in console) while clicking parent componet button1 //after wrap child compnent using 'memo' (export default 'memo(Child)'), child component will not running without any reason after clicking parent component button1

//we passing now 'learning' function as a props to child component and the child component re-rendering even we wrapped child component by 'memo'.  because there is a term in react i.e 'referential equality', means React re-renders a component only when a change occurs to its state variables or props.and whenever page re-render, the functions was recreate.(so here learning function recreates. so Child component thinks that function was recreate so it have any changes or its a new function. thats why child component re-rendering. which wrong or we don't want. in that condition we can use 'useCallback' hook

//we write that 'learning' function in useCallback hook. 
//and give the dependancy there that only when 'counterTwo' value was update
