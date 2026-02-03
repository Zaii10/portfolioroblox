import React from "react";
import "./Skills.css";

const skills = [
  { name: "", icon: "/html5-logo.jpg" },
  { name: "", icon: "/css.jpg" },
  { name: "", icon: "/js.jpg" },
  { name: "", icon: "/sass.jpg" },
  { name: "", icon: "/React.jpg" },
  { name: "", icon: "/node.jpg" }, 
  { name: "", icon: "/python-logo.jpg" },
  { name: "", icon: "/Git.jpg" },
  { name: "", icon: "/mysql.jpg" },
  { name: "", icon: "/php.jpg" },
  { name: "", icon: "/ts.jpg" },
  { name: "", icon: "/lua.jpg" },
  { name: "", icon: "/blender.jpg" },



];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title2">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">
              {/* Renderiza un ícono JSX o una imagen según el tipo */}
              {typeof skill.icon === "string" ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="icon-image"
                />
              ) : (
                skill.icon
              )}
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
