import React,{useState} from 'react';
import './App.css';

const App=()=>{

  const [myName,setMyName]=useState('JYoti bansal');
  
  const changeName=()=>{
    let val=myName;
    (val==='jYoti bansal')?
    setMyName("Jyoti choudhary"):
    setMyName("jYoti bansal");
  }

  return(
      <div>
        <h1>{myName}</h1>
        <button className="btn" onClick={changeName}>click me</button>
      </div>
  )
}
export default App;
