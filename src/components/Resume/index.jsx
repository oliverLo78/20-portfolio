import React from "react";
import { Toast, ToastHeader, ToastBody, Alert } from "reactstrap";
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
      <Alert color="primary">
        <h4 className="alert-heading">
          My Qualifications:
        </h4>
        <p>
          At least 6 months of experience (Bootcamp attendance/graduation counts toward this requirement)
        </p>
      <hr />
      <p className="mb-0">
        Bootcamp Graduate of the 3-month course. Able to learn and master new skills quickly and effectively.
      </p>
      <hr />
      <p>
        Some familiarity with most or all the technologies associated with selected program
      </p>
      <hr />
      <p className="mb-0">
        RESTful API/Constantly learning and improving/Computer literacy.
      </p>
      <hr />
      <p>
        Node.js/Teamwork/project management/: my background in managing projects from the planning to making it a reality is a plus in any industry.
      </p>
      <hr />
      <p className="mb-0">
        These are only a few of my accomplishments. I look forward to speaking with you in more detail about my experience, and I will follow up by email
      </p>
      <hr />
    </Alert>
  </div>
  );

}

export default ResumeDiv;
export {pdf}
