import { useEffect, useState } from 'react';
import { projectsList } from '../data/db';

interface Project {
  id: number;
  title: string;
  image: string;
}

const PojectsGrid = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsList);
  }, []);

  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
};

export default PojectsGrid;
