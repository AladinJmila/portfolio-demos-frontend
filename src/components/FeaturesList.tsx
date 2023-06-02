import FeatureDetails from './FeatureDetails';
import { Feature } from './ProjectCard';

interface Props {
  features?: Feature[];
  activeFeature?: number;
  featureRef: React.LegacyRef<HTMLDivElement>;
}

const FeaturesList = ({ features, activeFeature, featureRef }: Props) => {
  return (
    <div className='features-list'>
      {features?.map(feature => {
        return activeFeature === feature.id ? (
          <FeatureDetails
            key={feature.id}
            feature={feature}
            featureRef={featureRef}
          />
        ) : null;
      })}
    </div>
  );
};

export default FeaturesList;
