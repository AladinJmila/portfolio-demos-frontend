import {
  getContrastColor,
  techColorMap,
} from '../services/techstack-colorcode';
import './TechStack.css';

const TechStack = () => {
  const mapKey = [];
  for (let key in techColorMap) {
    mapKey.push({ type: key, color: techColorMap[key].color });
  }

  return (
    <div className='techstack-map'>
      <div className='sticky'>
        {mapKey.map(tech => (
          <div
            className='tech-group'
            key={tech.type}
            style={{
              backgroundColor: tech.color,
              color: getContrastColor(tech.color),
            }}
          >
            {tech.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
