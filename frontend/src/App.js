import logo from './logo.svg';
import './App.css';
import TimeComponent from './components/TimeComponent';
import MetricsComponent from './components/MetricsComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Task</h1>
      </header>
      <TimeComponent/>
      <MetricsComponent/>
    </div>
  );
  }

export default App;
