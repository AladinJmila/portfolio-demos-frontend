import './ProjectCard.css';

export interface Project {
  id: number;
  title: string;
  image: string;
}

interface Props {
  project: Project;
  onFlip: () => void;
}

const ProjectCard = ({ project, onFlip }: Props) => {
  return (
    <div onClick={onFlip} className='project-card'>
      <img src={project.image} />
      <h3>{project.title}</h3>
    </div>
  );
};

export default ProjectCard;
