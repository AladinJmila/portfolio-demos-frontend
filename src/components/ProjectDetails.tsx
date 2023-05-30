import { Project } from './ProjectCard';
import './ProjectDetails.css';

interface Props {
  project: Project | null;
  onFlip: () => void;
}

const ProjectDetails = ({ project, onFlip }: Props) => {
  return (
    <div className='project-details'>
      <div className='header'>
        <h2>{project?.title}</h2>
        <p className='bread-crumbs'>
          <a className='return-btn' href='' onClick={onFlip}>
            All Projects
          </a>
          <span className='chevron'>&gt;</span> {project?.title}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
