// App.js
import logo from './logo.svg';
import enerLogo from './EnerGone-Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={enerLogo} className="App-logo bulb-image" alt="logo" />
        <p>
          Welcome to EnerGone.
        </p>
        <a
          className="App-link"
          href="EnerGone-Log-In.html"  // Changed the href attribute here
          target="_self"
          rel="noopener noreferrer"
        >
          Continue
        </a>
      </header>
    </div>
  );
}

export default App;