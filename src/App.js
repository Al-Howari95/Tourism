import '../src/CSS/App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Componant/Header';
import Footer from './Componant/Footer';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Home from './Componant/Home';
import Form from './Componant/Form';
import Blogs from './Pages/Blogs';

import BlogsDetiles from './Pages/BlogsDetiles';




function App() {

return (
   <Router>

    <div className="App">
      <Header />
     
      <Routes>
     
        {/* <Hero/> */}
        <Route path="/" element={<Home/>} />  
        <Route path="/Login" element={<Login />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/BlogsDetiles" element={<BlogsDetiles />} />
        <Route path="/Registration" element={<Registration/>} />
       </Routes> 
       {/* <Blogs/> */}
       {/* <Cards/> */}
      <Footer />
    
    </div>
   </Router>
);
}
export default App;