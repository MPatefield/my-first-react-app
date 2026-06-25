import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Restaurants/>
      <Restaurants/>
    </div>
  );
}

function Restaurants() {
  return (
    <div>
      <h1>Restaurants</h1>
      <img src="logo512.png" className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
