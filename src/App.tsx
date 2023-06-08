import './App.css';
import ProjectsGrid from './components/ProjectsGrid';

function App() {
  return (
    <>
      <div style={{ margin: 100 }}>
        Personal Touch: Consider adding a brief bio or introduction about
        yourself on the home page. This could include your skills, experience,
        and a little about your development journey. This personal touch helps
        visitors connect with you as a developer.
      </div>
      <ProjectsGrid />
    </>
  );
}

export default App;
