import React, {useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import SocialsBar from '../../components/SocialsBar/SocialsBar'
import PageWatermark from '../../components/PageWatermark/PageWatermark'
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import './App.css';

function App() {
  const [onPage, setOnPage] = useState("antony yu.")
  
  return (
    <div className="App">
      <NavBar setOnPage={setOnPage}/>
      <Routes>
        {/* client-side route that renders the component instance if the path matches the url in the address bar */}
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/home" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
      <div className="footer-container">
      <SocialsBar />
      <PageWatermark onPage={onPage}/>
      </div>
    </div>
    
  );
}

export default App;
