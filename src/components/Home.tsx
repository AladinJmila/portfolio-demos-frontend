import { useEffect, useState } from 'react';
import { projectsList } from '../data/db';
import { Project } from './ProjectCard';
import './Home.css';
import TechStack from './TechStack';
import ProjectOverview from './ProjectOverview';
import MyOverview from './MyOverview';

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [flip, setFilp] = useState(false);

  useEffect(() => {
    setProjects(projectsList);
  }, []);

  const handleFlip = () => {
    document.body.style.overflow = !flip ? 'hidden' : 'auto';
    setFilp(!flip);
  };

  return (
    <>
      <MyOverview />

      <div className='home-grid'>
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
        <TechStack />
      </div>
    </>
  );
};

export default Home;
