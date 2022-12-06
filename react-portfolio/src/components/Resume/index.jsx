import React from "react";
import pdf from '../Resume/oliver-lopez-resume-2022.pdf.docx'

function ResumeDiv() {
  return (
    <div>
      <h1>Download my  <a href={pdf}>resume</a></h1>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
    </div>
  );
}

export default ResumeDiv;
export {pdf}
