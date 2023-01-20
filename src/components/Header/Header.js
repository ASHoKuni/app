import React, { cloneElement } from 'react';
import Branding from './Branding';
import { IconName } from "react-icons/fa";
import { nav } from '../../utils/constant';
import { Link, Navigate,NavLink,useNavigate } from 'react-router-dom';


// const navbar = nav.map((item)=>{
//  return (
//         <li><Link to={"/"+item.title}  key={item.id}>{item.title}</Link></li>
//         // <li><a href="#" alt="nav" key={item.id}>{item.title}</a></li>

//  )
// })



export default Header = () =>{
    const  navigate = useNavigate()
    function singOut() {
        navigate("/login")
    }
    
   return(
    <div className="header">
    <Branding/>
    <div className='nav-item'>
        <ul >
            {/* {navbar} */}
            {/* <li><a href="#" alt="nav">Home</a></li>
            <li><a href="#" alt="nav">About</a></li>
            <li><a href="#" alt="nav">Contact</a></li>
            <li><a href="#" alt="nav">Cart</a></li> */}
            <li><NavLink style={({isActive})=>{return {color: isActive ? 'blue':''}}} className='nav-bar-link' to="/">Home</NavLink></li>
            <li><NavLink style={({isActive})=>{return {color: isActive ? 'blue':''}}} className='nav-bar-link' to="/about">About</NavLink></li>
            <li><NavLink style={({isActive})=>{return {color: isActive ? 'blue':''}}} className='nav-bar-link' to="/contact">Contact</NavLink></li>
            <li><NavLink style={({isActive})=>{return {color: isActive ? 'blue':''}}} className='nav-bar-link' to="/cart">Cart</NavLink></li>
            <li><NavLink style={({isActive})=>{return {color: isActive ? 'blue':''}}} className='nav-bar-link' to="/signup">signup</NavLink></li>
            <button type="button" onClick={singOut}>SingOut</button>
        </ul>
    </div>

    </div>
   )
  
}