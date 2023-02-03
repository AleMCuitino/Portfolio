
import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Create from "../views/crud/Create";
import Edit from "../views/crud/Edit";
import ShowElement from "../views/crud/ShowElement";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/create" element={<Create />}></Route>
                <Route path="/edit/:id" element={<Edit />}></Route>   
                <Route path="/proyectos" element={<ShowElement />}></Route>   
                <Route path="/cv" element={<ShowElement />}></Route> 
                <Route path="/acercademi" element={<ShowElement />}></Route>      
            </Routes>
        </BrowserRouter>
    );
};

export default Router;