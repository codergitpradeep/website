import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Route, Routes} from 'react-router-dom';

const App =() =>{
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Service" element={<Service/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App;