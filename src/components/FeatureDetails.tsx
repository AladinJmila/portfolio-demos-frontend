import { Feature } from './ProjectCard';
import './FeatureDetails.css';
import { useEffect, useRef, useState } from 'react';

interface Props {
  feature?: Feature;
  featureRef: React.LegacyRef<HTMLDivElement>;
}

const FeatureDetails = ({ feature, featureRef }: Props) => {
  const [toggleView, setToggleView] = useState(true);
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
      // codeSnippet?.removeChild(script);
    };
  }, [toggleView]);

  return (
    <div className='feature-details'>
      <nav ref={featureRef}>
        <button
          className={toggleView ? 'active' : ''}
          onClick={() => setToggleView(true)}
        >
          Gif
        </button>
        <button
          className={toggleView ? '' : 'active'}
          onClick={() => setToggleView(false)}
        >
          Code
        </button>
      </nav>
      <div className='feature-media'>
        {toggleView ? (
          <img src={feature?.gif} />
        ) : (
          <div className='code-snippet-container' ref={codeSnippetRef}></div>
        )}
      </div>
      {feature?.description && (
        <p>
          Description: <br />
          <br /> {feature?.description}
        </p>
      )}
    </div>
  );
};

export default FeatureDetails;
