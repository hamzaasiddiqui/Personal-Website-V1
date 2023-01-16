import React from "react";
import { motion } from "framer-motion";

import "../assets/Experience.css";

export default function Experience() {
  return (
    <div className="experience-body">
      <motion.h1
        className="mt-5 mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Experience
      </motion.h1>

      <div className="experience-table ms-3 me-5">
        <table className="table table-transparent text-left">
          <tbody>
            <motion.tr>
              <td></td>
              <td colSpan={2}></td>
              <td colSpan={2}></td>
            </motion.tr>
            <motion.tr
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <td className="pe-3">
                <b>2022</b>
              </td>
              <td colSpan={2}>
                <b>SWE Intern</b>
                <br />
                Mantula Solar
              </td>
              <td colSpan={2}>
                Remote internship where I worked as a full stack web developer
                along with five diverse individuals.
                <br /> Developed a website for the company using React.js and
                Firebase. Significantly improved the website's look and feel.
                <br /> Integrated a price estimator on the website and made use
                of numerous NPM packages.
              </td>
            </motion.tr>
            <motion.tr
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <td className="pe-3">
                <b>2019</b>
              </td>
              <td colSpan={2}>
                <b>Learning Facilitator</b>
                <br />
                JEEP
              </td>
              <td colSpan={2}>
                Taught and designed English lessons to students aging 9-12,
                prepared classrooms before lessons, and gave <br />
                workshop presentations. I was successfully able to keep students
                on-task with positive reinforcement strategies during lessons.
              </td>
            </motion.tr>
            <motion.tr
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <td className="pe-3">
                <b>2019</b>
              </td>
              <td colSpan={2}>
                <b>Social Worker</b>
                <br />
                WWF
              </td>
              <td colSpan={2}>
                Group leader of the team leading a campaign for water
                conservation and sustainability. I successfully led my team to{" "}
                <br />
                conduct thorough research on Pakistan's growing water crises,
                helped raise awareness in our locality, and successfully <br />
                completed 20+ hours of community service.
              </td>
            </motion.tr>
            <motion.tr
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <td className="pe-3">
                <b>2018</b>
              </td>
              <td colSpan={2}>
                <b>Healthcare Intern</b>
                <br />
                Al-Shifa Eye Trust Hospital
              </td>
              <td colSpan={2}>
                I successfully worked at the reception desk and organized
                paperwork. Furthermore, I assisted patients with hospital <br />
                procedures, provided them with knowledgeable service, and gave
                them dilation drops before their checkups.
              </td>
            </motion.tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
