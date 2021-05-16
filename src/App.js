import React, {useState} from 'react'
import Count from './Count'

function App(){
  const [state, setState] = useState(0)
  const [num, value] = useState("")


  function inputvalue(event){
    value(event.target.value)
  }  function update(){
    setState(num)
  } 

  return(
    <div className="abcd">
      <h1 >Displaying frequency of top {num} words</h1>
      <input className="input" onChange={inputvalue} type="text" placeholder="Enter Number"/>
      <button onClick={update} className="btn">Search</button>
      <br></br><br></br><br></br>
      <Count number={state} />
    </div>
  )

}

export default App