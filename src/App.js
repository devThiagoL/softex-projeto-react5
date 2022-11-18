import logo from './logo.svg';
import './App.css';
import Comp from './componente';
import Welcome from './comprops';
import Contar from './exemplohook';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estudante Thiago Lima 
          <Comp />
          <Welcome />
          <Contar />
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  
      </header>
    </div>
  );
}


export default App;
