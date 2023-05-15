import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import { useState } from 'react';

function App() {
  const [number,setNumber]=useState(0);
  const [component,setComponent]=useState(false)
  console.log(number)
  
  return (
    <div className="App">
      <div>
        <input type='number' onChange={(e)=>{setNumber(e.target.value)}}/>
      </div>
      <div>
        <button onClick={()=>{
           setComponent(!component)
           
        }}>start</button>
      </div>
      {
        component && <Counter seconds={number} />
      }
      
    </div>
  );
}

export default App;
