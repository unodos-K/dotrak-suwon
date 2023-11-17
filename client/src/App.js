import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Academy from './pages/academy';
import Smp from './pages/smp';
import Vsmp from './pages/vsmp';
import Nav from './pages/nav';

function App() {
  return (
    <div id="app">
        <Routes>
          {/* <Route path='/' element={<Nav/>}/> */}
          <Route path='/' element={<Academy />}/>
          <Route path='smp' element={<Smp />}/>
          <Route path='vsmp' element={<Vsmp />}/>
        </Routes>

    </div>
  );
}

export default App;
