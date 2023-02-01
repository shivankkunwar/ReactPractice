import React from "react";
import './Slider.css';
function BtnSlider({moveSlide,imgSource,direction}){
        return(
            <>
                <button className={direction==='right'?'btn-slide next':'btn-slide prev'}  onClick={moveSlide}> <img src={imgSource} alt="leftArrow"/></button>
            </>
        )
}
export default BtnSlider;