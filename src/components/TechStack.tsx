import { techColorMap } from '../services/techstack-colorcode';
import './TechStack.css';

const TechStack = () => {
  const mapKey = [];
  for (let key in techColorMap) {
    mapKey.push({ type: key, color: techColorMap[key].color });
  }

  return (
    <div className='techstack-map'>
      {mapKey.map(tech => (
        <>
          <p key={tech.type}>{tech.type}</p>
          <span style={{ backgroundColor: tech.color }}></span>
        </>
      ))}
    </div>
  );
};

export default TechStack;
