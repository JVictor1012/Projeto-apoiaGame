import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
