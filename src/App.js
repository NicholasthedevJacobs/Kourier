import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Contact from './contact';
import About from './about';
import Store from './store';
import Home from './components/pages/home';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Navbar />
        <Home />
        <Routes>
          <Route path='/' exact />
          <Route path="/components/pages/home" element={<Home />}/>
          {/* <Route path="/components/Navbar" element={<Navbar />}/> */}
          {/* <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/store" element={<Store />}/> */}

        </Routes>
      </Router>

    </>


  );
}

export default App;
