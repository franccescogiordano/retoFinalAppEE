import {
    BrowserRouter as Router, Routes, Route,  Navigate } from "react-router-dom";
import Auth from '../components/Auth';
import App from '../App';

import React, { Component }  from 'react';
export const AppRoutes = () => {
    return ( 
        <div>
        <Router>
        <div className="div-welcome">
        
           
            <Routes>
            <Route path="/" element={<App/>}>
                </Route> 
                <Route path="/auth" element={<Auth/>}>
                </Route> 
                <Route element={<Navigate  to="/" />}>
                   
                </Route>
                
            </Routes>
            </div>
         
        </Router>
        </div>
     );
}
 
