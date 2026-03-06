import React, { useMemo, useState } from "react";
import "./styles/App.css";
import grpProjects from "./group-projects";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const pages = [
  { component: About },
  { component: Portfolio },
  { component: Resume },
  { component: Contact },
];

export default function App() {
  const [pageIndex, setPageIndex] = useState(0);

  const CurrentPage = pages[pageIndex].component;

  const pageProps = useMemo(() => {
    if (CurrentPage === Portfolio) return { grpProjects };
    return {};
  }, [CurrentPage]);

  const base = import.meta.env.BASE_URL;

  const pageBackgrounds = [
    `${base}images/trip-san-francisco.jpg`,     // About Me
    `${base}images/trip-san-francisco-2.jpg`,   // Portfolio
    `${base}images/muir-woods.jpg`,             // Resume
    `${base}images/atl-aquarium-2.jpg`,         // Contact
  ];

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
        showContact={() => setPageIndex(3)}
      />

    <main style={{ flex: 1 }}>
      <div key={pageIndex} className="page-transition">
        <CurrentPage {...pageProps} />
      </div>
    </main>

      <Footer />
    </div>
  );
}