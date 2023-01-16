import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { motion } from "framer-motion";

import "../assets/Navigation.css";

import { List } from "react-bootstrap-icons";

export default function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const OffcanvasMenu = () => {
    return (
      <>
        {["end"].map((placement, idx) => (
          <Offcanvas
            show={show}
            onHide={handleClose}
            key={idx}
            placement={placement}
            name={placement}
            id="Offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul>
                <a
                  id="menu-list"
                  href="/"
                  style={{ textDecoration: "none", color: "#C9D6DF" }}
                  className="ms-5 me-5"
                >
                  Home
                </a>
              </ul>
              <ul>
                <a
                  id="menu-list"
                  href="#About"
                  style={{ textDecoration: "none", color: "#C9D6DF" }}
                  className="ms-5 me-5"
                >
                  About
                </a>
              </ul>
              <ul>
                <a
                  id="menu-list"
                  href="#Experience"
                  style={{ textDecoration: "none", color: "#C9D6DF" }}
                  className="ms-5 me-5"
                >
                  Experience
                </a>
              </ul>
              <ul>
                <a
                  id="menu-list"
                  href="#Projects"
                  style={{ textDecoration: "none", color: "#C9D6DF" }}
                  className="ms-5 me-5"
                >
                  Projects
                </a>
              </ul>
              <ul>
                <a
                  id="menu-list"
                  href="#Contact"
                  style={{ textDecoration: "none", color: "#C9D6DF" }}
                  className="ms-5 me-5"
                >
                  Contact
                </a>
              </ul>
              <ul className="mt-4">
                <a
                  id="menu-list"
                  target={"_blank"}
                  href="https://drive.google.com/file/d/1aoJDLMlpgOk1NW2cgtikz0b-Qte4jetX/view?usp=share_link"
                  style={{ textDecoration: "none", color: "#C9D6DF" }}
                  className="ms-5 me-5"
                >
                  Resume
                </a>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        ))}
      </>
    );
  };

  return (
    <div>
      <OffcanvasMenu />
      <nav className="navbar nav">
        <div className="container-fluid">
          <div className="title mx-2">
            <motion.div
              className="title-link"
              to="/"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="title-first-text">
                H<span className="title-second-text">AMZA </span>S
                <span className="title-second-text">IDDIQUI</span>
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              className="me-2 p-0"
              variant="transparent"
              onClick={handleShow}
            >
              <List className="m-0 p-0" color="#C9D6DF" size={40} />
            </Button>
          </motion.div>
        </div>
      </nav>
    </div>
  );
}
