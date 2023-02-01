import React ,{useState}from "react";
import data from "./data"
import leftArrow from "./icon/left-arrow.svg"
import rightArrow from "./icon/right-arrow.svg"
import BtnSlider from "./Btn-slider";
import "./Slider.css"

export default function Slider(){
    const [slideIndex,setSlideIndex]= useState(1);
    const prevSlide =()=>{
        
        if(slideIndex !== 1) setSlideIndex(slideIndex-1);
        else if(slideIndex===1){
            setSlideIndex(data.length);
        }
        console.log(slideIndex);
    }
    const nextSlide =()=>{
        if(slideIndex !== data.length) setSlideIndex(slideIndex+1);
        else if(slideIndex===data.length){
            setSlideIndex(1);
        }
        console.log(slideIndex);
    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <div className="container-slider">
            {
                data.map((obj,index) =>{
                    return (
                            <div key={obj.id} className={slideIndex===index+1 ? "slide active":"slide"}>

                            <img src={require(`./img/${index+1}.jpg`)} alt="slider"/>
                            </div>   
                    )
                })
            }

            <BtnSlider moveSlide={prevSlide} imgSource={leftArrow} direction='left' />
            <BtnSlider moveSlide={nextSlide} imgSource={rightArrow} direction='right'/>
        
            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}