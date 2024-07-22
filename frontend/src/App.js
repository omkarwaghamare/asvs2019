import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Memories from './Memories';
import FuturePlans from './FuturePlans';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/future-plans" element={<FuturePlans />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
