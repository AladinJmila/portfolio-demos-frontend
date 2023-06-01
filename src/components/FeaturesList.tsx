import { useState } from 'react';
import FeatureDetails from './FeatureDetails';
import { Feature } from './ProjectCard';

interface Props {
  features?: Feature[];
}

const FeaturesList = ({ features }: Props) => {
  const [activeFeature, setActiveFeature] = useState(features?.[0].id);

  return (
    <div className='features-list'>
      {features?.map(f => (
        <button onClick={() => setActiveFeature(f.id)}>{f.title}</button>
      ))}
      {features?.map((feature, index) => {
        return activeFeature === feature.id ? (
          <FeatureDetails key={feature.id} feature={feature} />
        ) : null;
      })}
    </div>
  );
};

export default FeaturesList;
