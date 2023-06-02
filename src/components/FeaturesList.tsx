import FeatureDetails from './FeatureDetails';
import { Feature } from './ProjectCard';

interface Props {
  features?: Feature[];
  activeFeature?: number;
}

const FeaturesList = ({ features, activeFeature }: Props) => {
  return (
    <div className='features-list'>
      {features?.map(feature => {
        return activeFeature === feature.id ? (
          <FeatureDetails key={feature.id} feature={feature} />
        ) : null;
      })}
    </div>
  );
};

export default FeaturesList;
