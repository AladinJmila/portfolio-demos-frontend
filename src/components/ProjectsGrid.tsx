import { useEffect, useState } from 'react';
import { projectsList } from '../data/db';
import ProjectCard, { Project } from './ProjectCard';
import './ProjectsGrid.css';
import ProjectDetails from './ProjectDetails';

const PojectsGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSlectedProject] = useState<Project | null>(null);
  const [flip, setFilp] = useState(false);

  useEffect(() => {
    setProjects(projectsList);
  }, []);

  const handleFlip = () => setFilp(!flip);

  if (flip)
    return <ProjectDetails project={selectedProject} onFlip={handleFlip} />;

  return (
    <div className='projects-grid'>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onFlip={() => {
            handleFlip();
            setSlectedProject(project);
          }}
        />
      ))}
    </div>
  );
};

export default PojectsGrid;
