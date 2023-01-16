import React from "react";

import "../assets/About.css";

import quote from "../media/Quote.png";

export default function About() {
  return (
    <div className="about-body">
      <div
        className="row p-0 m-5 pb-3"
        style={{ color: "white", fontFamily: "Roboto" }}
      >
        <div className="col p-5 m-0 about-text">
          <div className="about-heading pb-3">
            <h1 style={{ color: "#C9D6DF" }}>About</h1>
          </div>
          I am an undergraduate junior @ Ghulam Ishaq Khan Institute of
          Engineering Sciences and Technology (GIKI). Majoring in Computer
          Engineering, I pursue full-stack web development out of passion.
          <br />
          <p />
          Dabbling in problem-solving and coding from a young age, my career
          aspirations revolve around the ever-growing tech industry. As an
          ambitious software engineer, I spend my time coding and graphic
          designing.
          <br />
          <p />I have diverse skills, including C/C++, Python, HTML, CSS,
          Javascript, and React. I am also open to freelance work; feel free to
          reach out to me via my socials or check out my resume.
        </div>
        <div className="col p-0 m-0">
          <img src={quote} alt="img" className="quote-img" height={"400px"} />
        </div>
      </div>

      <div className="btn-group" role="group">
        <button type="button" className="btn btn-outline-secondary">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/-hamza-siddiqui/"
            style={{textDecoration: "none", color: "#C9D6DF"}}
            className="ms-5 me-5"
          >
            Linkedin
          </a>
        </button>
        <button type="button" className="btn btn-outline-secondary">
          <a
            target="_blank"
            href="https://github.com/hamzaasiddiqui"
            style={{textDecoration: "none", color: "#C9D6DF"}}
            className="ms-5 me-5"
          >
            GitHub
          </a>
        </button>
        <button type="button" className="btn btn-outline-secondary">
          <a
            target="_blank"
            href="https://www.freelancer.com/u/hamzaasiddiqui9"
            style={{textDecoration: "none", color: "#C9D6DF"}}
            className="ms-5 me-5"
          >
            Freelancer
          </a>
        </button>
        <button type="button" className="btn btn-outline-secondary">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1aoJDLMlpgOk1NW2cgtikz0b-Qte4jetX/view?usp=share_link"
            style={{textDecoration: "none", color: "#C9D6DF"}}
            className="ms-5 me-5"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}
