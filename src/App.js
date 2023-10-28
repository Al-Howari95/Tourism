import '../src/CSS/App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Componant/Header';
import Footer from './Componant/Footer';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Home from './Componant/Home';
import Blogs from './Componant/Blogs';
import Cards from './Pages/Cards';




function App() {

return (
   <Router>

    <div className="App">
      <Header />
      <Routes>
        {/* <Hero/> */}
        <Route path="/" element={<Home/>} />  
        <Route path="/Login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/Registration" element={<Registration />} />
       </Routes> 
       {/* <Blogs/> */}
      <Footer />
     
    </div>
   </Router>
);
}
export default App;