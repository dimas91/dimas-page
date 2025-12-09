import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Routes,
  Route, 
  HashRouter} from "react-router-dom";
import './index.css';
import App from './App';
import Woordeltje from './routes/Woordeltje';
import Navbar from './components/Navbar';
import About from './routes/About';
import Music from './routes/Music';

ReactDOM.render(
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/music" element={<Music />} />
      <Route path="/woordeltje" element={<Woordeltje />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);