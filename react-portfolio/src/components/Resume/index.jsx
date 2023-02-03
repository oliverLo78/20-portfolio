import React from "react";
import pdf from '../Resume/oliver-lopez-resume-2022.pdf.docx'

function ResumeDiv(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h1>Download my  <a href={pdf}>resume</a></h1>
    </div>
  );
}

export default ResumeDiv;
export {pdf}
