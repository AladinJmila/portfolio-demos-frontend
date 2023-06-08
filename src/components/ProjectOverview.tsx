import ProjectCard, { Project } from './ProjectCard';
import './ProjectOverview.css';

interface Props {
  project: Project;
  onFlip: () => void;
}

const ProjectOverview = ({ project, onFlip }: Props) => {
  return (
    <div className='project-overview'>
      <ProjectCard key={project.id} project={project} onFlip={onFlip} />
      <div className='project-info'>
        <div className='project-title'>
          <h3>{project.title} </h3> <p>({project.type})</p>
        </div>
        <p>
          Project Highlights: Instead of just showing the name and tech stack,
          add a brief description or key features of each project. This will
          provide visitors with a quick overview and make it more engaging.
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
