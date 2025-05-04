import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/About/AboutMe';
import Home from './components/Home';
import Blogspot from './components/Blogspot/Blogspot'; // Ensure this path is correct
import Project from './components/Project/Project'; // Ensure this path is correct
 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ensure all paths are correct */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blogspot" element={<Blogspot />} /> {/* Ensure Blogspot is the correct component */}
        <Route path="/project" element={<Project />} /> {/* Ensure Project is the correct component */}
         
      </Routes>
    </Router>
  );
};

export default App;