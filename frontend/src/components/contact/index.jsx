import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact-sec py-3 px-5 text-center" id="contact">
      <Container fluid>
        <div className="inner-content primaryRed b-radious-16">
          <h2 className="mb-3 text-white">
            CKD.Net – A Novel Deep Learning Hybrid Model for Effective,
            Real-time, Automated Screening Tool Towards Prediction of Multi
            Stages of CKD Along With eGFR and Creatinine.
          </h2>
          {/* <p className='text-white muted'>You may contact at following Email or visit our Github Repository, We'll be happy to address issue and provide quality research output.</p> */}

          <div className="button-container mt-5">
            <a
              className="text-white rounded-pill py-2 px-4 me-2 bg-white"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ahsanhabib98/ckd.net"
              style={{ "--bs-bg-opacity": "0.15" }}
            >
              GitHub
            </a>
            <a
              className="text-white rounded-pill py-2 px-4 bg-white"
              href="mailto:ahredoan@gmail.com"
              style={{ "--bs-bg-opacity": "0.15" }}
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
