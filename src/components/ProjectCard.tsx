import Chip from './Chip';
import './ProjectCard.css';

export interface Project {
  id: number;
  title: string;
  image: string;
  techStack: string[];
}

interface Props {
  project: Project;
  onFlip: () => void;
}

const ProjectCard = ({ project, onFlip }: Props) => {
  return (
    <div onClick={onFlip} className='project-card'>
      <img src={project.image} />
      <div className='project-meta-data'>
        <div className='tech-stack'>
          {project.techStack.map(tech => (
            <Chip key={tech} text={tech} />
          ))}
        </div>
        <h3>{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
