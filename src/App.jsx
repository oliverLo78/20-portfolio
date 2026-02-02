import React, { useMemo, useState } from "react";
import "./styles/App.css";
import grpProjects from "./group-projects";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const pages = [
  { bg: "prj-one", component: About },
  { bg: "prj-two", component: Portfolio },
  { bg: "prj-three", component: Resume },
  { bg: "prj-four", component: Skills },
  { bg: "prj-five", component: Contact },
];

const backgrounds = [
  "/images/trip-san-francisco.jpg",     // About Me
  "/images/trip-san-francisco-2.jpg",   // Portfolio
  "/images/trip-san-francisco.jpg",   // Resume
  "/images/muir-woods.jpg",             // Resume
  "/images/atl-aquarium-2.jpg",             // Contact
];

// Randomize background per visit
const pageBackgrounds = backgrounds.sort(() => 0.5 - Math.random());

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);

  const CurrentPage = pages[pageIndex].component;
  const bgClass = pages[pageIndex].bg;

  const pageProps = useMemo(() => {
    if (CurrentPage === Portfolio) return { grpProjects };
    return {};
  }, [CurrentPage]);

  return (
    <div
      className="app-shell"
      style={{
        backgroundImage: `url(${pageBackgrounds[pageIndex]})`,
      }}
    >

      <Header
        currentPage={pageIndex}
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showResume={() => setPageIndex(2)}
        showSkills={() => setPageIndex(3)}
        showContact={() => setPageIndex(4)}
      />

      {/* Main content grows to fill space */}
      <main style={{ flex: 1 }}>
        <CurrentPage {...pageProps} />
      </main>
      
      <Footer />
    </div>
  );
}
