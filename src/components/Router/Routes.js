import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { Route, BrowserRouter, Routes, Link, Navigate } from "react-router-dom";
import Food from "../Food";
import Header from "../Header/Header";
import Footer from "../Footer";
import Body from "../Body";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Layout from "./Layout";
import NotFound from "../Pages/404"
import Login from "../Pages/login"
import SignupForm from "../Pages/singup"
import RestaurantDetails from "../Pages/RestaurantDetails"

import PrivateLayout from "./RoutesAuth"

 const privateRoutesLayout = [
    {component:<Body/>,path:"/"},
    {component:<Contact/>,path:"/Contact"},
    {component:<Cart/>,path:"/Cart"},

]

const pubicRoutesLayout =[
    {component:<About/>,path:"/About"},

]

const RoutesWrap = () => {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
{/* Private with header footer  */}
          <Route element={<PrivateLayout/>}>
            <Route element={<Layout />}>
                {
                    privateRoutesLayout.map( (item)=>{
                        return <Route path={item.path} key={item.path} element={item.component} />
                    })
                }
                {/* <Route path="/" element={<Body />} />
                <Route path="/Contact" element={<Contact />} /> 
                <Route path="/Cart" element={<Cart />} />
                */}
            </Route>
          </Route>

 {/* public with header footer  */}
          <Route element={<Layout/>}>  
            {pubicRoutesLayout.map((item)=>{
                return <Route path={item.path} element={item.component} />
            })}
          </Route>

{/* public without header footer  */}
          <Route >  
            <Route path="/login" element={<Login/>} /> 
            <Route path="/signup" element={<SignupForm/>} /> 
            <Route path="/restaurant/:id" element={<RestaurantDetails/>}/>
          </Route>

          <Route >  
            <Route path="*" element={<NotFound/>} /> 
          </Route>

          {/* <Route >  
            <Route path="/*" element={<Navigate to="/"/>} /> 
          </Route> */}



        </Routes> 
      </BrowserRouter>
    </div>
  );
};

export default RoutesWrap;
