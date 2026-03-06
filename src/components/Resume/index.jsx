import React from "react";
import { Toast, ToastHeader, ToastBody, Alert } from "reactstrap";

function SkillsDiv(props) {
  return (
    <div className="p-3 bg-info my-2 rounded">
      <Toast>
        <ToastHeader icon="info">
          Reactstrap awesomesauce {props.name}
        </ToastHeader>
        <ToastBody>
          Skills gained at UCF coding Bootcamp
        </ToastBody>
      </Toast>
      <Alert color="primary">
        <h4 className="alert-heading">
          My Qualifications:
        </h4>
        <p>
         Migrated portfolio from Create React App to Vite + React 19, improving build speed and modernizing deployment to GitHub Pages.
        </p>
      <hr />
      <p className="mb-0">
        Built a component-driven UI with reusable sections (About/Portfolio/Skills/Contact) and responsive layout using Bootstrap.
      </p>
      <hr />
      <p>
        Implemented a production-ready contact flow using EmailJS, form validation, and accessible input labeling.
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

export default SkillsDiv;
