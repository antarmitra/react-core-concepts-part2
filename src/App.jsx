import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick (){
    alert('Please click me...')
  }

  function handleClick2(){
    alert('Please help me, submit your information')
  }

  function countClick(num){
    alert(num + 10)
  }

  return (
    <>
      <h2>React Core Concepts Part2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Submit</button>

      <button onClick={() => alert('The library for web and native user interfaces')}>Learn React</button>

      {/* advance way */}
      <button onClick={() => countClick(55)}>Count</button>
    </>
  )
}

export default App
