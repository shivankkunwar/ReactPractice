import React ,{ useState } from "react";

import './Counter.css';

function Counter(){
       
    const [count, setCount] = useState(0);
        return(
            <div className="counter_outer">
                <h1>{count}</h1>
                <div className="button_wrap">
                    <button onClick={()=>setCount(count-1)}>-</button>
                    <button onClick={()=>setCount(count+1)}>+</button>
                </div>
            </div>
        )
}
export default Counter;