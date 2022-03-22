import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
