// First we import 'useState' with React hook method that are immediately available to components
import React, { useState } from 'react';
import './styles/App.css';
import './components/NavTabs/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import grpProjects from './group-projects';

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

  const NavTabs = () => {
      if ( pageIndex === 0 ) {
        return<About />
      }

      if ( pageIndex === 1 ) {
      return<Portfolio grpProjects={grpProjects}/>
       }

       if ( pageIndex === 2 ) {
      return<Contact />
      }
    }

  const tripPics = () => {

      if ( pageIndex === 0 ) {
      return'p-three'
      } 
      
      if ( pageIndex === 1 ) {
      return'p-two'
      }
      
      if ( pageIndex === 2 ) {
        return'p-one'
      }  
    }      
      return (
        <div className={tripPics()} style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Header
            showAbout={() => setPageIndex(0)}
            showProjects={() => setPageIndex(1)}
            showContact={() => setPageIndex(2)}
          />
          {NavTabs()}
          <Footer />
          </div>
      )
}

export default App;
