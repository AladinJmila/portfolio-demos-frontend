import React from 'react';
import FeatureDetails from './FeatureDetails';
import { Feature } from './ProjectCard';

interface Props {
  features?: Feature[];
  activeFeature?: number;
  featuresListRef: React.LegacyRef<HTMLDivElement>;
}

const FeaturesList = ({ features, activeFeature, featuresListRef }: Props) => {
  return (
    <div ref={featuresListRef} className='features-list'>
      {features?.map(feature => {
        return activeFeature === feature.id ? (
          <FeatureDetails key={feature.id} feature={feature} />
        ) : null;
      })}
    </div>
  );
};

export default FeaturesList;
