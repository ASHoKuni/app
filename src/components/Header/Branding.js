import React from "react";
import { Link } from "react-router-dom";
import { branding } from "../../utils/constant"; 
import logo from '../../assets/img/foodvilla.png'



export default Branding = () => {
    if(branding.logo){
        return <Link to={"/"}> <img className="logo" src={logo ? branding.logo : "Food Villa"} alt="logo" /> </Link>;
    }else{
        return (
      <h2>
        {branding.title} <span>{branding.subtitle}</span>
      </h2>
        )
    }

}
