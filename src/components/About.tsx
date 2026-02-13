import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // 👈 solo la primera vez
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Full-Stack Developer (Roblox Scripter / Game Systems Developer)
      </motion.h2>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="about-text">
          I am a dedicated Roblox developer with solid experience in Lua scripting
          and game systems development. I focus on creating efficient,
          well-optimized mechanics, interactive gameplay, and scalable systems
          that provide smooth and engaging player experiences.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
