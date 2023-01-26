import React ,{ useState } from 'react';
import './Searchbar.css';
 function Searchbar (){

   
    const list=['apple','butter','peanuts','love','scary','ghost'];
    const [filterList, setFilterlist]=useState(list);
    const lister=(event)=>{
        if(event.target.value===""){
                setFilterlist(list);
                return;
        }
        const filteredValues = list.filter(
                (item)=>
                        item.toLowerCase().indexOf(event.target.value.toLowerCase())!==-1);
        setFilterlist(filteredValues)
        
    }
    return (
        <div className="app">
      <div>
        Search: <input name="query" type="text" onChange={lister} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
    )
}
export default Searchbar;