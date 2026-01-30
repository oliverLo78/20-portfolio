import React, { useMemo, useState } from "react";
import "./styles/App.css";
import grpProjects from "./group-projects";

import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

const pages = [
  { bg: "prj-one", component: About },
  { bg: "prj-two", component: Portfolio },
  { bg: "prj-three", component: Skills },
  { bg: "prj-four", component: Contact },
];

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
      className={bgClass}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showSkills={() => setPageIndex(2)}
        showContact={() => setPageIndex(3)}
      />

      <CurrentPage {...pageProps} />

      <Footer />
    </div>
  );
}
