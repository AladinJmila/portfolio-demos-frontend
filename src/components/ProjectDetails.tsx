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
        <button className='return-btn' onClick={onFlip}>
          All Projects
        </button>
        <h2>{project?.title}</h2>
      </div>
    </div>
  );
};

export default ProjectDetails;
