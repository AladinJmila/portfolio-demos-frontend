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

  const handleFlip = () => setFilp(!flip);

  if (flip)
    return <ProjectDetails project={selectedProject} onFlip={handleFlip} />;

  return (
    <div className='home-grid'>
      <TechStack />
      <div className='projects-grid'>
        {projects.map(project => (
          <ProjectOverview
            project={project}
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
