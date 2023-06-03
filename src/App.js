
import Counter from './component/Counter';
import { useState } from 'react';

function App() {
  const [number,setNumber]=useState(0);
  const [component,setComponent]=useState(false)
  console.log(number)
  
  return (
    <div className="App">
      <div>
        <input type='number' onChange={(e)=>{setNumber(e.target.value)}} onKeyDown={()=>{
          setComponent(!component)
        }}/>
      </div>
    
      {
        component && <Counter seconds={number} />
      }
      
    </div>
  );
}

export default App;



