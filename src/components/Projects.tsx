import React from 'react';
import './Projects.css';

const projects = [
   {
    id: 0,
    title: 'First Game',
    description: 'ProfileStore-based system handling player data, progression, inventory, and persistence across sessions.',
    image: '/imagen2.png',
    link: 'https://www.roblox.com/share?code=19fc891e159d7247bd16788a3b35c69e&type=ExperienceDetails&stamp=1770090019924',
  },

     {
    id: -1,
    title: 'Second Game',
    description: 'Inventory, Settings, Open Eggs, Animations, Portal system, Pets system.',
    image: '/juego2.png',
    link: 'https://www.roblox.com/share?code=cfde4efa54a0ec43a24550aac9710e8e&type=ExperienceDetails&stamp=1770090944290',
  },
  {
  id: 1,
  title: 'Event System',
  description: 'Item reward system based on requirements',
  image: '/IMG_3457.webp',

  },
  {
    id: 2,
    title: 'Data Base and Template',
    description: 'Template and database base to store both game logic and tools.',
    image: '/DB.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Event-System',
    description: 'System to handle events and rewards based on requirements',
    video: '/video2.mp4',
    link: '#',
  },
    {
    id: 4,
    title: 'Stock System',
    description: 'System to Restock and track inventory',
    image: '/stock.png',
    link: '#',
  },
      {
    id: 5,
    title: 'Combat System without Humanoid',
    description: 'System to handle combat without humanoid characters',
    image: '/ai.png',
    link: '#',
  },
        {
    id: 6,
    title: 'Plot & Resource Collection System with NPCs',
    description: 'System to handle plot and resource collection with NPCs',
    video: '/video1.mp4',
    link: '#',
  },


];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title2">Projects</h2>
      <h2 className="section-title3"> </h2>
      <div>
        
        
      </div>
      <div className="project-grid">

        {projects.map((project) => (
          <div key={project.id} className="project-card">
{project.video ? (
  <video
    className="project-video"
    src={project.video}
    autoPlay
    loop
    muted
    playsInline
  />
) : (
  <img
    src={project.image}
    alt={project.title}
    className="project-image"
    onError={(e: any) => {
      e.currentTarget.src =
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe';
    }}
  />
)}

            <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

               {(project.id === 0 || project.id === -1) && project.link && (
                   <a
                    href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                   className="visit-button"
    >
      Visit
    </a>
  )}
</div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
