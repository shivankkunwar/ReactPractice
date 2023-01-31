import React from "react";
import './Home.css';
import Accordian from "./Accordian/Accordian";
import data from "./Accordian/data"
function Home(){
    return (
    <div>
        <h1> SELECT THE OPTION</h1>
        <div>
        <h2>Accordian</h2> 
        <div className="accord">
        {
        data.map( (curr)=>
            <Accordian key ={curr.id} id={curr.id} question={curr.question} answer={curr.answer}/>
          )
        }
        </div>
        </div>
        
    </div>
       
    )
}
export default Home;