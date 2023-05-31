import FeatureDetails from './FeatureDetails';
import { Feature } from './ProjectCard';

interface Props {
  features?: Feature[];
}

const FeaturesList = ({ features }: Props) => {
  console.log(features);
  return (
    <div className='features-list'>
      {features?.map((feature, index) => (
        <FeatureDetails key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  );
};

export default FeaturesList;
