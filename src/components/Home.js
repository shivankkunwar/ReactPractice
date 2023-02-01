import React from "react";
import './Home.css';
import Accordian from "./Accordian/Accordian";
import data from "./Accordian/data"
import Slider from "./Slider/Slider";
function Home(){
    return (
    <div>
        <h2>Slider</h2>
        <Slider />
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