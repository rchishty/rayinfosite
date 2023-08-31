
import logo from './logo.svg';
import './App.css';

function App() {
  document.title = 'rchishty.info'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-text">
        <text>
          Built by&nbsp;
        </text>
        <text style={{color: 'blue'}}>
          Ray Chishty&nbsp;
        </text>
        <text>
          using <code>React.js</code>
        </text>
        </div>
      </header>
    </div>
  );
}

export default App;