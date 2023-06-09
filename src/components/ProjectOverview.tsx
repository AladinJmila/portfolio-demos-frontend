import ProjectCard, { Project } from './ProjectCard';
import './ProjectOverview.css';
import Timeline from './Timeline';

interface Props {
  project: Project;
  selectedProject: Project | null;
  flip: boolean;
  onFlip: () => void;
}

const ProjectOverview = ({ project, selectedProject, flip, onFlip }: Props) => {
  return (
    <div className='project-overview'>
      <Timeline date={project.createdAt} />
      <ProjectCard
        key={project.id}
        project={project}
        selectedProject={selectedProject}
        flip={flip}
        onFlip={onFlip}
      />
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
