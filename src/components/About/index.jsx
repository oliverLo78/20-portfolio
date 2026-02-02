import React from "react";
import "./about.css";
import headshot from "../../../public/images/oliver-profile-pic.jpg";

export default function About() {
  return (
    <section className="about-container">
      <div className="left-side">
        <img
          className="headshot"
          src={headshot}
          alt="Oliver Lopez – Front-End Developer"
        />

        <h1 className="about-title">About Me</h1>

        <p className="about-text">
          Hi, I’m <strong>Oliver Lopez</strong> — a <strong>Front-End Developer</strong> focused on building modern, accessible, and user-friendly web applications using <strong>React</strong>, modern JavaScript, and responsive UI systems.
        </p>

        <p className="about-text">
          I specialize in translating ideas and designs into clean, maintainable
          interfaces that prioritize performance, usability, and real-world
          business needs. I enjoy working with component-driven architectures,
          modern tooling, and iterative UI improvements that enhance the end-user
          experience.
        </p>

        <p className="about-text">
          Before transitioning fully into software development, I worked as a
          <strong> Project Manager</strong> in the construction industry, where I
          led cross-functional teams, managed timelines, and delivered projects
          under real operational constraints. That background gives me a strong
          sense of ownership, communication, and accountability in technical
          projects.
        </p>

        <p className="about-text">
          I hold a <strong>Web Development Certificate</strong> from the
          University of Central Florida and have hands-on experience with Agile
          workflows, Scrum ceremonies, and collaborative development practices.
          I’ve built and deployed multiple full-stack and front-end projects,
          and I’m continuously refining my skills with modern React patterns and
          tooling.
        </p>

        <p className="about-text">
          Outside of coding, I enjoy traveling, experimenting with new recipes,
          training in Gracie Jiu-Jitsu, and staying active. I’m driven by
          continuous learning and enjoy building products that are both
          technically sound and genuinely useful.
        </p>
      </div>
    </section>
  );
}










