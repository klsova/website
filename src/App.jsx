import React from 'react';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import TsContainer from './components/tscontainer/TsContainer';
import './App.css';

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
}

document.getElementById('theme-toggle-button').addEventListener('click', toggleDarkMode);

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