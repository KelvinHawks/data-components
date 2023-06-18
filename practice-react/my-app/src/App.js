
import React from 'react'
import Count from './components/Count'
function App(){
  const[count, setCount] = React.useState(0)

  function increment(){
    setCount(
      prevState=> prevState + 1
    )
  }
  function decrement(){
    setCount(
      prevState=> prevState - 1
    )
  }

  return (
    <div>
      <Count
        number= {count}
      />
      <div onClick={increment}>+</div>
      <div onClick={decrement}>-</div>
    </div>
  )
}

export default App
