import React, { useEffect, useRef, useState } from "react";
import "./skills.css";

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Close on ESC + focus management (small accessibility win)
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="skills-container">
      <div className="right-side">
        <h1>Skills</h1>

        <ol className="skills-list">
          <li className="soft-skills">
            <h2>Front-End Developer</h2>
            <span>
              React. HTML. CSS. JavaScript (ES6+). Responsive UI. REST APIs.
              Accessibility basics. Git.
            </span>
          </li>

          <li className="soft-skills">
            <h2>Back-End Foundations</h2>
            <span>
              Node.js. Express. MongoDB. MySQL. SQL. Authentication patterns.
              Deployment basics.
            </span>
          </li>

          <li className="soft-skills">
            <h2>Workflow & Practices</h2>
            <span>
              Component-driven development. Agile/Scrum. Debugging. Code reviews.
              Documentation. Performance-minded UI.
            </span>
          </li>
        </ol>

        <button type="button" className="btn btn-success mt-3" onClick={openModal}>
          Motivation
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal dialog */}
          <div
            className="modal fade show d-block"
            role="dialog"
            aria-modal="true"
            aria-labelledby="motivation-title"
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="motivation-title">
                    Motivation
                  </h5>
                  <button
                    ref={closeBtnRef}
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeModal}
                  />
                </div>

                <div className="modal-body">
                  <p className="mb-0">
                    I bring a mix of front-end engineering and leadership
                    experience — clear communication, ownership, and a
                    customer-first mindset. I’m known for training teammates,
                    leading initiatives, and delivering polished work that helps
                    users and supports business goals.
                  </p>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={closeModal}>
                    Sounds good
                  </button>
                  <button type="button" className="btn btn-outline-secondary" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
