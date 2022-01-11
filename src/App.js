import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container pt-4">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
