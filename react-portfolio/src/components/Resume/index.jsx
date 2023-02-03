import React from "react";
import { Toast, ToastHeader, ToastBody } from "reactstrap";
import pdf from '../Resume/Oliver FullStack Resume 2023.pdf';

function ResumeDiv(props) {
  return (
    <div className="p-3 bg-info my-2 rounded">
      <Toast>
        <ToastHeader icon="info">
          Reactstrap awesomesauce {props.name}
        </ToastHeader>
        <ToastBody>
          Download my <a href={pdf}>resume</a>
        </ToastBody>
      </Toast>
    </div>
  );
}

export default ResumeDiv;
export {pdf}
