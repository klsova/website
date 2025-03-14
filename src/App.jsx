import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header/Header';
import Main from './components/main/Main';
import Projects from './components/projects/Projects';
import TsContainer from './components/tscontainer/TsContainer';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Greetings from './components/greeting/Greeting'
import './App.css';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <Router>
      <Analytics />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Greetings />
              <Main />
              <TsContainer />
              <Projects />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tscontainer" element={<TsContainer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;