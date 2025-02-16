import { useEffect } from 'react';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import TsContainer from './components/tscontainer/TsContainer';
import './App.css';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <TsContainer />
      <Projects />
    </div>
  );
}

export default App;