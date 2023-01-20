import { Navigate,Outlet } from "react-router-dom";

export default PrivateLayout = () =>{
    const auth = true ;

    return  auth ? <Outlet/> : <Navigate to={"/unauth"}/>
   
}