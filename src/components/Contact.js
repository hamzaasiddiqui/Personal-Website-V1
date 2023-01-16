import React from "react";
import { motion } from "framer-motion";

import "../assets/Contact.css";

import {
  Linkedin,
  Github,
  EnvelopeFill,
  PersonWorkspace,
} from "react-bootstrap-icons";

export default function Contact() {
  return (
    <div className="contact-wrapper">
    <motion.div
      className="contact-body"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="contact-heading">Contact Me</div>
      <div className="contact-body my-3 p-0">
        Feel free to reach out to me through my email, Linkedin, or my other
        links.
        <br />I also do freelance projects on the side and if you are interested
        to link up, you can check out my freelancer profile or drop me a
        message.
      </div>
      <div>
        <a href="hamza.eins@gmail.com" target={"_blank"}>
          <button type="button" className="btn mx-2">
            <EnvelopeFill color="#F0F5F9" size={30} />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/-hamza-siddiqui/"
          target={"_blank"}
        >
          <button type="button" className="btn mx-2">
            <Linkedin color="#F0F5F9" size={30} />
          </button>
        </a>
        <a
          href="https://www.freelancer.com/u/hamzaasiddiqui9"
          target={"_blank"}
        >
          <button type="button" className="btn mx-2">
            <PersonWorkspace color="#F0F5F9" size={30} />
          </button>
        </a>
        <a href="https://github.com/hamzaasiddiqui" target={"_blank"}>
          <button type="button" className="btn mx-2">
            <Github color="#F0F5F9" size={30} />
          </button>
        </a>
      </div>
      <div className="contact-footer">Hamza A. Siddiqui | Copyright © 2023</div>
    </motion.div>
    </div>
  );
}
