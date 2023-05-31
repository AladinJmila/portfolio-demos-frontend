import FeatureDetails from './FeatureDetails';
import { Project } from './ProjectCard';
import './ProjectDetails.css';

interface Props {
  project: Project | null;
  onFlip: () => void;
}

const ProjectDetails = ({ project, onFlip }: Props) => {
  return (
    <div className='project-details'>
      <div className='project-header'>
        <h2>{project?.title}</h2>
        <p className='bread-crumbs'>
          <a className='return-btn' href='' onClick={onFlip}>
            All Projects
          </a>
          <span className='chevron'>&gt;</span> {project?.title}
        </p>
      </div>
      <div className='project-body'>
        {project?.url && (
          <iframe className='project-iframe' src={project.url}></iframe>
        )}

        <FeatureDetails feature={project?.features[0]} />
      </div>
    </div>
  );
};

export default ProjectDetails;
