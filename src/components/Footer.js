import React  from "react";
import { Link } from "react-router-dom";



const Footer =()=>{
    return(
       <div className='footer'>
        <p><Link to="/privacy">@2023 Food Villa</Link></p>
       </div>
    )
}

export default Footer;