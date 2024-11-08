import React, {Component} from 'react';
import { Link } from "react-router-dom";

export class Navbar extends Component{
  render(){
  return (
    <nav className="navbar">
      <h1>Tour_Guide</h1>
      <div className="links">
        <Link to="/" style={{color:' #17656e'}}><b>Home</b></Link>
        <Link to="/Tour" style={{ 
          color: 'white', 
          backgroundColor:  '#17656e',
          borderRadius: '8px' 
        }}>Tours</Link>
         <Link to="/TourDetail" style={{ 
          color: 'white', 
          backgroundColor:  '#17656e',
          borderRadius: '8px' 
        }}>Tour Details</Link>
        <Link to="/" style={{ 
          color: 'white', 
          backgroundColor:  '#17656e',
          borderRadius: '8px' 
        }}>LogOut</Link>


      </div>
    </nav>
  );
}
 
}