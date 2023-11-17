import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Academy from './pages/academy';
import Smp from './pages/smp';
import Vsmp from './pages/vsmp';
import Nav from './pages/nav';
import axios from 'axios';

function App() {
  axios.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
  });
  
  return (
    <div id="app">
        <Routes>
          <Route path='/nav' element={<Nav/>}/>
          <Route path='/' element={<Academy />}/>
          <Route path='smp' element={<Smp />}/>
          <Route path='vsmp' element={<Vsmp />}/>
        </Routes>

    </div>
  );
}

export default App;
