import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Productos } from './components/Productos';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/About' element={<About />} />
          <Route path='/*' element={<Navigate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
