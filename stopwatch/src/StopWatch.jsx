import React,{useEffect, useState} from "react";

 const StopWatch=()=>{
  const[time,setTime]=useState(0)
  const[isRunning,setIsRunning]=useState(false)

useEffect(()=>{
let intarval;
if(isRunning){
  intarval=setInterval(()=>{
    setTime(prevTime=>prevTime+1)
  },1000)
}
return ()=>clearInterval(intarval)
},[isRunning])

const handleStartStop=()=>{
  setIsRunning(!isRunning)
}
const handleReset=()=>{
  setIsRunning(false)
  setTime(0)
}
  return(
    <div>
      <div className="mainContainer">
        <h2>Stopwatch</h2>
        <p>
          {Math.floor(time/60)}:{(time%60).toString().padStart(2,"0")}
        </p>
       <div className="btn">
<button onClick={handleStartStop}>
  {isRunning?"stop":"start"}
</button>
<button onClick ={handleReset}>Reset</button>
       </div>
      </div>
    </div>
  )
}

export default StopWatch;


