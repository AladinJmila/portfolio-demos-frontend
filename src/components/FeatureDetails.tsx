import { Feature } from './ProjectCard';
import './FeatureDetails.css';
import { useEffect, useRef } from 'react';

interface Props {
  feature?: Feature;
}

const FeatureDetails = ({ feature }: Props) => {
  const codeSnippetRef = useRef<HTMLDivElement>(null);

  let inserted = false;
  useEffect(() => {
    const codeSnippet = codeSnippetRef.current;
    let script: HTMLScriptElement;
    if (!inserted) {
      script = document.createElement('script');
      script.src = feature?.codeSnippet || '';

      codeSnippet && codeSnippet.appendChild(script);
      inserted = true;
    }

    return () => {
      // codeSnippet?.remove(script)
    };
  }, []);

  return (
    <div className='feature-details'>
      <h3>{feature?.title}</h3>
      <img src={feature?.gif} />
      <p>{feature?.description}</p>
      <div className='code-snippet-container' ref={codeSnippetRef}></div>
    </div>
  );
};

export default FeatureDetails;
