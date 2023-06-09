import './ProjectCard.css';
import {
  getContrastColor,
  techColorMap,
} from '../services/techstack-colorcode';
import ProjectDetails from './ProjectDetails';

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
  features: Feature[];
}

interface Props {
  project: Project;
  selectedProject: Project | null;
  flip: boolean;
  onFlip: () => void;
}

const ProjectCard = ({ project, selectedProject, flip, onFlip }: Props) => {
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
      {flip && selectedProject?.id === project.id && (
        <ProjectDetails
          selectedProject={selectedProject}
          flip={flip}
          onFlip={onFlip}
        />
      )}
    </div>
  );
};

export default ProjectCard;
