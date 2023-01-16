import React from "react";
import { motion } from "framer-motion";

import "../assets/Home.css";

import Particle from "./Particle";

import bitmoji from "../media/bitmojiRB.png";

export default function Home() {
  return (
    <div className="home-body">
      <Particle />
      <div className="home-content container">
        <motion.div
          className="row home-heading mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <b>Web Developer, Designer & Computer Engineering Undergrad</b>
        </motion.div>
        <div className="row">
          <motion.div
            className="col text-center first-col"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <b className="home-heading">Hey There! I am Hamza.</b>
            <p className="home-para pt-3">
              I am a junior computer engineering undergrad and I code and
              develop beautiful websites during my free time.
            </p>
          </motion.div>
          <motion.div
            className="col text-center"
            // initial={{ scale: 0 }}
            // animate={{ scale: 1 }}
          >
            <img src={bitmoji} alt="img" className="bitmoji-img" />
          </motion.div>
        </div>
      </div>

      <div className="home-right-border" />
      <div className="home-left-border" />
      <div className="home-bottom-border" />
    </div>
  );
}
