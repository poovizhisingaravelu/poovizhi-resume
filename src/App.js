import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Home from './Components';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/resume" exact element={<Resume />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
//<Route path="/portfiolo" component={Portfiolo} />
