import React from 'react';
import Fluff from './Fluff';
import Home from './Home';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from './Calendar';
import Fluffers from './Fluffers';
import Gallery from './Gallery';



function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/'  element={<Home />}/>
            <Route path='/fluff' element={<Fluff />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/fluffers' element={<Fluffers />} />
            <Route path='/gallery' element={<Gallery />} />
            
          </Routes>
        </Router>
      </>
  );
}

export default App;
