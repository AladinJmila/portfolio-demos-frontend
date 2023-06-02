import { Feature } from './ProjectCard';
import './FeaturesNav.css';

interface Props {
  features?: Feature[];
  handleClick: (id: number) => void;
  activeFeature?: number;
}

const FeaturesNav = ({ features, handleClick, activeFeature }: Props) => {
  return (
    <nav className='features-nav'>
      {features?.map(f => (
        <button
          className={f.id === activeFeature ? 'active' : ''}
          key={f.id + 'x'}
          onClick={() => handleClick(f.id)}
        >
          {f.title}
        </button>
      ))}
    </nav>
  );
};

export default FeaturesNav;
