import React, { useEffect, useState } from 'react'

const Counter = ({seconds,setComponent}) => {
    const [count,setCount]=useState(Math.floor(seconds));
    if(count<0){
        setCount(0)
    }
  
    useEffect(()=>{
        
        const countdown = setInterval(()=>{
            if(count>0) {
                setCount(prev=>prev-1)
            }
          
        },1000)

        return ()=>{
            clearInterval(countdown)
        }
    },[count])
   
  return (
    <div>
        <div>{count}</div>
    </div>
  )
}

export default Counter
