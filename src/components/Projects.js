import React from "react";

import { motion } from "framer-motion";

import ProjectCard from "../common/ProjectCard";

import mantulaImg from "../media/mantulaImg2.png";
import cmsImg from "../media/cmsImg.png";
import getRecipeImg from "../media/getRecipeImg.png";
import getWeatherImg from "../media/getWeatherImg.png";

export default function Projects() {
  return (
    <div className="px-5">
      <motion.h1
        className="mt-5 mb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Projects
      </motion.h1>
      <div className="d-flex justify-content-center">
        <ProjectCard
          projectImage={mantulaImg}
          animationDelay={0.6}
          projectTitle={"Mantula Solar"}
          projectDes={
            "Part of the software development team for Mantula Solar. Successfully built new and improved website using ReactJS."
          }
          projectLink={"https://mantula-solar.vercel.app/"}
        />
        <ProjectCard
          projectImage={cmsImg}
          animationDelay={0.8}
          projectTitle={"UCP"}
          projectDes={
            "A complaint Mangement portal for a university, allows students to lodge and follow up on complaints. Developed using PHP and MySQL."
          }
          projectLink={"https://github.com/hamzaasiddiqui/University-Complaint-Portal"}
        />
        <ProjectCard
          projectImage={getRecipeImg}
          animationDelay={1.0}
          projectTitle={"GetRecipe"}
          projectDes={
            "A recipe website that holds thousands of searchable recipes online. The website makes use of a REST API and was made using ReactJS and Firebase."
          }
          projectLink={"https://github.com/hamzaasiddiqui/"}
        />
        <ProjectCard
          projectImage={getWeatherImg}
          animationDelay={1.2}
          projectTitle={"GetWeather"}
          projectDes={
            "A weather website, allowing users to search for millions of cities to get weather info. The website makes use of a REST API and was made using ReactJS."
          }
          projectLink={"https://github.com/hamzaasiddiqui/"}
        />
      </div>
    </div>
  );
}
