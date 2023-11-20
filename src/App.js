import logo from './logo.svg';
import './App.css';
import StopWatch from './components/StopWatch';
import WindowWidth from './components/windowWidth';
import MountUnmountAlert from './components/MountUnmountAlert';

function App() {
  return (
    <div className="App">
      <StopWatch />
      <WindowWidth />
      <MountUnmountAlert />
    </div>
  );
}

export default App;
