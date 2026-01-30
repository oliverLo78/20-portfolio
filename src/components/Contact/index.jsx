import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef(null);
  const closeBtnRef = useRef(null);

  const messageClose = () => setIsOpen(false);
  const messageOpen = () => setIsOpen(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yxf1m8j",
        "template_92yyfem",
        form.current,
        "RQhNo667QGSlWoBNi"
      )
      .then(
        (result) => {
          console.log(result.text);
          messageOpen();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // ESC closes modal + focus management (nice accessibility touch)
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") messageClose();
    };

    window.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1 style={{ fontSize: "60px" }}>Contact Me!</h1>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="top-form">
            <i className="fa-solid fa-envelope custom-envelope" />

            <div className="top-form-inputs">
              <label className="form-label" htmlFor="user-name">
                Name:
              </label>
              <input
                id="user-name"
                type="text"
                name="user-name"
                className="text-inputs"
                required
              />

              <label className="form-label" htmlFor="user-email">
                Email Address:
              </label>
              <input
                id="user-email"
                type="email"
                name="user-email"
                className="text-inputs"
                required
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea id="message" className="message-text" name="message" required />

            <input className="send-btn" type="submit" value="Send" />
          </div>
        </form>

        {/* Success Modal */}
        {isOpen && (
          <>
            <div
              className="modal-backdrop fade show"
              onClick={messageClose}
              aria-hidden="true"
            />

            <div
              className="modal fade show d-block"
              role="dialog"
              aria-modal="true"
              aria-labelledby="message-sent-title"
              onClick={messageClose}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content">
                  <div className="modal-header" style={{ backgroundColor: "#cbfff5" }}>
                    <h5 className="modal-title" id="message-sent-title">
                      Message Sent!
                    </h5>
                    <button
                      ref={closeBtnRef}
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={messageClose}
                    />
                  </div>

                  <div className="modal-body">
                    <p className="mb-0">
                      Thanks for reaching out — I’ll get back to you soon.
                    </p>
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={messageClose}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
