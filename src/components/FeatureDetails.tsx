import { Feature } from './ProjectCard';
import './FeatureDetails.css';
import { useEffect } from 'react';

interface Props {
  feature?: Feature;
  index: number;
}

const FeatureDetails = ({ feature, index }: Props) => {
  let inserted = false;
  useEffect(() => {
    let fd: HTMLElement | null;
    setTimeout(() => {
      if (!inserted) {
        fd = document.querySelector('.feature-details');
        const script = document.createElement('script');
        script.src = feature?.codeSnippet || '';

        fd?.appendChild(script);
        inserted = true;
      }
    }, 500);

    return () => {
      fd && fd?.remove();
    };
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
