import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <section className="resume-container">
      <div className="resume-card">
        <h1>Resume</h1>

        <p className="resume-intro">
          Front-End Developer focused on building modern, accessible, and
          responsive single-page applications with React and modern JavaScript.
        </p>

        <a
          className="resume-download"
          href="/images/Oliver-Lopez-Frontend-Developer-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          download
        >
          Download Resume (PDF)
        </a>

        <hr />

        <h2>Core Proficiencies</h2>

        <ul className="resume-list">
          <li>React (Hooks, Component Architecture)</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5, CSS3, Responsive Design</li>
          <li>Vite, GitHub Pages, Render</li>
          <li>Bootstrap 5, Custom CSS Systems</li>
          <li>Accessibility basics (labels, focus states)</li>
          <li>Git & GitHub</li>
        </ul>

        <hr />

        <h2>Experience Highlights</h2>

        <p>
          Migrated portfolio from Create React App to <strong>Vite + React 19</strong>,
          improving build speed, maintainability, and deployment workflows.
        </p>

        <p>
          Built a component-driven UI with reusable sections (About, Portfolio,
          Resume, Contact) and responsive layouts using Bootstrap.
        </p>

        <p>
          Implemented a production-ready contact flow using EmailJS, client-side
          validation, and accessible form patterns.
        </p>

        <p>
          Background in project management brings strong ownership,
          communication, and delivery-focused thinking to technical work.
        </p>
      </div>
    </section>
  );
};

export default Resume;
