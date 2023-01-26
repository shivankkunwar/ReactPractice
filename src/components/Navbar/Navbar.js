import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
function Navbar(){
    return (
        <nav className="navigate">
        <h1>TinyProjects</h1>
        <div className="links">
            <Link to="/" style={{
                color:"white",
                backgroundColor:"#f1356d",
                borderRadius: '8px'
                }}>Home</Link>
            <Link to="/searchbar">Search</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/list">Blog List</Link>
        </div>
        
        </nav>
    )
}
export default Navbar;