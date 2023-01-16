import React from "react";
import { motion } from "framer-motion";

import "../assets/ProjectCard.css";

export default function ProjectCard({
  animationDelay,
  projectImage,
  projectTitle,
  projectDes,
  projectLink,
}) {
  return (
    <motion.div
      className="card-container text-center m-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: animationDelay }}
    >
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_img">
        <div className="text-center"></div>
        <img
          src={projectImage}
          alt=""
        />
        <article className="text-left">
          <h2>{projectTitle}</h2>
          <h4>{projectDes}</h4>
          <button type="button" className="btn btn-outline-light">
            <a href={projectLink} target={'_blank'} style={{textDecoration: 'none'}}>See More</a>
          </button>
        </article>
      </div>
    </motion.div>
  );
}
