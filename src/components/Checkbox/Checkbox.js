import React, {useState} from "react";
import "./Checkbox.css";
function Checkbox(){
    const [isCitizen,setCitizen]= useState(false);

    const changeCheck=()=>{
        setCitizen(!isCitizen);
    }
        return (
        <>
        <form>
            <h2>Does the checkbox work : {isCitizen?"yes":"no" }</h2>
            <label>
                does it work:
                <input type="checkbox" checked={isCitizen} onChange={changeCheck}/>

            </label>
        </form>

        </>
    )
}

export default Checkbox;