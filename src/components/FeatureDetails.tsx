import { Feature } from './ProjectCard';
import './FeatureDetails.css';
import { useEffect } from 'react';

interface Props {
  feature?: Feature;
}

let inserted = false;

const FeatureDetails = ({ feature }: Props) => {
  useEffect(() => {
    if (!inserted) {
      const fd = document.querySelector('.feature-details');
      const script = document.createElement('script');
      script.src =
        'https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2FAladinJmila%2Fportfolio-demos%2Fblob%2Fmaster%2Fsrc%2Fcomponents%2FProjectCard.tsx&style=atom-one-dark&type=code&showLineNumbers=on&showFullPath=on';

      fd?.appendChild(script);
      inserted = true;
    }
  }, []);

  return (
    <div className='feature-details'>
      <h3>{feature?.title}</h3>
      <img src={feature?.gif} />
      <p>{feature?.description}</p>
    </div>
  );
};

export default FeatureDetails;
