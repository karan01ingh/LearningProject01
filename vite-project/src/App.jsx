import { useState } from 'react'
import viteLogo from '/vite.svg'
function App(){
  let [color,setColor]=useState("black");
  return(
    <>
    <div style={{backgroundColor:color,height:800,width:1500}}>
    <button onClick={()=>setColor("red")}>red</button>
    <button onClick={()=>setColor("black")}>black</button>
    <button onClick={()=>setColor("pink")}>pink</button>
    <button onClick={()=>setColor("orange")}>orange</button>
    <button onClick={()=>setColor("white")}>white</button>
    <button onClick={()=>setColor("purple")}>purple</button> 
    <button onClick={()=>setColor("olive")}>olive</button> 
    <button onClick={()=>setColor("green")}>green</button> 
    <button onClick={()=>setColor("grey")}>grey</button> 
    <button onClick={()=>setColor("yellow")}>yellow</button> 
    </div>
    </>
  )
}
export default App
