// First we import 'useState' with React hook method that are immediately available to components
import React, { useState } from 'react';
import './App.css';
import './components/NavTabs/index';

// Importing components from the components folder
 //import Nav from './components/Nav';
import NavTabs from './components/NavTabs';

import About from './components/About';
import Portfolio from './components/Portfolio/portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [ pageIndex, setPageIndex ] = useState(0);

  return (
    <div className="App">
      <NavTabs
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showResume={() => setPageIndex(2)}
        showContact={() => setPageIndex(3)}
        pageIndex = {pageIndex}
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
      
       <Footer />
    </div>
     
  );
}

export default App;
