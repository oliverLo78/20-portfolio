// First we import 'useState' with React hook method that are immediately available to components
import React, { useState } from 'react';
import './styles/App.css';
import './components/NavTabs/index';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing components from the components folder
import NavTabs from './components/NavTabs';
import About from './components/About';
import Portfolio from './components/Portfolio/portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {

  const [ pageIndex, setPageIndex ] = useState(0);


  return (
    <div className="App">
      <NavTabs
        showAbout={() => setPageIndex(0)}
        showSkills={() => setPageIndex(1)}
        showProjects={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)}
        showContact={() => setPageIndex(4)}
        pageIndex = {pageIndex}
      />
        { pageIndex === 0 ? (
        <About />
      ) : pageIndex === 1 ? (
        <Skills />
      ) : pageIndex === 2 ? (
        <Portfolio />
      ) : pageIndex === 3 ? (
        <Resume />
      ) : pageIndex === 4 ? (
        <Contact />
      ) : (
        <About />
      ) }
      
       <Footer />
    </div>
     
  );
}

export default App;
