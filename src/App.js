import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Navbar from './components/Navbar.js';
import Alert from './components/Alert.js';
import AlertState from './context/alert/AlertState.js';
import FirebaseState from './context/firebase/FirebaseState.js';


function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar/>
          <div className="container pt-4">
          <Alert alert={{text: "памагити"}}/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  )
}

export default App;
