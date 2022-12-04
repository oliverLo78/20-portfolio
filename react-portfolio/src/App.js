// First we import 'useState' with React hook method that are immediately available to components
import React, { useState } from 'react';

import './App.css';
import NavTabs from './components/NavTabs';

// Importing components
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {

  const [ pageIndex, setPageIndex ] = useState(0);

  return (
    <div className="App">
      <Nav
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showResume={() => setPageIndex(2)}
        showContact={() => setPageIndex(3)}
      />
      {pageIndex === 0 ? (
        <About />
      ) : pageIndex === 1 ? (
        <Portfolio />
      ) : pageIndex === 2 ? (
        <Resume />
      ) : pageIndex === 3 ? (
        <Contact />
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;
