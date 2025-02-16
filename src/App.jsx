import React from 'react';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import TsContainer from './components/tsContainer/TsContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <TsContainer />
    </div>
  );
}

export default App;