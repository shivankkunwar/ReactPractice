import React ,{useState}from "react";
import "./Accordian.css"
export default function Accordian ({id,question,answer}){
    const [active,setActive]= useState(false);    
    return (
        <div className="container">   
            <div className="main_heading">
                <p onClick={()=>setActive(!active)}>{active?"-":"+"}</p>
                <h3>{question}</h3>
            </div>
            
            {active&&<div className='answers'>
                {answer}
            </div>}
        </div>
    )
}
