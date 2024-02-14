import React, { useMemo, useState } from 'react';

//sometimes the any logic or the function also impact on another function. means if there is a slowness of any function, that slowness also impact on another function. to prevent this things you can use useMemo
//and useMemo itself also do the value you computing/calculating that retain(copy) in cache so you can use that value from cache if user do another time same request

export default function Memo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = () =>{
    //adding complexity to make slowness //now second button also working slow 
    let i = 0
    while(i<200000000) {
      i++}
    return counterOne%2===0
  }

  // preventing that problem(only first button work slow but not seccond)
  // const isEven = useMemo(() => {
  //   let i = 0
  //   while(i<200000000) {
  //     i++}
  //   return counterOne % 2 === 0;
  // }, [counterOne]);       //'[counterOne]' means dependancy(means only which you have to do that task. here we only use in counterOne not counterTwo)

  //we can also aproach the callback like,
// const usingMemo = useMemo(() => isEven(), [counterOne])

  return (
    <div>
      <h1>useMemo</h1>
      <button onClick={incrementOne}>CounterOne - {counterOne}</button>
      <span>{isEven()? "Even":"Odd"}</span>
      <button onClick={incrementTwo}>CounterTwo - {counterTwo}</button>
    </div>
  );
}



