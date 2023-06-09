import { useState, useRef } from 'react';

import FeaturesNav from './FeaturesNav';
import FeaturesList from './FeaturesList';
import { Project } from './ProjectCard';
import './ProjectDetails.css';

interface Props {
  project: Project | null;
  flip: boolean;
  onFlip: () => void;
}

const ProjectDetails = ({ project, flip, onFlip }: Props) => {
  const [activeFeature, setActiveFeature] = useState(project?.features?.[0].id);

  const featureRef = useRef<HTMLDivElement>(null);

  const handleFeatureClick = (id: number) => {
    setActiveFeature(id);
    if (featureRef.current)
      featureRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
  };

  return (
    <div className={flip ? 'tv on' : 'tv'}>
      <div className='screen'>
        <div className='project-details'>
          <div className='sticky-content'>
            <div className='project-header'>
              <h2>{project?.title}</h2>
              <p className='bread-crumbs'>
                <a className='return-btn' href='' onClick={onFlip}>
                  All Projects
                </a>
                <span className='chevron'>&gt;</span> {project?.title}
              </p>
              <FeaturesNav
                features={project?.features}
                handleClick={handleFeatureClick}
                activeFeature={activeFeature}
              />
            </div>
          </div>

          <div className='project-body'>
            {project?.url && (
              <iframe className='project-iframe' src={project.url}></iframe>
            )}

            <FeaturesList
              features={project?.features}
              activeFeature={activeFeature}
              featureRef={featureRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
