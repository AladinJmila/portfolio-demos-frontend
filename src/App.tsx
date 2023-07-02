import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <div style={{ margin: '100px 200px 50px' }}>
        As a full-stack developer with a background in architecture, I bring a
        unique blend of skills to the tech industry. Drawing upon my experience
        as a design architect, I excel in problem-solving, providing innovative
        solutions that exceed expectations. I play a valuable role in both my
        team's success and the satisfaction of our customers. Beyond my work
        hours, I dedicate time to developing my own web applications, constantly
        experimenting with new technologies, and nurturing my creative thinking.
      </div>
      <div className='self-introduction'></div>
      <Home />
    </>
  );
}

export default App;
