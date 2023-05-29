import { useEffect, useState } from 'react';
import { projectsList } from '../data/db';
import ProjectCard, { Project } from './ProjectCard';
import './ProjectsGrid.css';

const PojectsGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsList);
  }, []);

  return (
    <div className='projects-grid'>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default PojectsGrid;
