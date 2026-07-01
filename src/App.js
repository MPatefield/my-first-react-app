import logo from './logo.svg';
import './App.css';
import CreateJob from './CreateJob';

function App() {

  return (
    <div className="App">
      <h1>Welcome to My First React App!</h1>
      <Restaurants/>
      <VariableDisplay />
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

function VariableDisplay() {
  let stringVariable = "Hello, World!";
  let numberVariable = 42;
  let booleanVariable = true;
  let arrayVariable = [1, 2, 3, 4, 5];
  let objectVariable = { name: "John", age: 30 };

   if (Math.random() > 0.5) {
    stringVariable = "Hello, React!";
    numberVariable = 100;
    booleanVariable = false;
    arrayVariable = [10, 20, 30];
    objectVariable = { name: "Jane", age: 25 };
  }

  function greetUser(name) {
    return <span>Hello, {name}!</span>;
  }

  function ArrayList({items}) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>Variable Display</h2>
      <h1>{greetUser(objectVariable.name)}</h1>
      <p>String Variable: {stringVariable}</p>
      <p>Number Variable: {numberVariable}</p>
      <p>Boolean Variable: {booleanVariable}</p>
      <p>Array Variable: {arrayVariable}</p>
      <ArrayList items={arrayVariable} />
      <p>Object Variable: Name - {objectVariable.name}, Age - {objectVariable.age}</p>
    </div>
  );

  
}





export default App;
