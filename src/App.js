import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCount completed={5} total={10} />


      <TodoItem />
      <TodoItem />
      <TodoItem />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
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

function TodoItem(){

  return (
    <li>
      <span>V</span>
      <p>Llorar con la llorona</p>
      <span>X</span>
    </li>
  )
}

function TodoCount(props){
  return (
    <h1>
      Completaste {props.completed} de {props.total} TODOs
    </h1>
  )
}
