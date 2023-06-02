import { Feature } from './ProjectCard';
import './FeaturesNav.css';

interface Props {
  features?: Feature[];
  handleClick: (id: number) => void;
}

const FeaturesNav = ({ features, handleClick }: Props) => {
  return (
    <nav className='features-nav'>
      {' '}
      {features?.map(f => (
        <button key={f.id + 'x'} onClick={() => handleClick(f.id)}>
          {f.title}
        </button>
      ))}
    </nav>
  );
};

export default FeaturesNav;
