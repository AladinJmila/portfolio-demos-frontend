import './ProjectCard.css';

export interface Feature {
  id: number;
  title: string;
  gif: string;
  description: string;
  codeSnippet: string;
}

export interface Project {
  id: number;
  title: string;
  image: string;
  type: string;
  techStack: string[];
  url: string;
  features: Feature[];
}

interface Props {
  project: Project;
  onFlip: () => void;
}

const ProjectCard = ({ project, onFlip }: Props) => {
  return (
    <div onClick={onFlip} className='project-card'>
      <div className='image-container'>
        <img src={project.image} />
      </div>
      <div className='project-meta-data'>
        <div className='tech-stack'>
          {project.techStack.map(tech => (
            <div key={tech} className='chip'>
              {tech}
            </div>
          ))}
        </div>
        <div className='project-title'>
          <h3>{project.title} </h3> <p>({project.type})</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
