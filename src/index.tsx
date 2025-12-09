import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import './index.css';
import App from './App';
import Woordeltje from './routes/Woordeltje';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/woordeltje" element={<Woordeltje />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);