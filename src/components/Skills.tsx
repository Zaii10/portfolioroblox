import React from "react";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "HTML5", icon: "/html5-logo.jpg" },
  { name: "CSS3", icon: "/css.jpg" },
  { name: "JavaScript", icon: "/js.jpg" },
  { name: "Sass", icon: "/sass.jpg" },
  { name: "React", icon: "/React.jpg" },
  { name: "Node.js", icon: "/node.jpg" },
  { name: "Python", icon: "/python-logo.jpg" },
  { name: "Git", icon: "/Git.jpg" },
  { name: "MySQL", icon: "/mysql.jpg" },
  { name: "PHP", icon: "/php.jpg" },
  { name: "TypeScript", icon: "/ts.jpg" },
  { name: "Lua (Roblox)", icon: "/lua.jpg" },
  { name: "Blender", icon: "/blender.jpg" },
];

// Variants (como TweenService 😎)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const Skills: React.FC = () => {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill-icon">
              <img
                src={skill.icon}
                alt={skill.name}
                className="icon-image"
              />
            </div>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
