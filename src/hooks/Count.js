import React, { useEffect, useState } from 'react'

const Count = () => {
  // useState - react hook, manage states, 

  // const [variable, function] = useState(intialValue)
  // variable -> state variable to store state/values -> count
  // function -> function to update state/value of variable ->setCount
  // initialValue -> initial value of state variable -> 0

  const [count, setCount] = useState(0)

  const [data, setData] = useState(0)

  const increase = () => setCount(count + 1)


  // useEffect -> to show effect when a state changes 
  // useEffect(function,[statevariables])
  // function -> effect to be seen
  // statevariables -> states which will trigger functions in useEffect

  useEffect(()=>{
    window.alert("count is updated")
  },)


  return (
    <>
      <div className='text-center'>
        <h1>Count: {count}</h1>
        <div className='btn-group'>
          {(count < 10)  && <button className='btn btn-success' onClick={increase}>Increase</button>}
          {(count > -10) && <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Decrease</button>}
          <button className='btn btn-warning' onClick={() => setCount(0)}>Reset</button>
        </div>

        <h1>Data: {data}</h1>
        <div className='btn-group'>
          <button className='btn btn-success' onClick={() => setData(data + 2)}>Increase</button>
          <button className='btn btn-danger' onClick={() => setData(data - 2)}>Decrease</button>
          <button className='btn btn-warning' onClick={() => setData(0)}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default Count