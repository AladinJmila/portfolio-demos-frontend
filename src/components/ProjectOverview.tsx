import ProjectCard, { Project } from './ProjectCard';
import ProjectDetails from './ProjectDetails';
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
      <ProjectCard key={project.id} project={project} onFlip={onFlip} />
      {flip && selectedProject?.id === project.id && (
        <ProjectDetails
          selectedProject={selectedProject}
          flip={flip}
          onFlip={onFlip}
        />
      )}
      <div className='project-info'>
        <div className='links'>
          {project.url ? (
            <a href={project.url} target='_blank'>
              Website
            </a>
          ) : (
            <a />
          )}
          <a href={project.repository} target='_blank'>
            GitHub
          </a>
        </div>
        <div className='project-title'>
          <h3>{project.title} </h3> <p>({project.type})</p>
        </div>
        <p className='project-description'>{project?.description}</p>
      </div>
    </div>
  );
};

export default ProjectOverview;
