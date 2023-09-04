import logo from './logo.svg';
import './components/App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header
        logo={logo}
      />
      <div>HELLO MY NAME IS</div>
    </div>
  );
}

export default App;