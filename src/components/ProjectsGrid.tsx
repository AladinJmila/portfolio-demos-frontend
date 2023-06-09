import { useEffect, useState } from 'react';
import { projectsList } from '../data/db';
import { Project } from './ProjectCard';
import './ProjectsGrid.css';
import ProjectDetails from './ProjectDetails';
import TechStack from './TechStack';
import ProjectOverview from './ProjectOverview';

const PojectsGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [flip, setFilp] = useState(false);

  useEffect(() => {
    setProjects(projectsList);
  }, []);

  const handleFlip = () => {
    // document.body.style.overflow = !flip ? 'hidden' : 'auto';
    setFilp(!flip);
  };

  return (
    <div className='home-grid'>
      <TechStack />
      <div className='projects-grid'>
        {projects.map(project => (
          <ProjectOverview
            project={project}
            selectedProject={selectedProject}
            flip={flip}
            onFlip={() => {
              handleFlip();
              setSelectedProject(project);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PojectsGrid;
