import './ProjectCard.css';
import {
  getContrastColor,
  techColorMap,
} from '../services/techstack-colorcode';

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
  type: string;
  createdAt: string;
  image: string;
  techStack: string[];
  url: string;
  repository: string;
  features: Feature[];
}

interface Props {
  project: Project;
  onFlip: () => void;
}

const ProjectCard = ({ project, onFlip }: Props) => {
  const generateChips = (techStack: string[]) => {
    return techStack.map(tech => {
      let backgroundColor = '';

      for (let key in techColorMap) {
        if (techColorMap[key].list.includes(tech))
          backgroundColor = techColorMap[key].color;
      }

      return (
        <div
          style={{ backgroundColor, color: getContrastColor(backgroundColor) }}
          key={tech}
          className='chip'
        >
          {tech}
        </div>
      );
    });
  };

  return (
    <div onClick={onFlip} className='project-card'>
      <div className='image-container'>
        <img src={project.image} />
      </div>
      <div className='tech-stack'>{generateChips(project.techStack)}</div>
    </div>
  );
};

export default ProjectCard;
